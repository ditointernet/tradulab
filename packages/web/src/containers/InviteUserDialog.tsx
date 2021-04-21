import { useEffect, useRef, useState } from 'react';
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
  FormControlLabel,
  Grid,
  InputLabel,
  LinearProgress,
  Select,
  makeStyles,
  TextField,
  Typography,
} from '@material-ui/core';
import Autocomplete from '@material-ui/lab/Autocomplete';
import { gql, useLazyQuery, useMutation, useQuery } from '@apollo/client';

import {
  MY_ROLE_QUERY,
  ROLES,
  MyRoleResult,
} from './middlewares/MinimumRoleRoute';
import { useParams } from 'react-router';

const useStyles = makeStyles((theme) => ({
  inputs: { display: 'flex' },
  userInput: { display: 'flex', flex: '1' },
  select: { marginLeft: theme.spacing(2) },
  loadingPlaceholder: {
    height: theme.spacing(0.5),
  },
}));

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

type User = { id: string; username: string; displayName: string };

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
  const styles = useStyles();
  const { projectId } = useParams();
  const [autoCompleteValue, setAutoCompleteValue] = useState<string>('');
  const [selectedUser, setSelectedUser] = useState<User | null>(null);
  const [selectedRole, setSelectedRole] = useState<ROLES>(ROLES.CONTRIBUTOR);
  const [options, setOptions] = useState<User[]>([]);
  const [findUsers, { loading: isLoading, error: apolloError }] = useLazyQuery<
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
    if (autoCompleteValue.length < 3) return;

    findUsers({ variables: { searchTerm: autoCompleteValue } });
  }, [autoCompleteValue]);

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
              setAutoCompleteValue(newInputValue)
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
            inviteUser({
              variables: {
                projectId,
                userId: selectedUser.id,
                role: selectedRole,
              },
            })
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

export default InviteUserDialogContainer;
