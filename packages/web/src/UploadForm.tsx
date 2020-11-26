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
<<<<<<< HEAD
=======
>>>>>>> Create file resolver working at front-end and back-end without error treatment
=======
>>>>>>> Corrigido erro de cors pra qualquer request
=======
>>>>>>> Create file resolver working at front-end and back-end without error treatment
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
<<<<<<< HEAD
<<<<<<< HEAD
  // Trocar email e password para o que estiver no banco de dados local
  const { data: dataLogin, error } = useQuery(LOGIN, {
    variables: { email: "julinho2801@gmail.com", password: "123456" },
=======
  const { data: dataLogin, error, loading } = useQuery(LOGIN, {
    variables: { email: "bolivar@dito.com.br", password: "123456" },
>>>>>>> list files done
  });
  console.log("dataLogin", dataLogin, loading)
  if (dataLogin && !error) localStorage.setItem("token", dataLogin.login.token);

  const [createFile, { data }] = useMutation(UPLOAD_FILE);

  console.log("file data", data);

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files![0];
<<<<<<< HEAD
<<<<<<< HEAD
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
=======
import React from "react";
import { useMutation, gql, useQuery } from "@apollo/client";
>>>>>>> formatting changes and some typings
=======
import React from "react";
import { useMutation, gql, useQuery } from "@apollo/client";
>>>>>>> formatting changes and some typings

export const LOGIN = gql`
  query login($email: String!, $password: String!) {
    login(email: $email, password: $password) {
<<<<<<< HEAD
<<<<<<< HEAD
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
=======
>>>>>>> formatting changes and some typings
=======
>>>>>>> formatting changes and some typings
      token
    }
  }
`;

export const UPLOAD_FILE = gql`
<<<<<<< HEAD
<<<<<<< HEAD
  mutation createFile($file: Upload!, $sourceLanguage: String!, $projectId: ID!){
>>>>>>> Corrigido erro de cors pra qualquer request
=======
=======
>>>>>>> formatting changes and some typings
  mutation createFile(
    $file: Upload!
    $sourceLanguage: String!
    $projectId: ID!
  ) {
<<<<<<< HEAD
>>>>>>> formatting changes and some typings
=======
>>>>>>> formatting changes and some typings
    createFile(
      file: $file
      sourceLanguage: $sourceLanguage
      projectId: $projectId
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> formatting changes and some typings
=======
>>>>>>> formatting changes and some typings
    ) {
      id
      filename
      translationProgress
      approvalProgress
=======
>>>>>>> list files done
      sourceLanguage
      extension
      project {
        displayName
      }
      createdAt
      updatedAt
<<<<<<< HEAD
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
<<<<<<< HEAD
=======
>>>>>>> Add Apollo Erros, fix merge conflicts, removing comments
=======

>>>>>>> Add Apollo Erros, fix merge conflicts, removing comments
export default function UploadForm() {
<<<<<<< HEAD
=======
  // Trocar email e password para o que estiver no banco de dados local
>>>>>>> comple list
  const { data: dataLogin, error } = useQuery(LOGIN, {
    variables: { email: "bolivar@dito.com", password: "123456" },
<<<<<<< HEAD
  });
  console.log("dataLogin", dataLogin)
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
export default function UploadForm() {
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
  // Trocar email e password para o que estiver no banco de dados local
  const { data: dataLogin, error } = useQuery(LOGIN, {
    variables: { email: "julinho2801@gmail.com", password: "123456" },
=======
  const { data: dataLogin, error, loading } = useQuery(LOGIN, {
    variables: { email: "bolivar@dito.com.br", password: "123456" },
>>>>>>> list files done
  });
  console.log("dataLogin", dataLogin, loading)
=======
  });
  console.log("dataLogin", dataLogin)
>>>>>>> bolivar
  if (dataLogin && !error) localStorage.setItem("token", dataLogin.login.token);
>>>>>>> formatting changes and some typings

  const [createFile, { data }] = useMutation(UPLOAD_FILE);

<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
  console.log(data);
=======
  console.log("file data", data);
>>>>>>> list files done

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
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
    const projectId = "5fb52bfe99f0a22dc58d206b";
=======
=======
    console.log("FILE", file)
>>>>>>> list files done
=======
    console.log("FILE", file)
>>>>>>> list files done
    const projectId = "5fbf0c80212ed4a6a57c607b";
>>>>>>> changes
=======
    const projectId = "5fbf0c80212ed4a6a57c607b";
>>>>>>> bolivar
    const sourceLanguage = "PT-BR";
    if (!file) return;
<<<<<<< HEAD
<<<<<<< HEAD
    createFile({ variables: { file, projectId, sourceLanguage } });
>>>>>>> Corrigido erro de cors pra qualquer request
=======
  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files![0];
    const projectId = "5fad9b0a7ed68959e2341a59";
=======
    const projectId = "5fbf0c80212ed4a6a57c607b";
>>>>>>> bolivar
=======

    console.log("FILE", file)

    const projectId = "5fb52bfe99f0a22dc58d206b"; // Trocar id do projeto para o que estiver no banco de dados local

>>>>>>> comple list
=======
  console.log(data);

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files![0];
    const projectId = "5fb52bfe99f0a22dc58d206b";
>>>>>>> Add Apollo Erros, fix merge conflicts, removing comments
    const sourceLanguage = "PT-BR";
    if (!file) return;
    createFile({ variables: { file, projectId, sourceLanguage } });
>>>>>>> Corrigido erro de cors pra qualquer request
=======
    createFile({ variables: { file: {
      filename: file.name
    }, projectId, sourceLanguage } });
>>>>>>> list files done
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

<<<<<<< HEAD
export default function UploadForm() {
=======
>>>>>>> removido transpile only ts-node-dev, engine node 12
=======
>>>>>>> removido transpile only ts-node-dev, engine node 12
  // Trocar email e password para o que estiver no banco de dados local
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
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> removido transpile only ts-node-dev, engine node 12
    const projectId = "5fb52bfe99f0a22dc58d206b"; // Trocar id do projeto para o que estiver no banco de dados local
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
=======
>>>>>>> Create file resolver working at front-end and back-end without error treatment
=======
>>>>>>> Create file resolver working at front-end and back-end without error treatment
import React from 'react';
import { useMutation, gql, useQuery } from '@apollo/client';
=======
=======
>>>>>>> Corrigido erro de cors pra qualquer request
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
export default function UploadForm() {
<<<<<<< HEAD
  const { data: dataLogin, error } = useQuery(LOGIN, {
    variables: { email: "uriell.viana@dito.com.br", password: "123456" },
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
export default function UploadForm() {
  const { data: dataLogin, error } = useQuery(LOGIN, {
    variables: { email: "julinho2801@gmail.com", password: "123456" },
  });

  if (dataLogin && !error) localStorage.setItem("token", dataLogin.login.token);
>>>>>>> formatting changes and some typings

  const [createFile, { data }] = useMutation(UPLOAD_FILE);

  console.log(data);

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
<<<<<<< HEAD
<<<<<<< HEAD
    const file = e.target.files![0]
    if (!file) return
    createFile({ variables: { file } })
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> Create file resolver working at front-end and back-end without error treatment
>>>>>>> Create file resolver working at front-end and back-end without error treatment
=======
>>>>>>> Corrigido erro de cors pra qualquer request
=======
>>>>>>> Create file resolver working at front-end and back-end without error treatment
=======
>>>>>>> Create file resolver working at front-end and back-end without error treatment
=======
>>>>>>> Create file resolver working at front-end and back-end without error treatment
=======
    const file = e.target.files![0];
<<<<<<< HEAD
    const projectId = "5fad9b0a7ed68959e2341a59";
=======
    const projectId = "5fbf0c80212ed4a6a57c607b";
>>>>>>> changes
=======
    const projectId = "5fb52bfe99f0a22dc58d206b";
>>>>>>> Add Apollo Erros, fix merge conflicts, removing comments
    const sourceLanguage = "PT-BR";
    if (!file) return;
    createFile({ variables: { file, projectId, sourceLanguage } });
>>>>>>> Corrigido erro de cors pra qualquer request
=======
    const file = e.target.files![0];
    const projectId = "5fad9b0a7ed68959e2341a59";
    const sourceLanguage = "PT-BR";
    if (!file) return;
    createFile({ variables: { file, projectId, sourceLanguage } });
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> Corrigido erro de cors pra qualquer request
=======
    createFile({ variables: { file: {
      filename: file.name
    }, projectId, sourceLanguage } });
>>>>>>> list files done
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
>>>>>>> Create file resolver working at front-end and back-end without error treatment
    const file = e.target.files![0]
    if (!file) return
    createFile({ variables: { file } })
>>>>>>> Create file resolver working at front-end and back-end without error treatment
<<<<<<< HEAD
=======
    const file = e.target.files![0];
    const projectId = "5fad9b0a7ed68959e2341a59";
=======
    const projectId = "5fb52bfe99f0a22dc58d206b"; // Trocar id do projeto para o que estiver no banco de dados local
>>>>>>> removido transpile only ts-node-dev, engine node 12
=======
    const projectId = "5fb52bfe99f0a22dc58d206b"; // Trocar id do projeto para o que estiver no banco de dados local
>>>>>>> removido transpile only ts-node-dev, engine node 12
    const sourceLanguage = "PT-BR";
    if (!file) return;
    createFile({ variables: { file, projectId, sourceLanguage } });
>>>>>>> Corrigido erro de cors pra qualquer request
=======
>>>>>>> Create file resolver working at front-end and back-end without error treatment
=======
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
=======
      <input type="file" onChange={handleFileChange} />
    </div>
  );
}
>>>>>>> formatting changes and some typings
=======
      <input type='file' onChange={handleFileChange} />
    </div>
  )
};
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
      <input type='file' onChange={handleFileChange} />
    </div>
  )
};
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
