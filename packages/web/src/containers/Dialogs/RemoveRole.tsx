import { useState } from 'react';
import { useParams } from 'react-router';
import { gql, useMutation } from '@apollo/client';
import { Snackbar } from '@material-ui/core';

import { ROLES } from '../middlewares/MinimumRoleRoute';
import RemoveRoleDialog from '../../components/Dialogs/RemoveRole';
import { UserRole } from '../../pages/Projects/Roles';

const REMOVE_ROLE_QUERY = gql`
  mutation web_removeUserFromProject($projectId: ID!, $userId: ID!) {
    removeUserFromProject(projectId: $projectId, userId: $userId)
  }
`;

type RemoveRoleResult = { removeUserFromProject: boolean };
type RemoveRoleVariables = { projectId: string; userId: string };

type RemoveRoleDialogContainerProps = {
  userRole: UserRole;
  isOpen: boolean;
  closeModal: () => void;
};

const RemoveRoleDialogContainer: React.FC<RemoveRoleDialogContainerProps> = ({
  userRole,
  isOpen,
  closeModal,
}) => {
  const { projectId } = useParams();
  const [errorMessage, setErrorMessage] = useState<string | undefined>();
  const [removeRole, { loading: isLoading }] = useMutation<
    RemoveRoleResult,
    RemoveRoleVariables
  >(REMOVE_ROLE_QUERY, {
    onCompleted: () => closeModal(),
    onError: (err) => setErrorMessage(err.message),

    update(cache) {
      cache.modify({
        fields: {
          projectUsers(existingConnection, { readField }) {
            return {
              ...existingConnection,
              edges: existingConnection.edges.filter(
                (nodeRef: { node: UserRole }) =>
                  userRole.id !== readField('id', nodeRef.node)
              ),
            };
          },
        },
      });
    },
  });

  function onClose() {
    if (isLoading) return;
    closeModal();
  }

  const onSnackbarClose = () => setErrorMessage(undefined);

  return (
    <>
      <RemoveRoleDialog
        {...{
          isLoading,
          isOpen,
          onClose,
          displayName: userRole.user.displayName,
          role: userRole.role as ROLES,
          removeRole: () => {
            removeRole({
              variables: {
                projectId,
                userId: userRole.user.id,
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

export default RemoveRoleDialogContainer;
