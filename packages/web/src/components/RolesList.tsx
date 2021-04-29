import {
  Box,
  Button,
  Card,
  CardContent,
  Chip,
  IconButton,
  Input,
  InputAdornment,
  makeStyles,
  Menu,
  MenuItem,
  Typography,
} from '@material-ui/core';
import Skeleton from '@material-ui/lab/Skeleton';
import { MoreVert, Search } from '@material-ui/icons';
import { ApolloError } from '@apollo/client';

import PageTemplate from '../components/PageTemplate';
import { UserRole } from '../pages/Projects/Roles';
import { ClassNameMap } from '@material-ui/styles';
import { spaces, repeat } from '../helpers';
import { useState } from 'react';

const useStyles = makeStyles((theme) => ({
  controls: { marginBottom: theme.spacing(3) },
  card: { '&:not(:last-of-type)': { marginBottom: theme.spacing(2) } },
  flex: { display: 'flex' },
  role: { textTransform: 'capitalize', marginRight: theme.spacing(1) },
}));

type RolesListProps = {
  isLoading: boolean;
  apolloError?: ApolloError;
  onSearchChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  openUserInviteModal: () => void;
  openRemoveRoleModal: (userRole: UserRole) => true;
  openUpdateRoleModal: (userRole: UserRole) => true;
  rows: UserRole[];
};

const RolesList: React.FC<RolesListProps> = ({
  isLoading,
  apolloError,
  onSearchChange,
  openUserInviteModal,
  openRemoveRoleModal,
  openUpdateRoleModal,
  rows,
}) => {
  const styles = useStyles();

  return (
    <>
      <PageTemplate
        title="Your members"
        maxWidth="md"
        {...{ isLoading, apolloError }}
      >
        <Box
          display="flex"
          justifyContent="space-between"
          className={styles.controls}
        >
          <Input
            placeholder="Search for your members"
            onChange={onSearchChange}
            margin="none"
            startAdornment={
              <InputAdornment position="start">
                <Search />
              </InputAdornment>
            }
          />
          <Button
            variant="contained"
            color="primary"
            onClick={openUserInviteModal}
          >
            Invite user
          </Button>
        </Box>
        {(isLoading ? MOCK_SKELETON_ROWS : rows).map((userRole) => (
          <RoleCard
            key={userRole.id}
            styles={styles}
            displayName={userRole.user.displayName}
            role={userRole.role}
            isLoading={isLoading}
            membershipSince={
              'member since ' +
              new Intl.DateTimeFormat().format(new Date(userRole.createdAt))
            }
            openRemoveRoleModal={() => openRemoveRoleModal(userRole)}
            openUpdateRoleModal={() => openUpdateRoleModal(userRole)}
          />
        ))}
      </PageTemplate>
    </>
  );
};

const MOCK_SKELETON_ROWS = repeat<UserRole>(3, () => ({
  id: Math.random() + '',
  user: { id: Math.random() + '', displayName: '' },
  role: '',
  createdAt: new Date().toISOString(),
}));

type RoleCardProps = {
  displayName: string;
  membershipSince: string;
  role: string;
  isLoading: boolean;
  styles: ClassNameMap<'flex' | 'role' | 'card'>;
  openRemoveRoleModal: () => true;
  openUpdateRoleModal: () => true;
};

const RoleCard: React.FC<RoleCardProps> = ({
  displayName,
  membershipSince,
  role,
  isLoading,
  styles,
  openRemoveRoleModal,
  openUpdateRoleModal,
}) => {
  const [anchorEl, setAnchorEl] = useState<HTMLButtonElement | null>(null);

  const handleClose = () => setAnchorEl(null);
  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) =>
    setAnchorEl(event.currentTarget);

  return (
    <Card className={styles.card}>
      <CardContent>
        <Box justifyContent="space-between" className={styles.flex}>
          <Box flexDirection="column" flex="1" className={styles.flex}>
            <Typography variant="h5" component="h2">
              {isLoading ? (
                <Skeleton variant="text">{spaces(10)}</Skeleton>
              ) : (
                displayName
              )}
            </Typography>
            <Typography color="textSecondary" variant="body2">
              {isLoading ? (
                <Skeleton variant="text">{spaces(45)}</Skeleton>
              ) : (
                membershipSince
              )}
            </Typography>
          </Box>
          <Box className={styles.flex}>
            <Chip
              label={isLoading ? spaces(13) : role}
              color="primary"
              className={styles.role}
            />
          </Box>
          <Box>
            <IconButton
              aria-controls="simple-menu"
              aria-haspopup="true"
              onClick={handleClick}
            >
              <MoreVert />
            </IconButton>
            <Menu
              id="simple-menu"
              anchorEl={anchorEl}
              keepMounted
              open={Boolean(anchorEl)}
              onClose={handleClose}
            >
              <MenuItem onClick={() => openUpdateRoleModal() && handleClose()}>
                Edit role
              </MenuItem>
              <MenuItem onClick={() => openRemoveRoleModal() && handleClose()}>
                Remove
              </MenuItem>
            </Menu>
          </Box>
        </Box>
      </CardContent>
    </Card>
  );
};

export default RolesList;
