import { useRef, useState } from 'react';
import Snackbar from '@material-ui/core/Snackbar';
import gql from 'graphql-tag';
import { useMutation } from '@apollo/client';
import { useNavigate } from 'react-router';

import CreateProjectDialog from '../components/CreateProjectDialog';

const CREATE_PROJECT_MUTATION = gql`
  mutation web_createProject($name: String!, $private: Boolean) {
    createProject(name: $name, private: $private) {
      id
    }
  }
`;

type CreateProjectDialogContainerProps = {
  isOpen: boolean;
  closeModal: () => void;
};

type CreateProjectResult = { createProject: { id: string } };
type CreateProjectVariables = { name: string; private?: boolean };

const CreateProjectDialogContainer: React.FC<CreateProjectDialogContainerProps> = ({
  isOpen,
  closeModal,
}) => {
  const privateSwitchRef = useRef<HTMLInputElement>(null);
  const projectNameRef = useRef<HTMLInputElement>(null);
  const [createProject, { loading: isLoading }] = useMutation<
    CreateProjectResult,
    CreateProjectVariables
  >(CREATE_PROJECT_MUTATION, {
    onError: (err) => setErrorMessage(err.message),
  });
  const [errorMessage, setErrorMessage] = useState<string | undefined>();
  const [inputError, setInputError] = useState<string | undefined>();
  const navigate = useNavigate();

  const onSnackbarClose = () => setErrorMessage(undefined);

  function onCreateClick() {
    const switchEl = privateSwitchRef.current;
    const isPrivate = switchEl?.checked ?? false;
    const inputEl = projectNameRef.current;
    const name = inputEl?.value ?? '';

    return createProject({
      variables: { name, private: isPrivate },
    }).then((response) => navigate(`./${response.data?.createProject.id}`));
  }

  function onNameChange(e: React.ChangeEvent<HTMLInputElement>) {
    const name = e.target.value;

    setInputError(
      name.length < 3
        ? 'Your project name must consist of at least 3 characters.'
        : name.length > 32
        ? 'Your project name must consist of at most 64 characters.'
        : undefined
    );
  }

  function onClose() {
    if (isLoading) return;
    setInputError(undefined);
    return closeModal();
  }

  return (
    <>
      <CreateProjectDialog
        {...{
          isOpen,
          isLoading,
          onClose,
          onNameChange,
          onCreateClick,
          inputError,
          projectNameRef,
          privateSwitchRef,
        }}
      />
      <Snackbar
        anchorOrigin={{ vertical: 'top', horizontal: 'center' }}
        open={!!errorMessage}
        message={errorMessage}
        autoHideDuration={6000}
        onClose={onSnackbarClose}
      />
    </>
  );
};

export default CreateProjectDialogContainer;
