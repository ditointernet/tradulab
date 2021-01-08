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
=======
>>>>>>> Rebase Master
import React from "react";
<<<<<<< HEAD
import "./App.css";
>>>>>>> routes

<<<<<<< HEAD
>>>>>>> routes
=======
=======
>>>>>>> Installs Packages
>>>>>>> Installs Packages
import {
  ApolloProvider,
  ApolloClient,
  InMemoryCache,
  ApolloLink,
} from '@apollo/client';
import { createUploadLink } from 'apollo-upload-client';

<<<<<<< HEAD
import { TradulabLayout, ProfileCardContainer } from './containers';
=======
<<<<<<< HEAD
import CardProfileContainer from './CardProfileContainer';
>>>>>>> Rebase Master
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
=======
import UploadForm from "./UploadForm";
import CardProfileContainer from "./CardProfileContainer";
import { LoginContainer } from "./containers";
>>>>>>> Rebase Master
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

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

function App() {
  return (
    <ApolloProvider client={client}>
      <Router>
        <Switch>
          <Route component={CardProfileContainer} exact path="/" />
          <Route component={LoginContainer} exact path="/login" />
        </Switch>
      </Router>
    </ApolloProvider>
  );
}

export default App;
