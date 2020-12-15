<<<<<<< HEAD
<<<<<<< HEAD
# Auth / User

## Criar Usuários

```gql
mutation userBolivar {
  createUser(
    payload: {
      email: "bolivar@dito.com.br"
      password: "123456"
      username: "Anderson Bolivar"
      nickname: "bolivar"
    }
  ) {
    token
    email
    nickname
    username
    id
  }
}

mutation userJulio {
  createUser(
    payload: {
      email: "julio@dito.com.br"
      password: "123456"
      username: "Julio"
      nickname: "wxbjulio"
    }
  ) {
    token
    email
    nickname
    username
    id
  }
}

mutation userMiguel {
  createUser(
    payload: {
      email: "miguel@dito.com.br"
      password: "123456"
      username: "Miguel"
      nickname: "miguelito"
    }
  ) {
    token
    email
    nickname
    username
=======
Sample mutations for our project
=======
# Auth / User
>>>>>>> Back-End Review

## Criar Usuários

```gql
mutation userBolivar {
  createUser(
    payload: {
      email: "bolivar@dito.com.br"
      password: "123456"
      username: "Anderson Bolivar"
      nickname: "bolivar"
    }
  ) {
    token
    email
    nickname
    username
    id
  }
}

mutation userJulio {
  createUser(
    payload: {
      email: "julio@dito.com.br"
      password: "123456"
      username: "Julio"
      nickname: "wxbjulio"
    }
  ) {
    token
    email
    nickname
    username
    id
  }
}

mutation userMiguel {
  createUser(
    payload: {
      email: "miguel@dito.com.br"
      password: "123456"
      username: "Miguel"
      nickname: "miguelito"
    }
  ) {
    token
    email
    nickname
    username
    id
  }
}

<<<<<<< HEAD
<<<<<<< HEAD
query meOwner {
  me {
>>>>>>> create docs
    id
=======
query Login {
  login(email: "bolivar@dito.com.br", password: "123456") {
    token
>>>>>>> queries
=======
mutation userUriell {
  createUser(
    payload: {
      email: "uriell@dito.com.br"
      password: "123456"
      username: "Uriell"
      nickname: "uriell"
    }
  ) {
    token
    email
    nickname
    username
    id
>>>>>>> Back-End Review
  }
}
```

<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
mutation userUriell {
  createUser(
    payload: {
      email: "uriell@dito.com.br"
      password: "123456"
      username: "Uriell"
      nickname: "uriell"
    }
  ) {
    token
    email
    nickname
    username
=======
query meContributor {
  me {
>>>>>>> create docs
    id
=======
##### File

```gql
query listFiles {
  listFiles(projectId: "5fbf0c80212ed4a6a57c607b") {
    filename
>>>>>>> queries
=======
## Login Usuários

```gql
query userBolivar {
  login(payload: { email: "bolivar@dito.com.br", password: "123456" }) {
    token
    nickname
    username
    email
    id
  }
}

query userJulio {
  login(payload: { email: "julio@dito.com.br", password: "123456" }) {
    token
    nickname
    username
    email
    id
  }
}

query userMiguel {
  login(payload: { email: "miguel@dito.com.br", password: "123456" }) {
    token
    nickname
    username
    email
    id
  }
}

query userUriell {
  login(payload: { email: "uriell@dito.com.br", password: "123456" }) {
    token
    nickname
    username
    email
    id
>>>>>>> Back-End Review
  }
}
```

<<<<<<< HEAD
<<<<<<< HEAD
## Login Usuários

```gql
query userBolivar {
  login(payload: { email: "bolivar@dito.com.br", password: "123456" }) {
    token
    nickname
    username
    email
    id
  }
}

query userJulio {
  login(payload: { email: "julio@dito.com.br", password: "123456" }) {
    token
    nickname
    username
    email
    id
  }
}

query userMiguel {
  login(payload: { email: "miguel@dito.com.br", password: "123456" }) {
    token
    nickname
    username
    email
    id
  }
}

query userUriell {
  login(payload: { email: "uriell@dito.com.br", password: "123456" }) {
    token
    nickname
    username
    email
    id
  }
}
```

## Me

```gql
query me {
  me {
    _id
    nickname
    username
  }
}
```

# Project

## Create Project

```gql
mutation projectAgenda {
  createProject(payload: { name: "Dito Agenda", private: true }) {
    owner
    name
    slug
    private
    _id
  }
}

mutation projectCampanhas {
  createProject(payload: { name: "Dito Campanhas", private: true }) {
    owner
    name
    slug
    private
    _id
  }
}

mutation projectTradulab {
  createProject(payload: { name: "Tradulab" }) {
    owner
    name
    slug
    private
    _id
  }
}

mutation projectJornadas {
  createProject(payload: { name: "Dito Jornadas" }) {
    owner
    name
    slug
    private
    _id
  }
}
```

## Listar Projetos

```gql
query listProjects {
  listProjects {
    user
    project {
      name
      slug
      owner
      private
    }
    role
    id
  }
}
```

##### File

```gql
query listFiles {
  listFiles(projectId: "5fbf0c80212ed4a6a57c607b") {
    filename
=======
##### Project
=======
## Me
>>>>>>> Back-End Review

```gql
query me {
  me {
    _id
    nickname
    username
  }
}
```

# Project

## Create Project

```gql
mutation projectAgenda {
  createProject(payload: { name: "Dito Agenda", private: true }) {
    owner
    name
    slug
    private
<<<<<<< HEAD
    createdAt
    updatedAt
>>>>>>> create docs
=======
    _id
  }
}

mutation projectCampanhas {
  createProject(payload: { name: "Dito Campanhas", private: true }) {
    owner
    name
    slug
    private
    _id
  }
}

mutation projectTradulab {
  createProject(payload: { name: "Tradulab" }) {
    owner
    name
    slug
    private
    _id
  }
}

mutation projectJornadas {
  createProject(payload: { name: "Dito Jornadas" }) {
    owner
    name
    slug
    private
    _id
  }
}
```

## Listar Projetos

```gql
query listProjects {
  listProjects {
    user
    project {
      name
      slug
      owner
      private
    }
    role
    id
  }
}
```

##### File

```gql
query listFiles {
  listFiles(projectId: "5fbf0c80212ed4a6a57c607b") {
    filename
>>>>>>> Back-End Review
  }
}
```

<<<<<<< HEAD
<<<<<<< HEAD
##### Project

=======
>>>>>>> create docs
=======
##### Project

>>>>>>> Back-End Review
##### Role

```gql
mutation invite {
  inviteUserToProject(
<<<<<<< HEAD
    payload: {
      projectId: "5fd8236cdea7dc1e623cdfbb"
      userId: "5fd7e99d7ed16045a86cb55b"
      role: contributor
    }
=======
    projectId: "5fad9b0a7ed68959e2341a59"
    userId: "5fad9ae37ed68959e2341a57"
    role: manager
>>>>>>> create docs
  ) {
    id
    role
    user {
<<<<<<< HEAD
      nickname
      username
    }
    project {
      slug
      name
      owner
=======
      id
      displayName
    }
    project {
      id
      displayName
>>>>>>> create docs
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
<<<<<<< HEAD
<<<<<<< HEAD

# Header

{
"Authorization": "Bearer token"
}

Schemas: The service that defines the field is also the service that knows how to populate the field
=======
>>>>>>> create docs
=======

<<<<<<< HEAD
#### User

```gql
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

The service that defines the field is also the service that knows how to populate the field
<<<<<<< HEAD
>>>>>>> store
=======
=======
# Header
>>>>>>> Back-End Review

{
"Authorization": "Bearer token"
}
<<<<<<< HEAD
>>>>>>> changes
=======

Schemas: The service that defines the field is also the service that knows how to populate the field
>>>>>>> Back-End Review
