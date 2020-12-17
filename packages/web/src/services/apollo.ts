import {
  ApolloClient,
  ApolloLink,
  createHttpLink,
  InMemoryCache,
} from "@apollo/client";

const httpLink = createHttpLink({
  uri: "http://localhost:3001/graphql",
});

const authLink = new ApolloLink((operation, forward) => {
  const token = localStorage.getItem("token");
  console.log("operation", operation);
  if (!["login", "createUser"].includes(operation.operationName)) {
    operation.setContext({
      headers: {
        authorization: token ? `Bearer ${token}` : "",
      },
    });
  }
  return forward(operation);
});

const client = new ApolloClient({
  cache: new InMemoryCache(),
  link: authLink.concat(httpLink),
});

export default client;
