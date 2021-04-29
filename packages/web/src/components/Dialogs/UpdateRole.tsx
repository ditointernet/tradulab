import React from 'react';
import {
  Box,
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
} from '@material-ui/core';

import { ROLES } from '../../containers/middlewares/MinimumRoleRoute';
import { SetState } from '../../types';
import LoadingBar from '../LoadingBar';
import { ROLE_NAMES } from '../../constants/roles';

type UpdateRoleDialogProps = {
  onClose: () => void;
  setSelectedRole: SetState<ROLES>;
  updateRole: () => void;
  currentRole: ROLES;
  displayName: string;
  selectedRole: ROLES;
  isLoading: boolean;
  isOwner: boolean;
  isOpen: boolean;
};

const UpdateRoleDialog: React.FC<UpdateRoleDialogProps> = ({
  onClose,
  setSelectedRole,
  updateRole,
  currentRole,
  displayName,
  selectedRole,
  isLoading,
  isOwner,
  isOpen,
}) => {
  const roleOptions = [
    { id: ROLES.CONTRIBUTOR },
    { id: ROLES.PROOFREADER },
    { id: ROLES.DEVELOPER },
    { id: ROLES.MANAGER, hidden: isOwner },
  ];

  return (
    <Dialog open={isOpen} onClose={onClose}>
      <DialogTitle>Update an user's role</DialogTitle>
      <DialogContent>
        <DialogContentText>
          Update <strong>@{displayName}</strong>'s role in the project to a
          higher or lower role.
        </DialogContentText>
        <Box>
          <FormControl fullWidth variant="outlined">
            <InputLabel htmlFor="role">Role</InputLabel>
            <Select
              native={isSafari(navigator.userAgent)}
              label="Role"
              value={selectedRole}
              onChange={(event) => setSelectedRole(event.target.value as ROLES)}
              inputProps={{ id: 'role' }}
            >
              {(() => {
                const Option: React.FC<{ value: string }> = (props) => (
                  <option {...props} />
                );
                const Component = isSafari(navigator.userAgent)
                  ? Option
                  : MenuItem;

                return roleOptions.map((role) => (
                  <Component
                    key={role.id}
                    value={role.id}
                    disabled={role.id === currentRole}
                  >
                    {ROLE_NAMES[role.id]}
                  </Component>
                ));
              })()}
            </Select>
          </FormControl>
        </Box>
      </DialogContent>
      <DialogActions>
        <Button color="default" onClick={onClose}>
          Cancel
        </Button>
        <Button color="secondary" onClick={updateRole}>
          Update
        </Button>
      </DialogActions>
      <LoadingBar isLoading={isLoading} />
    </Dialog>
  );
};

const isSafari = (ua: string) =>
  ua.includes('Safari') && !ua.includes('Chrome');

export default UpdateRoleDialog;
