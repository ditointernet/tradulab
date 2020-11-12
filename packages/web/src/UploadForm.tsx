<<<<<<< HEAD
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
  // Trocar email e password para o que estiver no banco de dados local
  const { data: dataLogin, error } = useQuery(LOGIN, {
    variables: { email: "julinho2801@gmail.com", password: "123456" },
  });

  if (dataLogin && !error) localStorage.setItem("token", dataLogin.login.token);

  const [createFile, { data }] = useMutation(UPLOAD_FILE);

  console.log(data);

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files![0];
    const projectId = "5fb52bfe99f0a22dc58d206b"; // Trocar id do projeto para o que estiver no banco de dados local
    const sourceLanguage = "PT-BR";
    if (!file) return;
    createFile({ variables: { file, projectId, sourceLanguage } });
=======
import React from 'react';
import { useMutation, gql, useQuery } from '@apollo/client';

// const LOGIN = gql`
//   query login ($email: String!, $password: String!){
//     login (
//       email: $email
//       password: $password
//     ) {
//       token
//     }
//   }
// `

const UPLOAD_FILE = gql`
  mutation createFile($file: Upload!){
    createFile(file: $file){
      filename
    }
  }
`
export default function UploadForm() {
  // const { data, refetch } = useQuery(LOGIN, {
  //   variables: { email: 'julinho2801@gmail.com', password: '123456' }
  // });

  // if (data) console.log(data.login.token)

  const [createFile, { data }] = useMutation(UPLOAD_FILE);

  console.log(data)
  
  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files![0]
    if (!file) return
    createFile({ variables: { file } })
>>>>>>> Create file resolver working at front-end and back-end without error treatment
  };

  return (
    <div>
      <h1>Upload File</h1>
<<<<<<< HEAD
      <input type="file" onChange={handleFileChange} />
    </div>
  );
=======
      <input type='file' onChange={handleFileChange} />
    </div>
  )
>>>>>>> Create file resolver working at front-end and back-end without error treatment
};
