import { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import { gql, useLazyQuery, useMutation, useQuery } from '@apollo/client';

import {
  MY_ROLE_QUERY,
  ROLES,
  MyRoleResult,
} from '../middlewares/MinimumRoleRoute';
import InviteUserDialog from '../../components/Dialogs/InviteUser';

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
    }
  }
`;

export type User = { id: string; username: string; displayName: string };

type FindUsersResult = {
  findUsersByUsername: { edges: Array<{ node: User }> };
};
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
  >(INVITE_USER_QUERY);
  const { data } = useQuery<MyRoleResult>(MY_ROLE_QUERY, {
    variables: { projectId },
  });

  const isOwner = data?.myRole?.role === ROLES.OWNER;

  function onClose() {
    if (isSubmitting) return;
    closeModal();
  }

  // todo: handle error if user is not selected

  useEffect(() => {
    if (autocompleteValue.length < 3) return;

    findUsers({ variables: { searchTerm: autocompleteValue } });
  }, [autocompleteValue, findUsers]);

  return (
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
        setSelectedUser,
        onClose,
        inviteUser: (projectId, userId, role) =>
          inviteUser({ variables: { projectId, userId, role } }),
      }}
    />
  );
};

export default InviteUserDialogContainer;
