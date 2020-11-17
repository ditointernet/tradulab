<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
import React from 'react';
import { useMutation, gql, useQuery } from '@apollo/client';
=======
=======
>>>>>>> Create file resolver working at front-end and back-end without error treatment
=======
<<<<<<< HEAD
>>>>>>> formatting changes and some typings
=======
>>>>>>> Create file resolver working at front-end and back-end without error treatment
=======
>>>>>>> formatting changes and some typings
=======
>>>>>>> formatting changes and some typings
=======
>>>>>>> Create file resolver working at front-end and back-end without error treatment
=======
>>>>>>> formatting changes and some typings
<<<<<<< HEAD
=======
=======
>>>>>>> Create file resolver working at front-end and back-end without error treatment
<<<<<<< HEAD
=======
>>>>>>> Create file resolver working at front-end and back-end without error treatment
>>>>>>> Create file resolver working at front-end and back-end without error treatment
=======
=======
<<<<<<< HEAD
>>>>>>> formatting changes and some typings
=======
<<<<<<< HEAD
>>>>>>> Create file resolver working at front-end and back-end without error treatment
=======
<<<<<<< HEAD
>>>>>>> formatting changes and some typings
=======
>>>>>>> Create file resolver working at front-end and back-end without error treatment
=======
>>>>>>> Corrigido erro de cors pra qualquer request
=======
>>>>>>> Create file resolver working at front-end and back-end without error treatment
<<<<<<< HEAD
=======
>>>>>>> Create file resolver working at front-end and back-end without error treatment
=======
>>>>>>> Corrigido erro de cors pra qualquer request
<<<<<<< HEAD
>>>>>>> Corrigido erro de cors pra qualquer request
=======
=======
>>>>>>> Create file resolver working at front-end and back-end without error treatment
<<<<<<< HEAD
=======
=======
>>>>>>> Create file resolver working at front-end and back-end without error treatment
<<<<<<< HEAD
=======
=======
>>>>>>> Create file resolver working at front-end and back-end without error treatment
>>>>>>> Create file resolver working at front-end and back-end without error treatment
=======
>>>>>>> formatting changes and some typings
import React from "react";
import { useMutation, gql, useQuery } from "@apollo/client";
>>>>>>> Create file resolver working at front-end and back-end without error treatment

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
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
export default function UploadForm() {
  // Trocar email e password para o que estiver no banco de dados local
<<<<<<< HEAD
<<<<<<< HEAD
  const { data: dataLogin, error } = useQuery(LOGIN, {
<<<<<<< HEAD
    variables: { email: 'julinho2801@gmail.com', password: '123456' },
  });

  if (dataLogin && !error) localStorage.setItem('token', dataLogin.login.token);
=======
    variables: { email: "bolivar@dito.com", password: "123456" },
  });
  console.log("dataLogin", dataLogin)
  if (dataLogin && !error) localStorage.setItem("token", dataLogin.login.token);
>>>>>>> bolivar

  const [createFile, { data }] = useMutation(UPLOAD_FILE);

  console.log(data);

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files![0];
<<<<<<< HEAD
    const projectId = '5fb52bfe99f0a22dc58d206b'; // Trocar id do projeto para o que estiver no banco de dados local
    const sourceLanguage = 'PT-BR';
=======
<<<<<<< HEAD
    const projectId = "5fb52bfe99f0a22dc58d206b"; // Trocar id do projeto para o que estiver no banco de dados local
    const sourceLanguage = "PT-BR";
>>>>>>> bolivar
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
<<<<<<< HEAD
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
=======
  query login ($email: String!, $password: String!){
    login (
      email: $email
      password: $password
    ) {
=======
=======
>>>>>>> Corrigido erro de cors pra qualquer request
=======
>>>>>>> formatting changes and some typings
import React from "react";
import { useMutation, gql, useQuery } from "@apollo/client";

export const LOGIN = gql`
  query login($email: String!, $password: String!) {
    login(email: $email, password: $password) {
>>>>>>> formatting changes and some typings
      token
    }
  }
`;

export const UPLOAD_FILE = gql`
<<<<<<< HEAD
  mutation createFile($file: Upload!, $sourceLanguage: String!, $projectId: ID!){
>>>>>>> Corrigido erro de cors pra qualquer request
=======
  mutation createFile(
    $file: Upload!
    $sourceLanguage: String!
    $projectId: ID!
  ) {
>>>>>>> formatting changes and some typings
    createFile(
      file: $file
      sourceLanguage: $sourceLanguage
      projectId: $projectId
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> formatting changes and some typings
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
<<<<<<< HEAD
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
=======
>>>>>>> removido transpile only ts-node-dev, engine node 12
=======
>>>>>>> removido transpile only ts-node-dev, engine node 12
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
=======
    }
  }
`;
=======
>>>>>>> Add Apollo Erros, fix merge conflicts, removing comments
=======
>>>>>>> Add Apollo Erros, fix merge conflicts, removing comments
export default function UploadForm() {
  // Trocar email e password para o que estiver no banco de dados local
  const { data: dataLogin, error } = useQuery(LOGIN, {
    variables: { email: "julinho2801@gmail.com", password: "123456" },
  });

  if (dataLogin && !error) localStorage.setItem("token", dataLogin.login.token);
>>>>>>> formatting changes and some typings

  const [createFile, { data }] = useMutation(UPLOAD_FILE);

<<<<<<< HEAD
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
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
    const projectId = "5fb52bfe99f0a22dc58d206b";
=======
    const projectId = "5fbf0c80212ed4a6a57c607b";
>>>>>>> bolivar
=======
    const projectId = "5fb52bfe99f0a22dc58d206b"; // Trocar id do projeto para o que estiver no banco de dados local
>>>>>>> removido transpile only ts-node-dev, engine node 12
    const sourceLanguage = "PT-BR";
    if (!file) return;
    createFile({ variables: { file, projectId, sourceLanguage } });
<<<<<<< HEAD
>>>>>>> Corrigido erro de cors pra qualquer request
=======
  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files![0];
    const projectId = "5fad9b0a7ed68959e2341a59";
=======
    const projectId = "5fb52bfe99f0a22dc58d206b"; // Trocar id do projeto para o que estiver no banco de dados local
>>>>>>> removido transpile only ts-node-dev, engine node 12
=======
    const projectId = "5fb52bfe99f0a22dc58d206b"; // Trocar id do projeto para o que estiver no banco de dados local
>>>>>>> removido transpile only ts-node-dev, engine node 12
=======
  console.log(data);

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files![0];
    const projectId = "5fb52bfe99f0a22dc58d206b";
>>>>>>> Add Apollo Erros, fix merge conflicts, removing comments
    const sourceLanguage = "PT-BR";
    if (!file) return;
    createFile({ variables: { file, projectId, sourceLanguage } });
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> Corrigido erro de cors pra qualquer request
=======
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
=======
>>>>>>> Add Apollo Erros, fix merge conflicts, removing comments
export default function UploadForm() {
  const { data: dataLogin, error } = useQuery(LOGIN, {
    variables: { email: "julinho2801@gmail.com", password: "123456" },
  });

  if (dataLogin && !error) localStorage.setItem("token", dataLogin.login.token);

  const [createFile, { data }] = useMutation(UPLOAD_FILE);

  console.log(data);

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
<<<<<<< HEAD
    const file = e.target.files![0]
    if (!file) return
    createFile({ variables: { file } })
>>>>>>> Create file resolver working at front-end and back-end without error treatment
=======
    const file = e.target.files![0];
    const projectId = "5fb52bfe99f0a22dc58d206b";
    const sourceLanguage = "PT-BR";
    if (!file) return;
    createFile({ variables: { file, projectId, sourceLanguage } });
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> Corrigido erro de cors pra qualquer request
=======
=======
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
=======
>>>>>>> Add Apollo Erros, fix merge conflicts, removing comments
export default function UploadForm() {
  const { data: dataLogin, error } = useQuery(LOGIN, {
    variables: { email: "julinho2801@gmail.com", password: "123456" },
  });

  if (dataLogin && !error) localStorage.setItem("token", dataLogin.login.token);

  const [createFile, { data }] = useMutation(UPLOAD_FILE);

  console.log(data);

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
<<<<<<< HEAD
    const file = e.target.files![0]
    if (!file) return
    createFile({ variables: { file } })
<<<<<<< HEAD
>>>>>>> Create file resolver working at front-end and back-end without error treatment
>>>>>>> Create file resolver working at front-end and back-end without error treatment
=======
>>>>>>> Corrigido erro de cors pra qualquer request
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
<<<<<<< HEAD
=======
>>>>>>> Create file resolver working at front-end and back-end without error treatment
=======
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
    variables: { email: "uriell.viana@dito.com.br", password: "123456" },
  });

  if (dataLogin && !error) localStorage.setItem("token", dataLogin.login.token);

  const [createFile, { data }] = useMutation(UPLOAD_FILE);

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
<<<<<<< HEAD
=======
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
    variables: { email: "uriell.viana@dito.com.br", password: "123456" },
  });

  if (dataLogin && !error) localStorage.setItem("token", dataLogin.login.token);

  const [createFile, { data }] = useMutation(UPLOAD_FILE);

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
<<<<<<< HEAD
>>>>>>> Create file resolver working at front-end and back-end without error treatment
=======
<<<<<<< HEAD
>>>>>>> Corrigido erro de cors pra qualquer request
    const file = e.target.files![0]
    if (!file) return
    createFile({ variables: { file } })
>>>>>>> Create file resolver working at front-end and back-end without error treatment
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> Create file resolver working at front-end and back-end without error treatment
=======
>>>>>>> Corrigido erro de cors pra qualquer request
=======
>>>>>>> Create file resolver working at front-end and back-end without error treatment
=======
=======
    const file = e.target.files![0];
    const projectId = "5fad9b0a7ed68959e2341a59";
    const sourceLanguage = "PT-BR";
    if (!file) return;
    createFile({ variables: { file, projectId, sourceLanguage } });
>>>>>>> Corrigido erro de cors pra qualquer request
>>>>>>> Corrigido erro de cors pra qualquer request
=======
>>>>>>> Create file resolver working at front-end and back-end without error treatment
=======
=======
    const file = e.target.files![0];
    const projectId = "5fad9b0a7ed68959e2341a59";
    const sourceLanguage = "PT-BR";
    if (!file) return;
    createFile({ variables: { file, projectId, sourceLanguage } });
>>>>>>> Corrigido erro de cors pra qualquer request
>>>>>>> Corrigido erro de cors pra qualquer request
  };

  return (
    <div>
      <h1>Upload File</h1>
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> formatting changes and some typings
=======
>>>>>>> Create file resolver working at front-end and back-end without error treatment
=======
>>>>>>> formatting changes and some typings
      <input type="file" onChange={handleFileChange} />
    </div>
  );
}
=======
=======
>>>>>>> Create file resolver working at front-end and back-end without error treatment
=======
>>>>>>> Create file resolver working at front-end and back-end without error treatment
=======
>>>>>>> Create file resolver working at front-end and back-end without error treatment
      <input type='file' onChange={handleFileChange} />
    </div>
  )
};
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> Create file resolver working at front-end and back-end without error treatment
=======
>>>>>>> Create file resolver working at front-end and back-end without error treatment
=======
>>>>>>> Create file resolver working at front-end and back-end without error treatment
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
=======
      <input type="file" onChange={handleFileChange} />
    </div>
  );
}
>>>>>>> formatting changes and some typings
=======
>>>>>>> Create file resolver working at front-end and back-end without error treatment
=======
      <input type="file" onChange={handleFileChange} />
    </div>
  );
<<<<<<< HEAD
}
>>>>>>> formatting changes and some typings
=======
=======
      <input type="file" onChange={handleFileChange} />
    </div>
  );
=======
      <input type='file' onChange={handleFileChange} />
    </div>
  )
>>>>>>> Create file resolver working at front-end and back-end without error treatment
>>>>>>> Create file resolver working at front-end and back-end without error treatment
=======
      <input type="file" onChange={handleFileChange} />
    </div>
  );
>>>>>>> Corrigido erro de cors pra qualquer request
};
>>>>>>> Add Apollo Erros, fix merge conflicts, removing comments
=======
      <input type='file' onChange={handleFileChange} />
    </div>
  )
};
>>>>>>> Create file resolver working at front-end and back-end without error treatment
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> formatting changes and some typings
=======
      <input type="file" onChange={handleFileChange} />
    </div>
  );
<<<<<<< HEAD
<<<<<<< HEAD
}
>>>>>>> formatting changes and some typings
=======
=======
      <input type="file" onChange={handleFileChange} />
    </div>
  );
=======
      <input type='file' onChange={handleFileChange} />
    </div>
  )
>>>>>>> Create file resolver working at front-end and back-end without error treatment
>>>>>>> Create file resolver working at front-end and back-end without error treatment
=======
      <input type="file" onChange={handleFileChange} />
    </div>
  );
>>>>>>> Corrigido erro de cors pra qualquer request
=======
      <input type="file" onChange={handleFileChange} />
    </div>
  );
=======
      <input type='file' onChange={handleFileChange} />
    </div>
  )
>>>>>>> Create file resolver working at front-end and back-end without error treatment
>>>>>>> Create file resolver working at front-end and back-end without error treatment
};
<<<<<<< HEAD
>>>>>>> Add Apollo Erros, fix merge conflicts, removing comments
=======
=======
      <input type="file" onChange={handleFileChange} />
    </div>
  );
<<<<<<< HEAD
}
>>>>>>> formatting changes and some typings
<<<<<<< HEAD
>>>>>>> formatting changes and some typings
=======
=======
};
>>>>>>> Add Apollo Erros, fix merge conflicts, removing comments
>>>>>>> Add Apollo Erros, fix merge conflicts, removing comments
=======
>>>>>>> Create file resolver working at front-end and back-end without error treatment
=======
}
>>>>>>> formatting changes and some typings
>>>>>>> formatting changes and some typings
