import {
  Box,
  Button,
  Card,
  CardContent,
  Chip,
  Input,
  InputAdornment,
  makeStyles,
  Typography,
} from '@material-ui/core';
import Skeleton from '@material-ui/lab/Skeleton';
import { Search } from '@material-ui/icons';
import { Link } from 'react-router-dom';
import { ApolloError } from '@apollo/client';

import PageTemplate from '../components/PageTemplate';
import { UserRole } from '../pages/Projects/Roles';
import { ClassNameMap } from '@material-ui/styles';
import { spaces, repeat } from '../helpers';

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
  rows: UserRole[];
};

const RolesList: React.FC<RolesListProps> = ({
  isLoading,
  apolloError,
  onSearchChange,
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
            component={Link}
            to="./create"
          >
            Invite user
          </Button>
        </Box>
        {(isLoading ? MOCK_SKELETON_ROWS : rows).map((userRole) => (
          <RoleCard
            key={userRole.user.id}
            styles={styles}
            displayName={userRole.user.displayName}
            role={userRole.role}
            isLoading={isLoading}
            membershipSince={
              'member since ' +
              new Intl.DateTimeFormat().format(new Date(userRole.createdAt))
            }
          />
        ))}
      </PageTemplate>
    </>
  );
};

const MOCK_SKELETON_ROWS = repeat<UserRole>(3, () => ({
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
};

const RoleCard: React.FC<RoleCardProps> = ({
  displayName,
  membershipSince,
  role,
  isLoading,
  styles,
}) => (
  <Card className={styles.card}>
    <CardContent>
      <Box justifyContent="space-between" className={styles.flex}>
        <Box flexDirection="column" className={styles.flex}>
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
      </Box>
    </CardContent>
  </Card>
);

export default RolesList;
