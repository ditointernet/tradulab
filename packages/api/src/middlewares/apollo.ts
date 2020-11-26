<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
import { GraphQLDateTime } from 'graphql-iso-date';
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
=======
>>>>>>> Create file resolver working at front-end and back-end without error treatment
=======
>>>>>>> crack the code
=======
=======
=======
>>>>>>> file size limit from content length header
=======
>>>>>>> Create file resolver working at front-end and back-end without error treatment
=======
>>>>>>> Create file resolver working at front-end and back-end without error treatment
=======
>>>>>>> crack the code
=======
=======
=======
>>>>>>> Create file resolver working at front-end and back-end without error treatment
import {
  ApolloError,
  ApolloServer,
  AuthenticationError,
  ForbiddenError,
  gql,
  GraphQLUpload
} from 'apollo-server-express';
>>>>>>> Create file resolver working at front-end and back-end without error treatment
import { buildFederatedSchema } from '@apollo/federation';
>>>>>>> changes
import {
  ApolloError,
  ApolloServer,
  AuthenticationError,
  ForbiddenError,
<<<<<<< HEAD
<<<<<<< HEAD
  gql,
  GraphQLUpload,
} from 'apollo-server-express';
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> Create file resolver working at front-end and back-end without error treatment
import { buildFederatedSchema } from '@apollo/federation';
>>>>>>> changes
=======
>>>>>>> Create file resolver working at front-end and back-end without error treatment
=======
>>>>>>> file size limit from content length header
import {
  ApolloError,
  ApolloServer,
  AuthenticationError,
  ForbiddenError,
<<<<<<< HEAD
<<<<<<< HEAD
  gql,
  GraphQLUpload,
} from 'apollo-server-express';
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
import cors from 'cors';
import { buildFederatedSchema } from '@apollo/federation';
=======
>>>>>>> crack the code
import { applyMiddleware } from 'graphql-middleware';
<<<<<<< HEAD
import { auth, user, project, role, file } from '../modules';


=======
import cors from 'cors';
>>>>>>> changes
=======

>>>>>>> changes
import { GraphQLDateTime } from 'graphql-iso-date';
=======
>>>>>>> crack the code
import { applyMiddleware } from 'graphql-middleware';
import { auth, user, project, role, file } from '../modules';


=======
import cors from 'cors';
>>>>>>> changes
=======

>>>>>>> changes
import { GraphQLDateTime } from 'graphql-iso-date';
import { applyMiddleware } from 'graphql-middleware';
import { not, and, or, rule, shield } from 'graphql-shield';
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
=======
=======
>>>>>>> Create file resolver working at front-end and back-end without error treatment
  GraphQLUpload,
  gql,
} from 'apollo-server-express';

<<<<<<< HEAD
import { buildFederatedSchema } from '@apollo/federation';
import { applyMiddleware } from 'graphql-middleware';
<<<<<<< HEAD
import { not, and, rule, shield } from 'graphql-shield';
<<<<<<< HEAD
<<<<<<< HEAD
import cors from 'cors';
<<<<<<< HEAD
>>>>>>> Create file resolver working at front-end and back-end without error treatment
=======
import { ApolloServer, gql, GraphQLUpload } from 'apollo-server-express';
=======
import { ApolloError, ApolloServer, AuthenticationError, ForbiddenError, gql, GraphQLUpload } from 'apollo-server-express';
>>>>>>> fix issues
=======
  gql,
  GraphQLUpload
} from 'apollo-server-express';
>>>>>>> Create file resolver working at front-end and back-end without error treatment
=======
>>>>>>> Create file resolver working at front-end and back-end without error treatment
=======
  gql,
  GraphQLUpload
} from 'apollo-server-express';
>>>>>>> Create file resolver working at front-end and back-end without error treatment
import { buildFederatedSchema } from '@apollo/federation';
import { applyMiddleware } from 'graphql-middleware';
import { not, and, or, rule, shield } from 'graphql-shield';
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
=======
import { not, and, or, rule, shield } from 'graphql-shield';
>>>>>>> Corrigido erro de cors pra qualquer request
=======
import { not, and, or, rule, shield } from 'graphql-shield';
>>>>>>> Corrigido erro de cors pra qualquer request
import cors from "cors";
<<<<<<< HEAD
>>>>>>> Create file resolver working at front-end and back-end without error treatment
=======
>>>>>>> Create file resolver working at front-end and back-end without error treatment
=======
import cors from 'cors';
<<<<<<< HEAD
>>>>>>> file size limit from content length header
=======
import cors from 'cors';
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> file size limit from content length header
=======
=======
=======
=======
>>>>>>> Create file resolver working at front-end and back-end without error treatment
import { ApolloServer, gql, GraphQLUpload } from 'apollo-server-express';
=======
import { ApolloError, ApolloServer, AuthenticationError, ForbiddenError, gql, GraphQLUpload } from 'apollo-server-express';
>>>>>>> fix issues
import { buildFederatedSchema } from '@apollo/federation';
import { applyMiddleware } from 'graphql-middleware';
<<<<<<< HEAD
<<<<<<< HEAD
import { not, and, rule, shield } from 'graphql-shield';
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> Create file resolver working at front-end and back-end without error treatment
=======
import { not, and, or, rule, shield } from 'graphql-shield';
>>>>>>> Corrigido erro de cors pra qualquer request
=======
import { not, and, or, rule, shield } from 'graphql-shield';
>>>>>>> Corrigido erro de cors pra qualquer request
=======
>>>>>>> Corrigido erro de cors pra qualquer request
import cors from "cors";
>>>>>>> Create file resolver working at front-end and back-end without error treatment
=======
>>>>>>> file size limit from content length header
=======
import cors from 'cors';
>>>>>>> Create file resolver working at front-end and back-end without error treatment
=======
=======
>>>>>>> Corrigido erro de cors pra qualquer request
import cors from "cors";
>>>>>>> Create file resolver working at front-end and back-end without error treatment
=======
import cors from 'cors';
>>>>>>> file size limit from content length header
=======
import cors from 'cors';
>>>>>>> file size limit from content length header

<<<<<<< HEAD
<<<<<<< HEAD
=======
import cors from 'cors';
>>>>>>> file size limit from content length header
=======
import cors from "cors";
>>>>>>> Create file resolver working at front-end and back-end without error treatment
=======
import cors from "cors";
>>>>>>> Create file resolver working at front-end and back-end without error treatment

<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
=======
import { auth, user, project, role, file } from '../modules';
>>>>>>> changes
=======
import { auth, user, project, role, file } from '../modules';
>>>>>>> Criado o module files e a resolver create File
=======
import { auth, user, project, role, file } from '../modules';
>>>>>>> Criado o module files e a resolver create File
=======
import { auth, user, project, role, file } from '../modules';
>>>>>>> Criado o module files e a resolver create File
=======
import { auth, user, project, role, file } from '../modules';
>>>>>>> Criado o module files e a resolver create File
=======
=======
import cors from 'cors';
>>>>>>> file size limit from content length header
=======
>>>>>>> file size limit from content length header

>>>>>>> crack the code
=======
import { auth, user, project, role, file } from '../modules';
>>>>>>> changes
=======
import { auth, user, project, role, file } from '../modules';
>>>>>>> Criado o module files e a resolver create File
import { ROLES } from '../modules/role/constants';

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
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
const corsOptions: cors.CorsOptions = {
  origin: 'http://localhost:3000',
  credentials: true,
  allowedHeaders: ['Authorization', 'content-type'],
};
=======
=======
>>>>>>> Update Role
=======
>>>>>>> remove comments
=======
>>>>>>> pull
=======
>>>>>>> Update Role
const corsOptions: cors.CorsOptions = {
  origin: 'http://localhost:3000',
  credentials: true,
  allowedHeaders: ['Authorization', 'content-type'],
};

=======
// A GraphQL service is created by defining types and fields on those types, then providing funcions for each field on each type
// Create e object types;
// Custon scalar types
>>>>>>> Update Role
<<<<<<< HEAD
=======
=======
>>>>>>> Create file resolver working at front-end and back-end without error treatment
const corsOptions: cors.CorsOptions = {
  origin: 'http://localhost:3000',
  credentials: true,
  allowedHeaders: ['Authorization', 'content-type'],
};

<<<<<<< HEAD
>>>>>>> Create file resolver working at front-end and back-end without error treatment
=======
// A GraphQL service is created by defining types and fields on those types, then providing funcions for each field on each type
// Create e object types;
// Custon scalar types
>>>>>>> Update Role
=======
const corsOptions: cors.CorsOptions = {
  allowedHeaders: ['Authorization', 'content-type'],
  credentials: true,
  origin: 'http://localhost:3000',
};

>>>>>>> Create file resolver working at front-end and back-end without error treatment
=======
>>>>>>> remove comments
=======
>>>>>>> Create file resolver working at front-end and back-end without error treatment
=======
const corsOptions: cors.CorsOptions = {
  origin: 'http://localhost:3000',
  credentials: true,
  allowedHeaders: ['Authorization', 'content-type'],
};

>>>>>>> Create file resolver working at front-end and back-end without error treatment
=======
>>>>>>> Update Role
const typeDefs = gql`
  scalar Date
>>>>>>> Create file resolver working at front-end and back-end without error treatment

<<<<<<< HEAD
=======
// A GraphQL service is created by defining types and fields on those types, then providing funcions for each field on each type
// Create e object types;
// Custon scalar types
>>>>>>> Update Role
=======
=======
>>>>>>> Create file resolver working at front-end and back-end without error treatment
const corsOptions: cors.CorsOptions = {
  allowedHeaders: ['Authorization', 'content-type'],
  credentials: true,
  origin: 'http://localhost:3000',
};

<<<<<<< HEAD
>>>>>>> Create file resolver working at front-end and back-end without error treatment
=======
// A GraphQL service is created by defining types and fields on those types, then providing funcions for each field on each type
// Create e object types;
// Custon scalar types
>>>>>>> Update Role
=======
=======
>>>>>>> file size limit from content length header
const corsOptions: cors.CorsOptions = {
  origin: 'http://localhost:3000',
  credentials: true,
  allowedHeaders: ['Authorization', 'content-type'],
};

<<<<<<< HEAD
>>>>>>> Create file resolver working at front-end and back-end without error treatment
=======
>>>>>>> remove comments
=======
>>>>>>> Create file resolver working at front-end and back-end without error treatment
=======
>>>>>>> changes
=======
>>>>>>> changes
const typeDefs = gql`
  scalar Date

=======
>>>>>>> changes
  ${auth.types}
  ${file.types}
  ${project.types}
  ${role.types}
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
  ${user.types}
=======
  ${file.types}
>>>>>>> Criado o module files e a resolver create File
=======
  ${file.types}
>>>>>>> Criado o module files e a resolver create File
=======
  ${file.types}
>>>>>>> Criado o module files e a resolver create File
=======
  ${file.types}
>>>>>>> Criado o module files e a resolver create File
=======
  ${user.types}
>>>>>>> changes
=======
  ${file.types}
>>>>>>> Criado o module files e a resolver create File
`;

<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
const isAuthenticated = rule()((parent, args, { user }) => {
=======
const isAuthenticated = rule()((_, __, { user }) => {
>>>>>>> changes
=======
const isAuthenticated = rule()((_, __, { user }) => {
>>>>>>> changes
  if (!user) {
    return new AuthenticationError('You must be logged in.');
  }
  return true;
});

const isOneOfTheseRoles = (allowedRoles: string[]) =>
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
  rule()(async (_, { projectId }, { user: { id: currentUserId } }) => {
=======
  rule()(async (parent, { projectId }, { user: { id: currentUserId } }) => {
>>>>>>> file size limit from content length header
=======
  rule()(async (parent, { projectId }, { user: { id: currentUserId } }) => {
>>>>>>> file size limit from content length header
=======
  rule()(async (_, { projectId }, { user: { id: currentUserId } }) => {
>>>>>>> changes
=======
  rule()(async (parent, { projectId }, { user: { id: currentUserId } }) => {
>>>>>>> file size limit from content length header
    try {
      const projectRole = await role.model.findOne({
        project: projectId,
        user: currentUserId,
      });

<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
      if (projectRole && allowedRoles.includes(projectRole.role)) return true;

=======
=======
>>>>>>> Create file resolver working at front-end and back-end without error treatment
      if (
        projectRole &&
        [ROLES.MANAGER, ROLES.OWNER].includes(projectRole.role)
      ) {
        return true;
      }
>>>>>>> Create file resolver working at front-end and back-end without error treatment
=======
      if (allowedRoles.includes(projectRole?.role)) return true;
<<<<<<< HEAD
<<<<<<< HEAD

>>>>>>> file size limit from content length header
=======
>>>>>>> changes
=======
      if (allowedRoles.includes(projectRole?.role)) return true;

>>>>>>> file size limit from content length header
=======
      if (allowedRoles.includes(projectRole?.role)) return true;

>>>>>>> file size limit from content length header
=======
>>>>>>> changes
=======
      if (allowedRoles.includes(projectRole?.role)) return true;

>>>>>>> file size limit from content length header
    } catch (err) {
      console.error(err);
      return err;
    }
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
    return new ForbiddenError(
      'You must be owner or manager in this project or this project doesnt exit.'
    );
  });

const isDeveloper = isOneOfTheseRoles([ROLES.DEVELOPER]);

const isManagerOrOwner = isOneOfTheseRoles([ROLES.OWNER, ROLES.MANAGER]);

const permissions = shield(
  {
    Query: {
      login: not(
        isAuthenticated,
        new ApolloError('Someone is already logged in.', 'ALREADY_LOGGED_IN')
      ),
      me: isAuthenticated,
      myProjects: isAuthenticated,
      listFiles: isAuthenticated,
    },
    Mutation: {
      createUser: not(isAuthenticated),
      createProject: isAuthenticated,
      createFile: and(isAuthenticated, or(isDeveloper, isManagerOrOwner)),
      inviteUserToProject: and(isAuthenticated, isManagerOrOwner),
      removeUserFromProject: and(isAuthenticated, isManagerOrOwner),
      updateUserProjectRole: and(isAuthenticated, isManagerOrOwner),
    },
  },
  {
    // https://github.com/maticzav/graphql-shield
    fallbackError: (err, parent, args, context, info) => {
      if (err instanceof ApolloError) {
        // expected errors
        return err;
      } else if (err instanceof Error) {
        // unexpected errors
        console.error(err);
        return new ApolloError('Internal server error', 'ERR_INTERNAL_SERVER');
      } else {
        // what the hell got thrown
        console.error('The resolver threw something that is not an error.');
        console.error(err);
        return new ApolloError('Internal server error', 'ERR_INTERNAL_SERVER');
      }
    },
    allowExternalErrors: true,
  }
);

const resolvers = buildFederatedSchema([
  {
    typeDefs,
    resolvers: {
      FileUpload: GraphQLUpload,
      Date: GraphQLDateTime,
      Query: {
        ...auth.resolvers.queries,
        ...user.resolvers.queries,
        ...project.resolvers.queries,
        ...role.resolvers.queries,
<<<<<<< HEAD
<<<<<<< HEAD
        ...file.resolvers.queries,
=======
>>>>>>> changes
      },
      Mutation: {
        ...auth.resolvers.mutations,
        ...project.resolvers.mutations,
        ...role.resolvers.mutations,
        ...file.resolvers.mutations,
      },
    },
  },
]);
<<<<<<< HEAD

const resolvers = buildFederatedSchema([
  {
    typeDefs,
    resolvers: {
      FileUpload: GraphQLUpload,
      Date: GraphQLDateTime,
      Query: {
        ...auth.resolvers.queries,
        ...user.resolvers.queries,
        ...project.resolvers.queries,
        ...role.resolvers.queries,
=======
        ...file.resolvers.queries,
>>>>>>> list files done
      },
      Mutation: {
        ...auth.resolvers.mutations,
        ...project.resolvers.mutations,
        ...role.resolvers.mutations,
        ...file.resolvers.mutations,
      },
    },
  },
]);

const permissions = shield(
  {
    Query: {
      login: not(isAuthenticated, new ApolloError('Someone is already logged in.', 'ALREADY_LOGGED_IN')),
      me: isAuthenticated,
      myProjects: isAuthenticated,
    },
    Mutation: {
      createUser: not(isAuthenticated),
      createProject: isAuthenticated,
      createFile: and(isAuthenticated, or(isDeveloper, isManagerOrOwner)),
      inviteUserToProject: and(
        isAuthenticated,
        isManagerOrOwner
        // isNotTargetingHigherRoles
      ),
      removeUserFromProject: and(
        isAuthenticated,
        isManagerOrOwner
        // isNotTargetingHigherRoles
      ),
      updateUserProjectRole: and(
        isAuthenticated,
        isManagerOrOwner
        // isNotTargetingHigherRoles
      ),
    },
  },
  {
    // https://github.com/maticzav/graphql-shield
    fallbackError: (err, parent, args, context, info) => {
      if (err instanceof ApolloError) {
        // expected errors
        return err;
      } else if (err instanceof Error) {
        // unexpected errors
        console.error(err);
        return new ApolloError('Internal server error', 'ERR_INTERNAL_SERVER');
      } else {
        // what the hell got thrown
        console.error('The resolver threw something that is not an error.');
        console.error(err);
        return new ApolloError('Internal server error', 'ERR_INTERNAL_SERVER');
      }
    },
    allowExternalErrors: true,
  }
);
const isDeveloper = rule()(
  async (parent, { projectId }, { user: { id: currentUserId } }) => {
=======
const isAuthenticated = rule()((parent, args, { user }) => !!user);
const isOneOfTheseRoles = (allowedRoles: string[]) =>
  rule()(async (parent, { projectId }, { user: { id: currentUserId } }) => {
>>>>>>> file size limit from content length header
=======
const isAuthenticated = rule()((parent, args, { user }) => !!user);
const isOneOfTheseRoles = (allowedRoles: string[]) =>
  rule()(async (parent, { projectId }, { user: { id: currentUserId } }) => {
>>>>>>> file size limit from content length header
    if (user) {
      try {
        const projectRole = await role.model.findOne({
          project: projectId,
          user: currentUserId,
        });
<<<<<<< HEAD
<<<<<<< HEAD
        if (projectRole.role === ROLES.DEVELOPER)
          return true;
=======
=======
=======
import { ApolloServer, gql, GraphQLUpload } from 'apollo-server-express';
import { buildFederatedSchema } from '@apollo/federation';
import { applyMiddleware } from 'graphql-middleware';
import { not, and, or, rule, shield } from 'graphql-shield';
import cors from "cors";
>>>>>>> Create file resolver working at front-end and back-end without error treatment
>>>>>>> Create file resolver working at front-end and back-end without error treatment

        if (allowedRoles.includes(projectRole?.role)) return true;
>>>>>>> file size limit from content length header
=======

<<<<<<< HEAD
        if (allowedRoles.includes(projectRole?.role)) return true;
>>>>>>> file size limit from content length header
      } catch (err) {
        console.error(err);
        return false;
      }
    }
=======
    return new ForbiddenError('You must be owner or manager in this project.');
=======
    return new ForbiddenError(
      'You must be owner or manager in this project or this project doesnt exit.'
    );
>>>>>>> Changing the function ForbiddenError
=======
    return new ForbiddenError(
      'You must be owner or manager in this project or this project doesnt exit.'
    );
>>>>>>> Changing the function ForbiddenError
  });
>>>>>>> file size limit from content length header
=======
=======
>>>>>>> remove comments
=======
>>>>>>> pull
const corsOptions: cors.CorsOptions = {
  origin: 'http://localhost:3000',
  credentials: true,
<<<<<<< HEAD
<<<<<<< HEAD
  allowedHeaders: ['Authorization', 'content-type'],
=======
  allowedHeaders: 'Authorization',  
>>>>>>> Create file resolver working at front-end and back-end without error treatment
=======
  allowedHeaders: ['Authorization', 'content-type'],
>>>>>>> Corrigido erro de cors pra qualquer request
};
>>>>>>> Create file resolver working at front-end and back-end without error treatment

<<<<<<< HEAD
const isManagerOrOwner = isOneOfTheseRoles([ROLES.OWNER, ROLES.MANAGER]);
const isDeveloper = isOneOfTheseRoles([ROLES.DEVELOPER]);
=======
    return false;
  });

<<<<<<< HEAD
    return false;
<<<<<<< HEAD
  }
);
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> Corrigido erro de cors pra qualquer request
=======
const isManagerOrOwner = isOneOfTheseRoles([ROLES.OWNER, ROLES.MANAGER]);
const isDeveloper = isOneOfTheseRoles([ROLES.DEVELOPER]);
>>>>>>> file size limit from content length header

const resolvers = buildFederatedSchema([
  {
    typeDefs,
    resolvers: {
      FileUpload: GraphQLUpload,
      Date: GraphQLDateTime,
      Query: {
        ...auth.resolvers.queries,
        ...user.resolvers.queries,
        ...project.resolvers.queries,
        ...role.resolvers.queries,
      },
      Mutation: {
        ...auth.resolvers.mutations,
        ...project.resolvers.mutations,
        ...role.resolvers.mutations,
        ...file.resolvers.mutations,
      },
    },
  },
]);

const permissions = shield(
  {
    Query: {
      login: not(isAuthenticated, new ApolloError('Someone is already logged in.', 'ALREADY_LOGGED_IN')),
      me: isAuthenticated,
      myProjects: isAuthenticated,
    },
    Mutation: {
      createUser: not(isAuthenticated),
      createProject: isAuthenticated,
      createFile: and(isAuthenticated, or(isDeveloper, isManagerOrOwner)),
      inviteUserToProject: and(
        isAuthenticated,
        isManagerOrOwner
        // isNotTargetingHigherRoles
      ),
      removeUserFromProject: and(
        isAuthenticated,
        isManagerOrOwner
        // isNotTargetingHigherRoles
      ),
      updateUserProjectRole: and(
        isAuthenticated,
        isManagerOrOwner
        // isNotTargetingHigherRoles
      ),
    },
  },
  {
    // https://github.com/maticzav/graphql-shield
    fallbackError: (err, parent, args, context, info) => {
      if (err instanceof ApolloError) {
        // expected errors
        return err;
      } else if (err instanceof Error) {
        // unexpected errors
        console.error(err);
        return new ApolloError('Internal server error', 'ERR_INTERNAL_SERVER');
      } else {
        // what the hell got thrown
        console.error('The resolver threw something that is not an error.');
        console.error(err);
        return new ApolloError('Internal server error', 'ERR_INTERNAL_SERVER');
      }
    },
    allowExternalErrors: true,
  }
)

export default function ApolloMiddleware(app) {
  const apolloServer = new ApolloServer({
<<<<<<< HEAD
=======
=======
>>>>>>> Corrigido erro de cors pra qualquer request
=======
>>>>>>> Corrigido erro de cors pra qualquer request
const isDeveloper = rule()(
  async (parent, { projectId }, { user: { id: currentUserId } }) => {
    if (user) {
      try {
        const projectRole = await role.model.findOne({
          project: projectId,
          user: currentUserId,
        });
        if (projectRole.role === ROLES.DEVELOPER)
          return true;
      } catch (err) {
        console.error(err);
        return false;
      }
    }
<<<<<<< HEAD
<<<<<<< HEAD
=======
    return new ForbiddenError('You must be owner or manager in this project.');
=======
    return new ForbiddenError(
      'You must be owner or manager in this project or this project doesnt exit.'
    );
>>>>>>> Changing the function ForbiddenError
  });
>>>>>>> file size limit from content length header

const isManagerOrOwner = isOneOfTheseRoles([ROLES.OWNER, ROLES.MANAGER]);
const isDeveloper = isOneOfTheseRoles([ROLES.DEVELOPER]);

const resolvers = buildFederatedSchema([
  {
    typeDefs,
    resolvers: {
      FileUpload: GraphQLUpload,
      Date: GraphQLDateTime,
      Query: {
        ...auth.resolvers.queries,
        ...user.resolvers.queries,
        ...project.resolvers.queries,
        ...role.resolvers.queries,
      },
      Mutation: {
        ...auth.resolvers.mutations,
        ...project.resolvers.mutations,
        ...role.resolvers.mutations,
        ...file.resolvers.mutations,
      },
    },
  },
]);

const permissions = shield(
  {
    Query: {
      login: not(isAuthenticated, new ApolloError('Someone is already logged in.', 'ALREADY_LOGGED_IN')),
      me: isAuthenticated,
      myProjects: isAuthenticated,
    },
    Mutation: {
      createUser: not(isAuthenticated),
      createProject: isAuthenticated,
      createFile: and(isAuthenticated, or(isDeveloper, isManagerOrOwner)),
      inviteUserToProject: and(
        isAuthenticated,
        isManagerOrOwner
        // isNotTargetingHigherRoles
      ),
      removeUserFromProject: and(
        isAuthenticated,
        isManagerOrOwner
        // isNotTargetingHigherRoles
      ),
      updateUserProjectRole: and(
        isAuthenticated,
        isManagerOrOwner
        // isNotTargetingHigherRoles
      ),
    },
  },
  {
    // https://github.com/maticzav/graphql-shield
    fallbackError: (err, parent, args, context, info) => {
      if (err instanceof ApolloError) {
        // expected errors
        return err;
      } else if (err instanceof Error) {
        // unexpected errors
        console.error(err);
        return new ApolloError('Internal server error', 'ERR_INTERNAL_SERVER');
      } else {
        // what the hell got thrown
        console.error('The resolver threw something that is not an error.');
        console.error(err);
        return new ApolloError('Internal server error', 'ERR_INTERNAL_SERVER');
      }
    },
    allowExternalErrors: true,
  }
)

<<<<<<< HEAD
export default function ApolloMiddleware(app) {
  const apolloServer = new ApolloServer({
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
    uploads: {
      maxFileSize: 200,
    },
>>>>>>> Corrigido erro de cors pra qualquer request
=======
>>>>>>> file size limit from content length header
=======
    uploads: {
      maxFileSize: 200,
    },
>>>>>>> Corrigido erro de cors pra qualquer request
=======
>>>>>>> file size limit from content length header
=======
const isDeveloper = rule()(
  async (parent, { projectId }, { user: { id: currentUserId } }) => {
    if (user) {
      try {
        const projectRole = await role.model.findOne({
          project: projectId,
          user: currentUserId,
        });
        if (projectRole.role === ROLES.DEVELOPER)
          return true;
      } catch (err) {
        console.error(err);
        return false;
      }
    }
=======
    return new ForbiddenError('You must be owner or manager in this project.');
=======
    return new ForbiddenError(
      'You must be owner or manager in this project or this project doesnt exit.'
    );
>>>>>>> Changing the function ForbiddenError
  });
>>>>>>> file size limit from content length header
=======
<<<<<<< HEAD
=======
// A GraphQL service is created by defining types and fields on those types, then providing funcions for each field on each type
// Create e object types;
// Custon scalar types
>>>>>>> Update Role
=======
>>>>>>> remove comments
>>>>>>> remove comments
=======
>>>>>>> pull
const typeDefs = gql`
  scalar Date

  type Query {
    _: Boolean
  }

  type Mutation {
    _: Boolean
  }

  type Subscription {
    _: Boolean
  }
>>>>>>> file size limit from content length header

const isManagerOrOwner = isOneOfTheseRoles([ROLES.OWNER, ROLES.MANAGER]);

const isDeveloper = isOneOfTheseRoles([ROLES.DEVELOPER]);

const resolvers = buildFederatedSchema([
  {
    typeDefs,
    resolvers: {
      FileUpload: GraphQLUpload,
      Date: GraphQLDateTime,
      Query: {
        ...auth.resolvers.queries,
        ...user.resolvers.queries,
        ...project.resolvers.queries,
        ...role.resolvers.queries,
      },
      Mutation: {
        ...auth.resolvers.mutations,
        ...project.resolvers.mutations,
        ...role.resolvers.mutations,
        ...file.resolvers.mutations,
      },
    },
  },
]);

const permission = shield(
  {
    Query: {
      login: not(isAuthenticated, new ApolloError('Someone is already logged in.', 'ALREADY_LOGGED_IN')),
      me: isAuthenticated,
      myProjects: isAuthenticated,
    },
    Mutation: {
      createUser: not(isAuthenticated),
      createProject: isAuthenticated,
      createFile: and(isAuthenticated, or(isDeveloper, isManagerOrOwner)),
      inviteUserToProject: and(
        isAuthenticated,
        isManagerOrOwner
        // isNotTargetingHigherRoles
      ),
      removeUserFromProject: and(
        isAuthenticated,
        isManagerOrOwner
        // isNotTargetingHigherRoles
      ),
      updateUserProjectRole: and(
        isAuthenticated,
        isManagerOrOwner
        // isNotTargetingHigherRoles
      ),
    },
  },
  {
    // https://github.com/maticzav/graphql-shield
    fallbackError: (err, parent, args, context, info) => {
      if (err instanceof ApolloError) {
        // expected errors
        return err;
      } else if (err instanceof Error) {
        // unexpected errors
        console.error(err);
        return new ApolloError('Internal server error', 'ERR_INTERNAL_SERVER');
      } else {
        // what the hell got thrown
        console.error('The resolver threw something that is not an error.');
        console.error(err);
        return new ApolloError('Internal server error', 'ERR_INTERNAL_SERVER');
      }
    },
    allowExternalErrors: true,
  }
)

export default function ApolloMiddleware(app) {
  const apolloServer = new ApolloServer({
<<<<<<< HEAD
    uploads: {
      maxFileSize: 200,
    },
>>>>>>> Corrigido erro de cors pra qualquer request
=======
>>>>>>> file size limit from content length header
=======
=======
  });
>>>>>>> file size limit from content length header

const isManagerOrOwner = isOneOfTheseRoles([ROLES.OWNER, ROLES.MANAGER]);
const isDeveloper = isOneOfTheseRoles([ROLES.DEVELOPER]);

export default function ApolloMiddleware(app) {
  const apolloServer = new ApolloServer({
<<<<<<< HEAD
    uploads: {
      maxFileSize: 200,
    },
>>>>>>> Corrigido erro de cors pra qualquer request
=======
>>>>>>> file size limit from content length header
=======
=======
    return new ForbiddenError('You must be owner or manager in this project.');
  });
>>>>>>> file size limit from content length header

const isManagerOrOwner = isOneOfTheseRoles([ROLES.OWNER, ROLES.MANAGER]);
const isDeveloper = isOneOfTheseRoles([ROLES.DEVELOPER]);

const resolvers = buildFederatedSchema([
  {
    typeDefs,
    resolvers: {
      FileUpload: GraphQLUpload,
      Date: GraphQLDateTime,
      Query: {
        ...auth.resolvers.queries,
        ...user.resolvers.queries,
        ...project.resolvers.queries,
        ...role.resolvers.queries,
      },
      Mutation: {
        ...auth.resolvers.mutations,
        ...project.resolvers.mutations,
        ...role.resolvers.mutations,
        ...file.resolvers.mutations,
      },
    },
  },
]);

const permissions = shield(
  {
    Query: {
      login: not(isAuthenticated, new ApolloError('Someone is already logged in.', 'ALREADY_LOGGED_IN')),
      me: isAuthenticated,
      myProjects: isAuthenticated,
    },
    Mutation: {
      createUser: not(isAuthenticated),
      createProject: isAuthenticated,
      createFile: and(isAuthenticated, or(isDeveloper, isManagerOrOwner)),
      inviteUserToProject: and(
        isAuthenticated,
        isManagerOrOwner
        // isNotTargetingHigherRoles
      ),
      removeUserFromProject: and(
        isAuthenticated,
        isManagerOrOwner
        // isNotTargetingHigherRoles
      ),
      updateUserProjectRole: and(
        isAuthenticated,
        isManagerOrOwner
        // isNotTargetingHigherRoles
      ),
    },
  },
  {
    // https://github.com/maticzav/graphql-shield
    fallbackError: (err, parent, args, context, info) => {
      if (err instanceof ApolloError) {
        // expected errors
        return err;
      } else if (err instanceof Error) {
        // unexpected errors
        console.error(err);
        return new ApolloError('Internal server error', 'ERR_INTERNAL_SERVER');
      } else {
        // what the hell got thrown
        console.error('The resolver threw something that is not an error.');
        console.error(err);
        return new ApolloError('Internal server error', 'ERR_INTERNAL_SERVER');
      }
    },
    allowExternalErrors: true,
  }
)

export default function ApolloMiddleware(app) {
  const apolloServer = new ApolloServer({
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
    uploads: {
      maxFileSize: 200,
    },
>>>>>>> Corrigido erro de cors pra qualquer request
=======
>>>>>>> file size limit from content length header
=======
    uploads: {
      maxFileSize: 200,
    },
>>>>>>> Corrigido erro de cors pra qualquer request
=======
>>>>>>> file size limit from content length header
    schema: applyMiddleware(
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
      resolvers,
      permissions,      
=======
      buildFederatedSchema([
        {
          typeDefs,
          resolvers: {
            FileUpload: GraphQLUpload,
            Date: GraphQLDateTime,
            Query: {
              ...auth.resolvers.queries,
              ...user.resolvers.queries,
              ...project.resolvers.queries,
              ...role.resolvers.queries,
            },
            Mutation: {
              ...auth.resolvers.mutations,
              ...project.resolvers.mutations,
              ...role.resolvers.mutations,
              ...file.resolvers.mutations,
            },
          },
        },
      ]),
      shield(
        {
          Query: {
            login: not(
              isAuthenticated,
              new ApolloError(
                'Someone is already logged in.',
                'ALREADY_LOGGED_IN'
              )
            ),
            me: isAuthenticated,
            myProjects: isAuthenticated,
          },
          Mutation: {
            createUser: not(isAuthenticated),
            createProject: isAuthenticated,
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
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
            createFile: and(isAuthenticated, or(isDeveloper, isManagerOrOwner)),
=======
=======
>>>>>>> Corrigido erro de cors pra qualquer request
=======
>>>>>>> Corrigido erro de cors pra qualquer request
=======
>>>>>>> Corrigido erro de cors pra qualquer request
=======
>>>>>>> Corrigido erro de cors pra qualquer request
            createFile: and(
              isAuthenticated,
              or(isDeveloper, isManagerOrOwner)
            ),
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> Corrigido erro de cors pra qualquer request
=======
            createFile: and(isAuthenticated, or(isDeveloper, isManagerOrOwner)),
>>>>>>> file size limit from content length header
=======
            createFile: isAuthenticated,
>>>>>>> Criado o module files e a resolver create File
=======
>>>>>>> Corrigido erro de cors pra qualquer request
=======
            createFile: and(isAuthenticated, or(isDeveloper, isManagerOrOwner)),
>>>>>>> file size limit from content length header
=======
=======
>>>>>>> Corrigido erro de cors pra qualquer request
            createFile: and(isAuthenticated, or(isDeveloper, isManagerOrOwner)),
=======
            createFile: isAuthenticated,
>>>>>>> Criado o module files e a resolver create File
<<<<<<< HEAD
>>>>>>> Criado o module files e a resolver create File
=======
=======
            createFile: and(
              isAuthenticated,
              or(isDeveloper, isManagerOrOwner)
            ),
>>>>>>> Corrigido erro de cors pra qualquer request
>>>>>>> Corrigido erro de cors pra qualquer request
=======
            createFile: and(isAuthenticated, or(isDeveloper, isManagerOrOwner)),
>>>>>>> file size limit from content length header
=======
            createFile: isAuthenticated,
>>>>>>> Criado o module files e a resolver create File
=======
            createFile: isAuthenticated,
>>>>>>> Criado o module files e a resolver create File
=======
            createFile: isAuthenticated,
>>>>>>> Criado o module files e a resolver create File
=======
>>>>>>> Corrigido erro de cors pra qualquer request
=======
            createFile: and(isAuthenticated, or(isDeveloper, isManagerOrOwner)),
>>>>>>> file size limit from content length header
=======
>>>>>>> Corrigido erro de cors pra qualquer request
=======
            createFile: and(isAuthenticated, or(isDeveloper, isManagerOrOwner)),
>>>>>>> file size limit from content length header
=======
            createFile: isAuthenticated,
>>>>>>> Criado o module files e a resolver create File
=======
>>>>>>> Corrigido erro de cors pra qualquer request
=======
            createFile: and(isAuthenticated, or(isDeveloper, isManagerOrOwner)),
>>>>>>> file size limit from content length header
=======
=======
>>>>>>> Corrigido erro de cors pra qualquer request
            createFile: and(isAuthenticated, or(isDeveloper, isManagerOrOwner)),
=======
            createFile: isAuthenticated,
>>>>>>> Criado o module files e a resolver create File
<<<<<<< HEAD
>>>>>>> Criado o module files e a resolver create File
=======
=======
            createFile: and(
              isAuthenticated,
              or(isDeveloper, isManagerOrOwner)
            ),
>>>>>>> Corrigido erro de cors pra qualquer request
>>>>>>> Corrigido erro de cors pra qualquer request
=======
            createFile: and(isAuthenticated, or(isDeveloper, isManagerOrOwner)),
>>>>>>> file size limit from content length header
            inviteUserToProject: and(
              isAuthenticated,
              isManagerOrOwner
              // isNotTargetingHigherRoles
            ),
            removeUserFromProject: and(
              isAuthenticated,
              isManagerOrOwner
              // isNotTargetingHigherRoles
            ),
            updateUserProjectRole: and(
              isAuthenticated,
              isManagerOrOwner
              // isNotTargetingHigherRoles
            ),
          },
        },
        {
          // https://github.com/maticzav/graphql-shield
          fallbackError: (err, parent, args, context, info) => {
            if (err instanceof ApolloError) {
              // expected errors
              return err;
            } else if (err instanceof Error) {
              // unexpected errors
              console.error(err);
              return new ApolloError(
                'Internal server error',
                'ERR_INTERNAL_SERVER'
              );
            } else {
              // what the hell got thrown
              console.error(
                'The resolver threw something that is not an error.'
              );
              console.error(err);
              return new ApolloError(
                'Internal server error',
                'ERR_INTERNAL_SERVER'
              );
            }
          },
          allowExternalErrors: true,
        }
      )
>>>>>>> Criado o module files e a resolver create File
=======
      resolvers,
<<<<<<< HEAD
      permission,      
>>>>>>> Organizando o apollo middleware
=======
      permissions,      
>>>>>>> permission para permissions
=======
      resolvers,
<<<<<<< HEAD
      permission,      
>>>>>>> Organizando o apollo middleware
=======
      permissions,      
>>>>>>> permission para permissions
=======
      resolvers,
<<<<<<< HEAD
      permission,      
>>>>>>> Organizando o apollo middleware
=======
      permissions,      
>>>>>>> permission para permissions
=======
      resolvers,
      permission,      
>>>>>>> Organizando o apollo middleware
    ),
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
=======
    schema: applyMiddleware(resolvers, permissions),
>>>>>>> changes
    context: async ({ req: { auth, headers } }: any) => {
      const baseContext = {
<<<<<<< HEAD
<<<<<<< HEAD
        contentLength: parseInt(headers['content-length']),
=======
        contentLength: headers['content-length'],
>>>>>>> file size limit from content length header
=======
        contentLength: headers['content-length'],
>>>>>>> file size limit from content length header
=======
    context: async ({ req: { auth, headers } }: any) => {
      const baseContext = {
        contentLength: headers['content-length'],
>>>>>>> file size limit from content length header
=======
    context: async ({ req: { auth, headers } }: any) => {
      const baseContext = {
        contentLength: headers['content-length'],
>>>>>>> file size limit from content length header
=======
=======

export default function ApolloMiddleware(app) {
  const apolloServer = new ApolloServer({
    schema: applyMiddleware(resolvers, permissions),
>>>>>>> changes
    context: async ({ req: { auth, headers } }: any) => {
      const baseContext = {
        contentLength: headers['content-length'],
>>>>>>> file size limit from content length header
=======
    context: async ({ req: { auth, headers } }: any) => {
      const baseContext = {
        contentLength: headers['content-length'],
>>>>>>> file size limit from content length header
        user: undefined,
      };

      if (typeof auth === 'object' && auth.id) {
        baseContext.user = await user.model.findById(auth.id);
      }

      return baseContext;
    },
  });

  apolloServer.applyMiddleware({ app, cors: corsOptions });
}
