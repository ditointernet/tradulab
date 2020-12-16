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
import './App.css';
<<<<<<< HEAD
=======
=======
=======
>>>>>>> Create file resolver working at front-end and back-end without error treatment
=======
>>>>>>> formatting changes and some typings
=======
>>>>>>> formatting changes and some typings
=======
>>>>>>> formatting changes and some typings
=======
=======
>>>>>>> Create file resolver working at front-end and back-end without error treatment
>>>>>>> Create file resolver working at front-end and back-end without error treatment
=======
=======
>>>>>>> formatting changes and some typings
=======
>>>>>>> formatting changes and some typings
=======
>>>>>>> Create file resolver working at front-end and back-end without error treatment
=======
>>>>>>> Corrigido erro de cors pra qualquer request
=======
>>>>>>> Create file resolver working at front-end and back-end without error treatment
=======
>>>>>>> formatting changes and some typings
=======
>>>>>>> Fix merge errors, add tradulabErrors in the file resolver
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
>>>>>>> Create file resolver working at front-end and back-end without error treatment
=======
=======
>>>>>>> Corrigido erro de cors pra qualquer request
<<<<<<< HEAD
>>>>>>> Corrigido erro de cors pra qualquer request
=======
=======
>>>>>>> Create file resolver working at front-end and back-end without error treatment
<<<<<<< HEAD
>>>>>>> Create file resolver working at front-end and back-end without error treatment
=======
=======
>>>>>>> formatting changes and some typings
>>>>>>> formatting changes and some typings
=======
>>>>>>> formatting changes and some typings
=======
>>>>>>> Fix merge errors, add tradulabErrors in the file resolver
import React from "react";
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
=======

import { gql, useQuery } from "@apollo/client";
import Pages from "./pages";
import Login from "./pages/Login";
import Erros from "./erros";
>>>>>>> Error Middleware
import "./App.css";
>>>>>>> routes

>>>>>>> routes
import {
  ApolloProvider,
  ApolloClient,
  InMemoryCache,
  ApolloLink,
} from '@apollo/client';
import { createUploadLink } from 'apollo-upload-client';

import { TradulabLayout, ProfileCardContainer } from './containers';
import MyProjectsContainer from './MyProjectsContainer';

const uploadLink = createUploadLink({
<<<<<<< HEAD
<<<<<<< HEAD
  uri: 'http://localhost:3001/graphql',
  credentials: 'include',
=======
  uri: "http://localhost:3001",
  credentials: "include",
>>>>>>> changes
=======
  uri: "http://localhost:3001/graphql",
>>>>>>> list files done
});

const authLink = new ApolloLink((operation, forward) => {
  // Retrieve the authorization token from local storage.
  const token = localStorage.getItem('token');

  if (!['login', 'createUser'].includes(operation.operationName)) {
    // Use the setContext method to set the HTTP headers.
    operation.setContext({
      headers: {
        authorization: token ? `Bearer ${token}` : '',
      },
    });
  }

<<<<<<< HEAD
  // Call the next link in the middleware chain.
  return forward(operation);
});

const client = new ApolloClient({
  link: authLink.concat(uploadLink),
  cache: new InMemoryCache(),
});

<<<<<<< HEAD
function App() {
  return (
    <ApolloProvider client={client}>
      <TradulabLayout>
        <div style={{ display: 'flex', justifyContent: 'space-around' }}>
          <ProfileCardContainer />
          <MyProjectsContainer />
        </div>
      </TradulabLayout>
    </ApolloProvider>
=======
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./App.css";
=======
import React from 'react';
import './App.css';
>>>>>>> Create file resolver working at front-end and back-end without error treatment

import { ApolloProvider, ApolloClient, InMemoryCache, ApolloLink, createHttpLink } from '@apollo/client';
import { createUploadLink } from 'apollo-upload-client';

import UploadForm from './UploadForm';
=======
export default function App() {
  const { data, error, loading } = useQuery(IS_LOGGED_IN);
  console.log("APP DATA", data);
  if (loading) return <p>Loading...</p>;

  if (error) {
    console.error(error);
    return <Erros message={error.message} />;
  }
>>>>>>> Error Middleware

const httpLink = createHttpLink({
  uri: 'http://localhost:3001/graphql',
  credentials: 'include'
});

const uploadLink = createUploadLink({
  uri: 'http://localhost:3001/graphql',
  credentials: 'include',
});

<<<<<<< HEAD
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
=======
import React from "react";
import "./App.css";
>>>>>>> formatting changes and some typings

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
import React from "react";
import "./App.css";
>>>>>>> formatting changes and some typings

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
import React from "react";
import "./App.css";
>>>>>>> formatting changes and some typings

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
import React from "react";
import "./App.css";
>>>>>>> formatting changes and some typings

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
=======
import { gql, useQuery } from "@apollo/client";
import Pages from "./pages";
import Login from "./pages/Login";
import Erros from "./erros";
import "./App.css";

const IS_LOGGED_IN = gql`
  query isLoggedIn {
    me {
      id
    }
  }
`;
>>>>>>> routes scope

=======
>>>>>>> fix app
function App() {
  const { data, error, loading } = useQuery(IS_LOGGED_IN);

  if (loading) return <p>Loading...</p>;

  if (error) return <Erros message={error.message} />;

  const TOKEN = localStorage.getItem("token");

  if (!TOKEN) return <Login />;

<<<<<<< HEAD
function App() {
  return (
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
    <Router>
      <Switch></Switch>
    </Router>
>>>>>>> routes
=======
    <ApolloProvider client={client}>
      <UploadForm />
    </ApolloProvider>
>>>>>>> Create file resolver working at front-end and back-end without error treatment
=======
    <ApolloProvider client={client}>
      <UploadForm />
    </ApolloProvider>
>>>>>>> Create file resolver working at front-end and back-end without error treatment
=======
    <ApolloProvider client={client}>
      <UploadForm />
    </ApolloProvider>
>>>>>>> Create file resolver working at front-end and back-end without error treatment
=======
    <ApolloProvider client={client}>
      <UploadForm />
    </ApolloProvider>
>>>>>>> Create file resolver working at front-end and back-end without error treatment
=======
    <ApolloProvider client={client}>
      <UploadForm />
    </ApolloProvider>
>>>>>>> Create file resolver working at front-end and back-end without error treatment
  );
=======
  return <Pages />;
>>>>>>> routes scope
=======
  return <Pages />;
>>>>>>> Error Middleware
}
