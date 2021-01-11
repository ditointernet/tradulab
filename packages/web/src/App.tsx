import React from 'react';
<<<<<<< HEAD
<<<<<<< HEAD
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
<<<<<<< HEAD
import "./App.css";
>>>>>>> routes

<<<<<<< HEAD
>>>>>>> routes
=======
=======
>>>>>>> Installs Packages
<<<<<<< HEAD
>>>>>>> Installs Packages
=======
=======
import "./App.css";

>>>>>>> Add packages]
<<<<<<< HEAD
>>>>>>> Add packages]
=======
=======
>>>>>>> Merge Master
>>>>>>> Merge Master
=======
>>>>>>> Resolve Rebase Conflicts
import {
  ApolloClient,
  ApolloLink,
  ApolloProvider,
  InMemoryCache,
} from '@apollo/client';
import { createUploadLink } from 'apollo-upload-client';
<<<<<<< HEAD
<<<<<<< HEAD

<<<<<<< HEAD
import { TradulabLayout, ProfileCardContainer } from './containers';
=======
<<<<<<< HEAD
import CardProfileContainer from './CardProfileContainer';
>>>>>>> Rebase Master
import MyProjectsContainer from './MyProjectsContainer';
=======
=======
>>>>>>> Resolve Rebase Conflicts
import { Login, Profile, Projects } from './containers';

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

function App() {
  return (
    <ApolloProvider client={client}>
<<<<<<< HEAD
      <TradulabLayout>
        <div style={{ display: 'flex', justifyContent: 'space-around' }}>
          <ProfileCardContainer />
          <MyProjectsContainer />
        </div>
      </TradulabLayout>
=======
      {/* <div style={{ display: 'flex', justifyContent: 'space-around' }}>
        <Profile />
        <Projects />
      </div> */}
      <Login />
>>>>>>> Merge Master
    </ApolloProvider>
  );
}

export default App;
