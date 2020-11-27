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
  // Trocar email e password para o que estiver no banco de dados local
  const { data: dataLogin, error } = useQuery(LOGIN, {
    variables: { email: "bolivar@dito.com", password: "123456" },
  });
  console.log("dataLogin", dataLogin)
  if (dataLogin && !error) localStorage.setItem("token", dataLogin.login.token);

  const [createFile, { data }] = useMutation(UPLOAD_FILE);

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
  };

  return (
    <div>
      <h1>Upload File</h1>
      <input type="file" onChange={handleFileChange} />
    </div>
  );
};
