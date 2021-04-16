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
import { ProjectRole } from '../pages/Projects';

const useStyles = makeStyles((theme) => ({
  controls: { marginBottom: theme.spacing(3) },
  flex: { display: 'flex' },
  link: { textDecoration: 'none' },
  role: { textTransform: 'capitalize', marginRight: theme.spacing(1) },
}));

type ProjectsListProps = {
  isLoading: boolean;
  apolloError?: ApolloError;
  onSearchChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  rows: ProjectRole[];
};

const ProjectsList: React.FC<ProjectsListProps> = ({
  isLoading,
  apolloError,
  onSearchChange,
  rows,
}) => {
  const styles = useStyles();

  return (
    <>
      <PageTemplate
        title="Your projects"
        maxWidth="md"
        {...{ isLoading, apolloError }}
      >
        <Box
          display="flex"
          justifyContent="space-between"
          className={styles.controls}
        >
          <Input
            placeholder="Search your projects"
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
            Create project
          </Button>
        </Box>
        {rows.map((projectRole) => (
          <Link
            className={styles.link}
            to={`./${projectRole.project.slug}`}
            key={projectRole.project.id}
          >
            <Card>
              <CardContent>
                <Box justifyContent="space-between" className={styles.flex}>
                  <Box flexDirection="column" className={styles.flex}>
                    <Typography variant="h5" component="h2">
                      {projectRole.project.name}
                    </Typography>
                    <Typography color="textSecondary" variant="body2">
                      member since{' '}
                      {new Intl.DateTimeFormat().format(
                        new Date(projectRole.createdAt)
                      )}
                    </Typography>
                  </Box>
                  <Box className={styles.flex}>
                    <Chip
                      label={projectRole.role}
                      color="primary"
                      className={styles.role}
                    />
                    {projectRole.project.private && <Chip label="Private" />}
                  </Box>
                </Box>
              </CardContent>
            </Card>
          </Link>
        ))}
      </PageTemplate>
    </>
  );
};

export default ProjectsList;
