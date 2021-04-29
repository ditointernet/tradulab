import {
  Box,
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  Fade,
  FormControl,
  Grid,
  InputLabel,
  LinearProgress,
  Select,
  TextField,
  Typography,
  makeStyles,
} from '@material-ui/core';
import Autocomplete from '@material-ui/lab/Autocomplete';

import { ROLES } from '../../containers/middlewares/MinimumRoleRoute';
import { User } from '../../containers/InviteUserDialog';
import React from 'react';
import { SetState } from '../../types';

const useStyles = makeStyles((theme) => ({
  inputs: { display: 'flex' },
  userInput: { display: 'flex', flex: '1' },
  select: { marginLeft: theme.spacing(2) },
  loadingPlaceholder: {
    height: theme.spacing(0.5),
  },
}));

type InviteUserDialogProps = {
  onClose: () => void;
  setSelectedUser: SetState<User | null>;
  setAutocompleteValue: SetState<string>;
  setSelectedRole: SetState<ROLES>;
  inviteUser: (projectId: string, selectedUser: string, role: ROLES) => void;
  options: User[];
  projectId: string;
  selectedUser: User | null;
  selectedRole: ROLES;
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
  options,
  projectId,
  selectedUser,
  selectedRole,
  isSubmitting,
  isOwner,
  isOpen,
}) => {
  const styles = useStyles();

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
            options={options}
            value={selectedUser}
            onChange={(e, newValue) => setSelectedUser(newValue)}
            getOptionLabel={(option) => option.displayName}
            onInputChange={(_e, newInputValue) =>
              setAutocompleteValue(newInputValue)
            }
            renderInput={(params) => (
              <TextField
                {...params}
                fullWidth
                label="Username"
                placeholder="Start typing the username you want to invite"
                variant="outlined"
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
              native
              label="Role"
              value={selectedRole}
              onChange={(event) => setSelectedRole(event.target.value as ROLES)}
              inputProps={{ id: 'role' }}
              defaultValue="contributor"
            >
              {/* <option value="viewer">Viewer</option> */}
              <option value={ROLES.CONTRIBUTOR}>Contributor</option>
              <option value={ROLES.PROOFREADER}>Proofreader</option>
              <option value={ROLES.DEVELOPER}>Developer</option>
              {isOwner && <option value={ROLES.MANAGER}>Manager</option>}
            </Select>
          </FormControl>
        </Box>
      </DialogContent>
      <DialogActions>
        <Button color="default" onClick={onClose}>
          Cancel
        </Button>
        <Button
          color="secondary"
          onClick={() =>
            !!selectedUser &&
            inviteUser(projectId, selectedUser.id, selectedRole)
          }
        >
          Invite
        </Button>
      </DialogActions>
      {isSubmitting ? (
        <Fade
          in={isSubmitting}
          style={{
            transitionDelay: isSubmitting ? '800ms' : '0ms',
          }}
          unmountOnExit
        >
          <LinearProgress />
        </Fade>
      ) : (
        <div className={styles.loadingPlaceholder} />
      )}
    </Dialog>
  );
};

export default InviteUserDialog;
