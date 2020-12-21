import React from "react";
import { useMutation, gql, useQuery } from "@apollo/client";

export const LOGIN = gql`
  query login($email: String!, $password: String!) {
    login(email: $email, password: $password) {
      token
    }
  }
`;

export const UPLOAD_FILE = gql`
  mutation createFile(
    $file: Upload!
    $sourceLanguage: String!
    $projectId: ID!
  ) {
    createFile(
      file: $file
      sourceLanguage: $sourceLanguage
      projectId: $projectId
    ) {
      id
      filename
<<<<<<< HEAD
      translationProgress
      approvalProgress
=======
>>>>>>> feature/resolver-list-file
      sourceLanguage
      extension
      project {
        displayName
      }
      createdAt
      updatedAt
    }
  }
`;
<<<<<<< HEAD

export default function UploadForm() {
  // Trocar email e password para o que estiver no banco de dados local
  const { data: dataLogin, error } = useQuery(LOGIN, {
    variables: { email: "julinho2801@gmail.com", password: "123456" },
  });

=======

export default function UploadForm() {
  // Trocar email e password para o que estiver no banco de dados local
  const { data: dataLogin, error } = useQuery(LOGIN, {
    variables: { email: "bolivar@dito.com", password: "123456" },
  });
  console.log("dataLogin", dataLogin)
>>>>>>> feature/resolver-list-file
  if (dataLogin && !error) localStorage.setItem("token", dataLogin.login.token);

  const [createFile, { data }] = useMutation(UPLOAD_FILE);

<<<<<<< HEAD
  console.log(data);

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files![0];
    const projectId = "5fb52bfe99f0a22dc58d206b"; // Trocar id do projeto para o que estiver no banco de dados local
    const sourceLanguage = "PT-BR";
    if (!file) return;
    createFile({ variables: { file, projectId, sourceLanguage } });
=======
  console.log("file data", data);

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files![0];

    console.log("FILE", file)

    const projectId = "5fb52bfe99f0a22dc58d206b"; // Trocar id do projeto para o que estiver no banco de dados local

    const sourceLanguage = "PT-BR";
    if (!file) return;
    createFile({ variables: { file: {
      filename: file.name
    }, projectId, sourceLanguage } });
>>>>>>> feature/resolver-list-file
  };

  return (
    <div>
      <h1>Upload File</h1>
      <input type="file" onChange={handleFileChange} />
    </div>
  );
<<<<<<< HEAD
}
=======
};
>>>>>>> feature/resolver-list-file
