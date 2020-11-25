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
      translationProgress
      approvalProgress
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

export default function UploadForm() {
  const { data: dataLogin, error } = useQuery(LOGIN, {
    variables: { email: "julinho2801@gmail.com", password: "123456" },
  });

  if (dataLogin && !error) localStorage.setItem("token", dataLogin.login.token);

  const [createFile, { data }] = useMutation(UPLOAD_FILE);

  console.log(data);

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files![0];
    const projectId = "5fb52bfe99f0a22dc58d206b";
    const sourceLanguage = "PT-BR";
    if (!file) return;
    createFile({ variables: { file, projectId, sourceLanguage } });
  };

  return (
    <div>
      <h1>Upload File</h1>
      <input type="file" onChange={handleFileChange} />
    </div>
  );
};
