<<<<<<< HEAD
import React from "react";
import "./App.css";

import {
  ApolloProvider,
  ApolloClient,
  InMemoryCache,
  ApolloLink,
} from "@apollo/client";
import { createUploadLink } from "apollo-upload-client";

import UploadForm from "./UploadForm";

const uploadLink = createUploadLink({
  uri: "http://localhost:3001/graphql",
  credentials: "include",
});

const authLink = new ApolloLink((operation, forward) => {
  // Retrieve the authorization token from local storage.
  const token = localStorage.getItem("token");

  if (!["login", "createUser"].includes(operation.operationName)) {
    // Use the setContext method to set the HTTP headers.
    operation.setContext({
      headers: {
        authorization: token ? `Bearer ${token}` : "",
      },
    });
  }

  // Call the next link in the middleware chain.
  return forward(operation);
});

const client = new ApolloClient({
  link: authLink.concat(uploadLink),
  cache: new InMemoryCache(),
});
=======
import React from 'react';
import './App.css';
>>>>>>> Create file resolver working at front-end and back-end without error treatment

<<<<<<< HEAD
import { ApolloProvider, ApolloClient, InMemoryCache, ApolloLink, createHttpLink } from '@apollo/client';
import { createUploadLink } from 'apollo-upload-client';

import UploadForm from './UploadForm';

const httpLink = createHttpLink({
  uri: 'http://localhost:3001/graphql',
  credentials: 'include'
});

const uploadLink = createUploadLink({
  uri: 'http://localhost:3001/graphql',
  credentials: 'include',
});

// const authLink = setContext((_, { headers }) => {
//   // get the authentication token from local storage if it exists
//   const token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjVmYWFmOWQ2YTBiODk2NTcwMjIyNTU1OCIsImlhdCI6MTYwNTE4NzA5NiwiZXhwIjoxNjA1MTg4ODk2fQ.I3M_qSK97WWPdlayaM4_5InAmoJwcLFIH686iKXWnXs';
//   // return the headers to the context so httpLink can read them
//   return {
//     headers: {
//       ...headers,
//       authorization: token ? `Bearer ${token}` : "",
//     }
//   }
// });

const authLink = new ApolloLink((operation, forward) => {
  // Retrieve the authorization token from local storage.
  const token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjVmYWFmOWQ2YTBiODk2NTcwMjIyNTU1OCIsImlhdCI6MTYwNTIxODQwOSwiZXhwIjoxNjA1MjIwMjA5fQ.ap1cFPws7qrZnGvA_pjHfZPzhjJIodZ0X5tqPmn_oZU';

  // Use the setContext method to set the HTTP headers.
  operation.setContext({
    headers: {
      authorization: token ? `Bearer ${token}` : '',
    }
  });

  // Call the next link in the middleware chain.
  return forward(operation);
});

const client = new ApolloClient({
  link: authLink.concat(uploadLink),
  cache: new InMemoryCache(),
});

import { ApolloProvider, ApolloClient, InMemoryCache, ApolloLink, createHttpLink } from '@apollo/client';
import { createUploadLink } from 'apollo-upload-client';

import UploadForm from './UploadForm';

const httpLink = createHttpLink({
  uri: 'http://localhost:3001/graphql',
  credentials: 'include'
});

const uploadLink = createUploadLink({
  uri: 'http://localhost:3001/graphql',
  credentials: 'include',
});

// const authLink = setContext((_, { headers }) => {
//   // get the authentication token from local storage if it exists
//   const token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjVmYWFmOWQ2YTBiODk2NTcwMjIyNTU1OCIsImlhdCI6MTYwNTE4NzA5NiwiZXhwIjoxNjA1MTg4ODk2fQ.I3M_qSK97WWPdlayaM4_5InAmoJwcLFIH686iKXWnXs';
//   // return the headers to the context so httpLink can read them
//   return {
//     headers: {
//       ...headers,
//       authorization: token ? `Bearer ${token}` : "",
//     }
//   }
// });

const authLink = new ApolloLink((operation, forward) => {
  // Retrieve the authorization token from local storage.
  const token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjVmYWFmOWQ2YTBiODk2NTcwMjIyNTU1OCIsImlhdCI6MTYwNTIxODQwOSwiZXhwIjoxNjA1MjIwMjA5fQ.ap1cFPws7qrZnGvA_pjHfZPzhjJIodZ0X5tqPmn_oZU';

  // Use the setContext method to set the HTTP headers.
  operation.setContext({
    headers: {
      authorization: token ? `Bearer ${token}` : '',
    }
  });

  // Call the next link in the middleware chain.
  return forward(operation);
});

const client = new ApolloClient({
  link: authLink.concat(uploadLink),
  cache: new InMemoryCache(),
});

<<<<<<< HEAD
=======
>>>>>>> fix app
=======
import { ApolloProvider, ApolloClient, InMemoryCache, ApolloLink, createHttpLink } from '@apollo/client';
import { createUploadLink } from 'apollo-upload-client';

import UploadForm from './UploadForm';

const httpLink = createHttpLink({
  uri: 'http://localhost:3001/graphql',
  credentials: 'include'
});

const uploadLink = createUploadLink({
  uri: 'http://localhost:3001/graphql',
  credentials: 'include',
});

// const authLink = setContext((_, { headers }) => {
//   // get the authentication token from local storage if it exists
//   const token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjVmYWFmOWQ2YTBiODk2NTcwMjIyNTU1OCIsImlhdCI6MTYwNTE4NzA5NiwiZXhwIjoxNjA1MTg4ODk2fQ.I3M_qSK97WWPdlayaM4_5InAmoJwcLFIH686iKXWnXs';
//   // return the headers to the context so httpLink can read them
//   return {
//     headers: {
//       ...headers,
//       authorization: token ? `Bearer ${token}` : "",
//     }
//   }
// });

const authLink = new ApolloLink((operation, forward) => {
  // Retrieve the authorization token from local storage.
  const token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjVmYWFmOWQ2YTBiODk2NTcwMjIyNTU1OCIsImlhdCI6MTYwNTIxODQwOSwiZXhwIjoxNjA1MjIwMjA5fQ.ap1cFPws7qrZnGvA_pjHfZPzhjJIodZ0X5tqPmn_oZU';

  // Use the setContext method to set the HTTP headers.
  operation.setContext({
    headers: {
      authorization: token ? `Bearer ${token}` : '',
    }
  });

  // Call the next link in the middleware chain.
  return forward(operation);
});

const client = new ApolloClient({
  link: authLink.concat(uploadLink),
  cache: new InMemoryCache(),
});

>>>>>>> Create file resolver working at front-end and back-end without error treatment
function App() {
  return (
    <ApolloProvider client={client}>
      <UploadForm />
    </ApolloProvider>
  );
}

export default App;
