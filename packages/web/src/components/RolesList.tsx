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
import { Search } from '@material-ui/icons';
import { Link } from 'react-router-dom';
import { ApolloError } from '@apollo/client';

import PageTemplate from '../components/PageTemplate';
import { UserRole } from '../pages/Projects/Roles';

const useStyles = makeStyles((theme) => ({
  controls: { marginBottom: theme.spacing(3) },
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
        {rows.map((userRole) => (
          <Card key={userRole.user.id}>
            <CardContent>
              <Box justifyContent="space-between" className={styles.flex}>
                <Box flexDirection="column" className={styles.flex}>
                  <Typography variant="h5" component="h2">
                    {userRole.user.displayName}
                  </Typography>
                  <Typography color="textSecondary" variant="body2">
                    member since{' '}
                    {new Intl.DateTimeFormat().format(
                      new Date(userRole.createdAt)
                    )}
                  </Typography>
                </Box>
                <Box className={styles.flex}>
                  <Chip
                    label={userRole.role}
                    color="primary"
                    className={styles.role}
                  />
                </Box>
              </Box>
            </CardContent>
          </Card>
        ))}
      </PageTemplate>
    </>
  );
};

export default RolesList;
