import {
  Box,
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  Fade,
  FormControlLabel,
  LinearProgress,
  makeStyles,
  Switch,
  TextField,
} from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  inputs: { display: 'flex' },
  loadingPlaceholder: {
    height: theme.spacing(0.5),
  },
}));

type CreateProjectDialogProps = {
  isOpen: boolean;
  isLoading: boolean;
  onClose: () => void;
  onNameChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onCreateClick: () => void;
  inputError?: string;
  projectNameRef: React.Ref<HTMLInputElement> | null;
  privateSwitchRef: React.Ref<HTMLInputElement> | null;
};

const CreateProjectDialog: React.FC<CreateProjectDialogProps> = ({
  isOpen,
  isLoading,
  onClose,
  onNameChange,
  onCreateClick,
  inputError,
  projectNameRef,
  privateSwitchRef,
}) => {
  const styles = useStyles();

  return (
    <Dialog open={isOpen} onClose={onClose} aria-labelledby="form-dialog-title">
      <DialogTitle>Create a Project</DialogTitle>
      <DialogContent>
        <DialogContentText>
          Give your project a meaningful and descriptive name, this will also be
          used as the URL for your project.
        </DialogContentText>
        <Box className={styles.inputs}>
          <TextField
            inputRef={projectNameRef}
            onChange={onNameChange}
            error={!!inputError}
            helperText={inputError}
            autoFocus
            fullWidth
            color="secondary"
            id="name"
            margin="dense"
            label="Project Name"
            placeholder="Give your project a name"
          />
          <FormControlLabel
            label="Private"
            labelPlacement="bottom"
            control={<Switch inputRef={privateSwitchRef} name="is-private" />}
          />
        </Box>
      </DialogContent>
      <DialogActions>
        <Button onClick={onClose} color="default">
          Cancel
        </Button>
        <Button onClick={onCreateClick} color="secondary">
          Create
        </Button>
      </DialogActions>
      {isLoading ? (
        <Fade
          in={isLoading}
          style={{
            transitionDelay: isLoading ? '800ms' : '0ms',
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

export default CreateProjectDialog;
