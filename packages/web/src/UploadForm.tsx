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
  const { data: dataLogin, error, loading } = useQuery(LOGIN, {
    variables: { email: "bolivar@dito.com.br", password: "123456" },
  });
  console.log("dataLogin", dataLogin, loading)
  if (dataLogin && !error) localStorage.setItem("token", dataLogin.login.token);

  const [createFile, { data }] = useMutation(UPLOAD_FILE);

  console.log("file data", data);

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files![0];
    console.log("FILE", file)
    const projectId = "5fbf0c80212ed4a6a57c607b";
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
