import {
  Box,
  Button,
  Card,
  CardContent,
  Chip,
  createStyles,
  Input,
  InputAdornment,
  makeStyles,
  Typography,
} from '@material-ui/core';
import { ClassNameMap } from '@material-ui/styles';
import Skeleton from '@material-ui/lab/Skeleton';
import { Search } from '@material-ui/icons';
import { Link } from 'react-router-dom';
import { ApolloError } from '@apollo/client';

import PageTemplate from '../components/PageTemplate';
import { ProjectRole } from '../pages/Projects/YourProjects';
import { repeat, spaces } from '../helpers';

const useStyles = makeStyles((theme) =>
  createStyles({
    controls: { marginBottom: theme.spacing(3) },
    flex: { display: 'flex' },
    link: {
      textDecoration: 'none',
      display: 'block',
      '&:not(:last-child)': {
        marginBottom: theme.spacing(2),
      },
    },
    role: { textTransform: 'capitalize', marginRight: theme.spacing(1) },
  })
);

type ProjectsListProps = {
  isLoading: boolean;
  apolloError?: ApolloError;
  onSearchChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  openProjectCreation: () => void;
  rows: ProjectRole[];
};

const ProjectsList: React.FC<ProjectsListProps> = ({
  isLoading,
  apolloError,
  onSearchChange,
  openProjectCreation,
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
            onClick={openProjectCreation}
          >
            Create project
          </Button>
        </Box>
        {(isLoading ? MOCK_SKELETON_ROWS : rows).map((projectRole) => (
          <Link
            className={styles.link}
            to={`./${!isLoading ? projectRole.project.id : ''}`}
            key={projectRole.project.id}
          >
            <ProjectCard
              styles={styles}
              name={projectRole.project.name}
              isPrivate={projectRole.project.private}
              role={projectRole.role}
              isLoading={isLoading}
              membershipSince={
                'member since ' +
                new Intl.DateTimeFormat().format(
                  new Date(projectRole.createdAt)
                )
              }
            />
          </Link>
        ))}
      </PageTemplate>
    </>
  );
};

const MOCK_SKELETON_ROWS = repeat<ProjectRole>(3, () => ({
  role: '',
  createdAt: new Date().toISOString(),
  project: {
    id: Math.random() + '',
    name: '',
    private: true,
  },
}));

type ProjectCardProps = {
  name: string;
  membershipSince: string;
  role: string;
  isPrivate: boolean;
  isLoading: boolean;
  styles: ClassNameMap<'flex' | 'role'>;
};

const ProjectCard: React.FC<ProjectCardProps> = ({
  name,
  membershipSince,
  role,
  isPrivate,
  isLoading,
  styles,
}) => (
  <Card>
    <CardContent>
      <Box justifyContent="space-between" className={styles.flex}>
        <Box flexDirection="column" className={styles.flex}>
          <Typography variant="h5" component="h2">
            {isLoading ? (
              <Skeleton variant="text">{spaces(10)}</Skeleton>
            ) : (
              name
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
          {isPrivate && <Chip label={isLoading ? spaces(13) : 'Private'} />}
        </Box>
      </Box>
    </CardContent>
  </Card>
);

export default ProjectsList;
