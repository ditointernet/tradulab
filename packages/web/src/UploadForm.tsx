<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
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

<<<<<<< HEAD
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
=======
>>>>>>> Create file resolver working at front-end and back-end without error treatment
=======
>>>>>>> Create file resolver working at front-end and back-end without error treatment
import React from 'react';
import { useMutation, gql, useQuery } from '@apollo/client';
=======
import React from "react";
import { useMutation, gql, useQuery } from "@apollo/client";
>>>>>>> formatting changes and some typings

export const LOGIN = gql`
  query login($email: String!, $password: String!) {
    login(email: $email, password: $password) {
      token
    }
  }
`;

<<<<<<< HEAD
export const UPLOAD_FILE = gql`
  mutation createFile(
    $file: Upload!
    $sourceLanguage: String!
    $projectId: ID!
  ) {
=======
export const LOGIN = gql`
  query login ($email: String!, $password: String!){
    login (
      email: $email
      password: $password
    ) {
      token
    }
  }
`

export const UPLOAD_FILE = gql`
  mutation createFile($file: Upload!, $sourceLanguage: String!, $projectId: ID!){
>>>>>>> Corrigido erro de cors pra qualquer request
    createFile(
      file: $file
      sourceLanguage: $sourceLanguage
      projectId: $projectId
<<<<<<< HEAD
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
=======
      ){
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
>>>>>>> Corrigido erro de cors pra qualquer request
    }
  }
`;
=======
>>>>>>> Add Apollo Erros, fix merge conflicts, removing comments
export default function UploadForm() {
<<<<<<< HEAD
  const { data: dataLogin, error } = useQuery(LOGIN, {
    variables: { email: "julinho2801@gmail.com", password: "123456" },
  });

  if (dataLogin && !error) localStorage.setItem("token", dataLogin.login.token);
=======

  const { data: dataLogin } = useQuery(LOGIN, {
    variables: { email: 'julinho2801@gmail.com', password: '123456' },
  });

  if (dataLogin) localStorage.setItem('token', dataLogin.login.token);
>>>>>>> Corrigido erro de cors pra qualquer request

  const [createFile, { data }] = useMutation(UPLOAD_FILE);
  console.log(data);

<<<<<<< HEAD
  console.log(data);

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
<<<<<<< HEAD
    const file = e.target.files![0]
    if (!file) return
    createFile({ variables: { file } })
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> Create file resolver working at front-end and back-end without error treatment
=======
>>>>>>> Create file resolver working at front-end and back-end without error treatment
=======
>>>>>>> Create file resolver working at front-end and back-end without error treatment
=======
    const file = e.target.files![0];
    const projectId = "5fb52bfe99f0a22dc58d206b";
    const sourceLanguage = "PT-BR";
    if (!file) return;
    createFile({ variables: { file, projectId, sourceLanguage } });
>>>>>>> Corrigido erro de cors pra qualquer request
=======
  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files![0];
    const projectId = "5fae85634929506946d18fab";
    const sourceLanguage = 'PT-BR';
    if (!file) return;
    createFile({ variables: { file, projectId, sourceLanguage } });
>>>>>>> Corrigido erro de cors pra qualquer request
  };

  return (
    <div>
      <h1>Upload File</h1>
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
      <input type="file" onChange={handleFileChange} />
    </div>
  );
=======
      <input type='file' onChange={handleFileChange} />
    </div>
  )
>>>>>>> Create file resolver working at front-end and back-end without error treatment
=======
      <input type='file' onChange={handleFileChange} />
    </div>
  )
>>>>>>> Create file resolver working at front-end and back-end without error treatment
=======
      <input type='file' onChange={handleFileChange} />
    </div>
  )
>>>>>>> Create file resolver working at front-end and back-end without error treatment
};
=======
      <input type="file" onChange={handleFileChange} />
    </div>
  );
<<<<<<< HEAD
}
>>>>>>> formatting changes and some typings
=======
};
>>>>>>> Add Apollo Erros, fix merge conflicts, removing comments
