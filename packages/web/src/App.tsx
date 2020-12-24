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
>>>>>>> Corrigido erro de cors pra qualquer request
=======
>>>>>>> Fix merge errors, add tradulabErrors in the file resolver
=======
>>>>>>> Create file resolver working at front-end and back-end without error treatment
=======
>>>>>>> Create file resolver working at front-end and back-end without error treatment
=======
>>>>>>> Create file resolver working at front-end and back-end without error treatment
=======
>>>>>>> formatting changes and some typings
=======
>>>>>>> formatting changes and some typings
=======
>>>>>>> formatting changes and some typings
=======
>>>>>>> Corrigido erro de cors pra qualquer request
=======
>>>>>>> formatting changes and some typings
=======
=======
>>>>>>> formatting changes and some typings
=======
>>>>>>> formatting changes and some typings
=======
>>>>>>> Create file resolver working at front-end and back-end without error treatment
>>>>>>> Create file resolver working at front-end and back-end without error treatment
=======
>>>>>>> Corrigido erro de cors pra qualquer request
=======
>>>>>>> Create file resolver working at front-end and back-end without error treatment
=======
>>>>>>> Corrigido erro de cors pra qualquer request
=======
>>>>>>> Create file resolver working at front-end and back-end without error treatment
=======
>>>>>>> formatting changes and some typings
=======
>>>>>>> formatting changes and some typings
<<<<<<< HEAD
import React from "react";
<<<<<<< HEAD
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
  uri: 'http://localhost:3001/graphql',
  credentials: 'include',
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
=======
import React from "react";
import "./App.css";
>>>>>>> formatting changes and some typings

<<<<<<< HEAD
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
>>>>>>> Fix merge errors, add tradulabErrors in the file resolver
=======
>>>>>>> Fix merge errors, add tradulabErrors in the file resolver
import React from "react";
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
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

<<<<<<< HEAD
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
=======
=======

>>>>>>> Error Middleware
import { gql, useQuery } from "@apollo/client";
import Pages from "./pages";
import Login from "./pages/Login";
<<<<<<< HEAD
>>>>>>> routes scope
import "./App.css";
=======
import React from 'react';
import './App.css';
>>>>>>> Create file resolver working at front-end and back-end without error treatment
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

<<<<<<< HEAD
  // Call the next link in the middleware chain.
  return forward(operation);
});

const client = new ApolloClient({
  link: authLink.concat(uploadLink),
  cache: new InMemoryCache(),
});

<<<<<<< HEAD
<<<<<<< HEAD
import { ApolloProvider, ApolloClient, InMemoryCache, ApolloLink, createHttpLink } from '@apollo/client';
import { createUploadLink } from 'apollo-upload-client';
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

import UploadForm from './UploadForm';

const httpLink = createHttpLink({
  uri: 'http://localhost:3001/graphql',
  credentials: 'include'
});

<<<<<<< HEAD
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
=======
// client.mutate({
//   mutation: UPLOAD_FILE,
//   context: {
//     headers: {
//       authorization: token ? `Bearer ${token}` : '',
>>>>>>> Corrigido erro de cors pra qualquer request
//     }
//   }
// });

<<<<<<< HEAD
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
=======
import Erros from "./erros";
>>>>>>> deal with erros
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
// client.query({
//   query: LOGIN,
//   context: {
//     headers: {
//       authorization: token ? `Bearer ${token}` : '',
//     }
//   }
// });
>>>>>>> Corrigido erro de cors pra qualquer request

<<<<<<< HEAD
=======
>>>>>>> formatting changes and some typings
function App() {
  return (
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
import { ApolloProvider, ApolloClient, InMemoryCache, ApolloLink, createHttpLink } from '@apollo/client';
import { createUploadLink } from 'apollo-upload-client';
=======
import React from "react";
import "./App.css";

import {
  ApolloProvider,
  ApolloClient,
  InMemoryCache,
  ApolloLink,
} from "@apollo/client";
import { createUploadLink } from "apollo-upload-client";
>>>>>>> formatting changes and some typings

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
const IS_LOGGED_IN = gql`
  query isLoggedIn {
    me {
      id
    }
  }
`;
>>>>>>> routes scope

function App() {
  const { data, error, loading } = useQuery(IS_LOGGED_IN);

  if (loading) return <p>Loading...</p>;

  if (error) return <Erros message={error.message} />;
=======
=======
>>>>>>> Rewind Types and Fix
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import TradulabRouter from "./routes";
<<<<<<< HEAD

import { AuthMiddleware, OtherMiddleware, LayoutRouter } from "./routes";
>>>>>>> Roteamento: Errors, Paginas, Rotas, Middleware

=======
import { AuthMiddleware, RoleMiddleware, LayoutRouter } from "./routes";
import {} from "./";
>>>>>>> Rewind Types and Fix
import { Developer, Error, Home, Login, Projects } from "./pages";
import "./App.css";

<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> fix app
function App() {
  return (
    <ApolloProvider client={client}>
      <UploadForm />
    </ApolloProvider>
<<<<<<< HEAD
>>>>>>> Create file resolver working at front-end and back-end without error treatment
=======
>>>>>>> Create file resolver working at front-end and back-end without error treatment
  );
=======
  return <Pages />;
>>>>>>> routes scope
=======
  return <Pages />;
>>>>>>> Error Middleware
=======
export default function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/error" component={Error} />
        <Route exact path="/login" component={Login} />
        <TradulabRouter
          path="/dev"
          Component={Developer}
          middlewares={[AuthMiddleware, RoleMiddleware]}
          Parent={LayoutRouter}
        />
        <TradulabRouter
          path="/projects"
          Component={Projects}
          middlewares={[AuthMiddleware]}
        />
        <TradulabRouter
          path="/"
          Component={Home}
          middlewares={[AuthMiddleware]}
          Parent={LayoutRouter}
        />
      </Switch>
    </Router>
  );
>>>>>>> Roteamento: Errors, Paginas, Rotas, Middleware
}
=======
import { ApolloProvider } from "@apollo/client";
import ApolloClient from "./services/apollo";
import Pages from "./containers";
import "./App.css";

const App = () => (
  <ApolloProvider client={ApolloClient}>
    <Pages />
  </ApolloProvider>
);

export default App;
>>>>>>> Clean Architeture
