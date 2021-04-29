import { useState } from 'react';
import { useParams } from 'react-router';
import { gql, useMutation, useQuery } from '@apollo/client';
import { Snackbar } from '@material-ui/core';

import {
  MY_ROLE_QUERY,
  ROLES,
  MyRoleResult,
} from '../middlewares/MinimumRoleRoute';
import UpdateRole from '../../components/Dialogs/UpdateRole';
import { UserRole } from '../../pages/Projects/Roles';

const UPDATE_ROLE_QUERY = gql`
  mutation web_updateUserProjectRole(
    $projectId: ID!
    $userId: ID!
    $role: InvitedRole!
  ) {
    updateUserProjectRole(projectId: $projectId, userId: $userId, role: $role) {
      id
    }
  }
`;

type UpdateRoleResult = { updateUserProjectRole: { id: string } };
type UpdateRoleVariables = { projectId: string; userId: string; role: ROLES };

type UpdateRoleContainerProps = {
  userRole: UserRole;
  isOpen: boolean;
  closeModal: () => void;
};

const UpdateRoleContainer: React.FC<UpdateRoleContainerProps> = ({
  userRole,
  isOpen,
  closeModal,
}) => {
  const { projectId } = useParams();
  const [selectedRole, setSelectedRole] = useState<ROLES>(ROLES.CONTRIBUTOR);
  const [errorMessage, setErrorMessage] = useState<string | undefined>();
  const [updateRole, { loading: isLoading }] = useMutation<
    UpdateRoleResult,
    UpdateRoleVariables
  >(UPDATE_ROLE_QUERY, {
    onError: (err) => setErrorMessage(err.message),
  });
  const { data } = useQuery<MyRoleResult>(MY_ROLE_QUERY, {
    variables: { projectId },
  });

  const isOwner = data?.myRole?.role === ROLES.OWNER;

  function onClose() {
    if (isLoading) return;
    closeModal();
  }

  const onSnackbarClose = () => setErrorMessage(undefined);

  return (
    <>
      <UpdateRole
        {...{
          isOwner,
          isLoading,
          isOpen,
          selectedRole,
          setSelectedRole,
          currentRole: userRole.role as ROLES,
          displayName: userRole.user.displayName,
          onClose,
          updateRole: () =>
            updateRole({
              variables: {
                projectId,
                userId: userRole.user.id,
                role: selectedRole,
              },
            }),
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

export default UpdateRoleContainer;
