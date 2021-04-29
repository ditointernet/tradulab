import React from 'react';
import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  makeStyles,
} from '@material-ui/core';

import { ROLES } from '../../containers/middlewares/MinimumRoleRoute';
import { ROLE_NAMES } from '../../constants/roles';
import LoadingBar from '../LoadingBar';

const useStyles = makeStyles((theme) => ({
  button: { color: theme.palette.error.main },
}));

type RemoveRoleDialogProps = {
  onClose: () => void;
  removeRole: () => void;
  isLoading: boolean;
  isOpen: boolean;
  displayName: string;
  role: ROLES;
};

const RemoveRoleDialog: React.FC<RemoveRoleDialogProps> = ({
  onClose,
  removeRole,
  isLoading,
  isOpen,
  displayName,
  role,
}) => {
  const styles = useStyles();

  return (
    <Dialog open={isOpen} onClose={onClose}>
      <DialogTitle>Remove an user</DialogTitle>
      <DialogContent>
        <DialogContentText>
          Are you sure you want to remove <strong>@{displayName}</strong>'s{' '}
          {ROLE_NAMES[role]} role from the project?
        </DialogContentText>
      </DialogContent>
      <DialogActions>
        <Button color="default" onClick={onClose}>
          Cancel
        </Button>
        <Button className={styles.button} onClick={removeRole}>
          Remove
        </Button>
      </DialogActions>
      <LoadingBar isLoading={isLoading} />
    </Dialog>
  );
};

export default RemoveRoleDialog;
