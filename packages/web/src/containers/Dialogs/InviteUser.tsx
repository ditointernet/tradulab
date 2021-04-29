import { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import { gql, useLazyQuery, useMutation, useQuery } from '@apollo/client';
import { Snackbar } from '@material-ui/core';

import {
  MY_ROLE_QUERY,
  ROLES,
  MyRoleResult,
} from '../middlewares/MinimumRoleRoute';
import InviteUserDialog from '../../components/Dialogs/InviteUser';
import { Connnection } from '../../types';

const FIND_USERS_BY_USERNAME_QUERY = gql`
  query web_findUsersByUsername($searchTerm: String!) {
    findUsersByUsername(searchTerm: $searchTerm) {
      edges {
        node {
          id
          username
          displayName
        }
      }
    }
  }
`;

const INVITE_USER_QUERY = gql`
  mutation web_inviteUserToProject(
    $projectId: ID!
    $userId: ID!
    $role: InvitedRole!
  ) {
    inviteUserToProject(projectId: $projectId, userId: $userId, role: $role) {
      id
      role
      createdAt
      user {
        id
        displayName
      }
    }
  }
`;

export type User = { id: string; username: string; displayName: string };

type FindUsersResult = { findUsersByUsername: Connnection<User> };
type FindUsersVariables = { searchTerm: string };

type InviteUserResult = { inviteUserToProject: { id: string } };
type InviteUserVariables = { projectId: string; userId: string; role: ROLES };

type InviteUserDialogContainerProps = {
  isOpen: boolean;
  closeModal: () => void;
};

const InviteUserDialogContainer: React.FC<InviteUserDialogContainerProps> = ({
  isOpen,
  closeModal,
}) => {
  const { projectId } = useParams();
  const [autocompleteValue, setAutocompleteValue] = useState<string>('');
  const [selectedUser, setSelectedUser] = useState<User | null>(null);
  const [selectedRole, setSelectedRole] = useState<ROLES>(ROLES.CONTRIBUTOR);
  const [options, setOptions] = useState<User[]>([]);
  const [inputError, setInputError] = useState<string | null>(null);
  const [errorMessage, setErrorMessage] = useState<string | undefined>();
  const [findUsers, { loading: isLoadingUsers }] = useLazyQuery<
    FindUsersResult,
    FindUsersVariables
  >(FIND_USERS_BY_USERNAME_QUERY, {
    onCompleted: (response) =>
      setOptions(response.findUsersByUsername.edges.map((node) => node.node)),
  });
  const [inviteUser, { loading: isSubmitting }] = useMutation<
    InviteUserResult,
    InviteUserVariables
  >(INVITE_USER_QUERY, {
    onCompleted: () => closeModal(),
    onError: (err) => setErrorMessage(err.message),

    update(cache, { data }) {
      if (!data) return;

      const newUserWithRoleRef = cache.writeFragment({
        id: cache.identify(data.inviteUserToProject),
        data: { node: data.inviteUserToProject },
        fragment: gql`
          fragment NewUserWithRoleNode on UserWithRoleNode {
            node {
              id
              role
              createdAt
              user {
                id
                displayName
              }
            }
          }
        `,
      });

      cache.modify({
        fields: {
          projectUsers(existingConnection) {
            return {
              ...existingConnection,
              edges: [...existingConnection.edges, newUserWithRoleRef],
            };
          },
        },
      });
    },
  });
  const { data } = useQuery<MyRoleResult>(MY_ROLE_QUERY, {
    variables: { projectId },
  });

  const isOwner = data?.myRole?.role === ROLES.OWNER;

  function onClose() {
    if (isSubmitting) return;
    closeModal();
  }

  useEffect(() => {
    if (autocompleteValue.length < 3) return;

    findUsers({ variables: { searchTerm: autocompleteValue } });
  }, [autocompleteValue, findUsers]);

  const onSnackbarClose = () => setErrorMessage(undefined);

  return (
    <>
      <InviteUserDialog
        {...{
          isOwner,
          isSubmitting,
          isLoadingUsers,
          isOpen,
          projectId,
          selectedRole,
          selectedUser,
          options,
          setAutocompleteValue,
          setSelectedRole,
          setSelectedUser: (user) => {
            setInputError(null);
            setSelectedUser(user);
          },
          onClose,
          inputError,
          inviteUser: () => {
            if (!selectedUser) {
              setInputError('You must select an user to invite');
              return;
            }

            inviteUser({
              variables: {
                projectId,
                userId: selectedUser.id,
                role: selectedRole,
              },
            });
          },
        }}
      />
      <Snackbar
        anchorOrigin={{ vertical: 'top', horizontal: 'center' }}
        open={!!errorMessage}
        message={errorMessage}
        autoHideDuration={6000}
        onClose={onSnackbarClose}
      />
    </>
  );
};

export default InviteUserDialogContainer;
