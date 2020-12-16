import React from "react";
import ReactDOM from "react-dom";
import { ApolloProvider } from "@apollo/client";
import ApolloClient from "./services/apollo";
import App from "./App";

ReactDOM.render(
  <React.StrictMode>
    <ApolloProvider client={ApolloClient}>
      <App />
    </ApolloProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
