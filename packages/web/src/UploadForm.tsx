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
  };

  return (
    <div>
      <h1>Upload File</h1>
      <input type='file' onChange={handleFileChange} />
    </div>
  )
};
