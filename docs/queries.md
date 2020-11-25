Sample mutations for our project

##### Auth

```gql
# Write your query or mutation here
mutation authOwner {
  createUser(
    user: {
      email: "uriell.viana@dito.com.br"
      password: "123456"
      username: "uriell"
    }
  ) {
    token
  }
}

mutation authContributor {
  createUser(
    user: {
      email: "uriell.viana+contributor@dito.com.br"
      password: "123456"
      username: "uriell-contributor"
    }
  ) {
    token
  }
}

query meOwner {
  me {
    id
  }
}

query meContributor {
  me {
    id
  }
}
```

##### Project

```gql
mutation project {
  createProject(displayName: "Dito") {
    id
    slug
    displayName
    owner {
      id
    }
    private
    createdAt
    updatedAt
  }
}
```

##### Role

```gql
mutation invite {
  inviteUserToProject(
    projectId: "5fad9b0a7ed68959e2341a59"
    userId: "5fad9ae37ed68959e2341a57"
    role: manager
  ) {
    id
    role
    user {
      id
      displayName
    }
    project {
      id
      displayName
    }
    createdAt
    updatedAt
  }
}

mutation update {
  updateUserProjectRole(
    projectId: "5fad9b0a7ed68959e2341a59"
    userId: "5fad9ae37ed68959e2341a57"
    role: manager
  ) {
    id
    role
    user {
      id
      displayName
    }
    project
    createdAt
    updatedAt
  }
}

mutation remove {
  removeUserFromProject(
    projectId: "5fad9b0a7ed68959e2341a59"
    userId: "5fad9ac07ed68959e2341a55"
  ) {
    id
    username
    displayName
    createdAt
    updatedAt
  }
}
```

The service that defines the field is also the service that knows how to populate the field
