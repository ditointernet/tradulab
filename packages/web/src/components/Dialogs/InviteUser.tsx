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
  Grid,
  InputLabel,
  Select,
  TextField,
  Typography,
  makeStyles,
  MenuItem,
} from '@material-ui/core';
import Autocomplete from '@material-ui/lab/Autocomplete';

import { ROLES } from '../../containers/middlewares/MinimumRoleRoute';
import { User } from '../../containers/Dialogs/InviteUser';
import { SetState } from '../../types';
import LoadingBar from '../LoadingBar';
import { ROLE_NAMES } from '../../constants/roles';

const useStyles = makeStyles((theme) => ({
  inputs: { display: 'flex' },
  userInput: { display: 'flex', flex: '1' },
  select: { marginLeft: theme.spacing(2) },
}));

type InviteUserDialogProps = {
  onClose: () => void;
  setSelectedUser: (user: User | null) => void;
  setAutocompleteValue: SetState<string>;
  setSelectedRole: SetState<ROLES>;
  inviteUser: () => void;
  options: User[];
  projectId: string;
  selectedUser: User | null;
  selectedRole: ROLES;
  inputError: string | null;
  isLoadingUsers: boolean;
  isSubmitting: boolean;
  isOwner: boolean;
  isOpen: boolean;
};

const InviteUserDialog: React.FC<InviteUserDialogProps> = ({
  onClose,
  setSelectedUser,
  setAutocompleteValue,
  setSelectedRole,
  inviteUser,
  inputError,
  options,
  selectedUser,
  selectedRole,
  isLoadingUsers,
  isSubmitting,
  isOwner,
  isOpen,
}) => {
  const styles = useStyles();

  const roleOptions = [
    { id: ROLES.CONTRIBUTOR },
    { id: ROLES.PROOFREADER },
    { id: ROLES.DEVELOPER },
    { id: ROLES.MANAGER, hidden: isOwner },
  ];

  return (
    <Dialog open={isOpen} onClose={onClose}>
      <DialogTitle>Invite an user</DialogTitle>
      <DialogContent>
        <DialogContentText>
          Invite users to contribute or manage the progress of your project's
          translations.
        </DialogContentText>
        <Box className={styles.inputs}>
          <Autocomplete
            className={styles.userInput}
            loading={isLoadingUsers}
            loadingText="Loading users"
            noOptionsText="No users were found"
            options={options}
            value={selectedUser}
            onChange={(e, newValue) => setSelectedUser(newValue)}
            getOptionLabel={(option) => option.displayName}
            getOptionSelected={(option) => selectedUser?.id === option.id}
            onInputChange={(_e, newInputValue) =>
              setAutocompleteValue(newInputValue)
            }
            renderInput={(params) => (
              <TextField
                {...params}
                fullWidth
                label="Username"
                placeholder="Type the username you want to invite"
                variant="outlined"
                error={!!inputError}
                helperText={inputError}
              />
            )}
            renderOption={(option) => (
              <Grid item xs>
                <span>{option.displayName}</span>
                <Typography variant="body2" color="textSecondary">
                  @{option.username}
                </Typography>
              </Grid>
            )}
          />
          <FormControl variant="outlined" className={styles.select}>
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
                  <Component key={role.id} value={role.id}>
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
        <Button color="secondary" onClick={inviteUser}>
          Invite
        </Button>
      </DialogActions>
      <LoadingBar isLoading={isSubmitting} />
    </Dialog>
  );
};

const isSafari = (ua: string) =>
  ua.includes('Safari') && !ua.includes('Chrome');

export default InviteUserDialog;
