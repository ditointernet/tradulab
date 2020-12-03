import { ApolloError } from 'apollo-server-express';
<<<<<<< HEAD

import TradulabError from '../../errors';
import { ERROR_CODES as projectCodes } from './constants';
import { ROLES } from '../role/constants';
import { model as Project } from '.';
=======
import { model as Project } from '.';
import TradulabError from '../../errors';
>>>>>>> update listFiles and error
import { model as Role } from '../role';

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
async function createProject(
  _parent,
  { payload: { name, private: isPrivate } },
  { user }
) {
=======
//Significado de context

=======
>>>>>>> Create file resolver working at front-end and back-end without error treatment
=======
//Significado de context

>>>>>>> Criado o module files e a resolver create File
=======
>>>>>>> Create file resolver working at front-end and back-end without error treatment
=======
//Significado de context

>>>>>>> Criado o module files e a resolver create File
=======
>>>>>>> Create file resolver working at front-end and back-end without error treatment
=======
//Significado de context

>>>>>>> Criado o module files e a resolver create File
=======
>>>>>>> Create file resolver working at front-end and back-end without error treatment
=======
//Significado de context

>>>>>>> Criado o module files e a resolver create File
=======
>>>>>>> Create file resolver working at front-end and back-end without error treatment
async function createProject(parent, args, context) {
>>>>>>> Criado o module files e a resolver create File
=======
async function createProject(_, args, context) {
>>>>>>> update listFiles and error
  const project = new Project({
    name,
    owner: user,
    private: isPrivate || false,
  });

  const role = new Role({
    project,
    role: ROLES.OWNER,
    user,
  });

  try {
    await Promise.all([project.save(), role.save()]);

    return project;
  } catch (err) {
    await Promise.all([project.remove(), role.remove()]);

    console.error(JSON.stringify(err, null, 2));

    if (err.name === 'MongoError' && err.code === 11000) {
      const duplicatedField = Object.keys(err.keyPattern)[0];

      switch (duplicatedField) {
        case 'slug':
          throw new TradulabError(projectCodes.SLUG_ALREADY_IN_USE);
        default:
          throw new ApolloError(err.message);
      }
    }

    if (err.errors) {
      const invalidField = Object.keys(err.errors)[0];
      const errorCode = err.errors[invalidField].properties.message;
      throw new TradulabError(errorCode);
    }

    throw new ApolloError(err.message, 'INTERNAL_ERROR');
  }
}

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
async function listProjects(_parent, _args, { user }) {
  try {
    const roles = await Role.find({ user: user._id })
      .populate('project')
      .exec();
=======
//Duvidas populate

=======
>>>>>>> Create file resolver working at front-end and back-end without error treatment
=======
//Duvidas populate

>>>>>>> Criado o module files e a resolver create File
=======
>>>>>>> Create file resolver working at front-end and back-end without error treatment
=======
//Duvidas populate

>>>>>>> Criado o module files e a resolver create File
=======
>>>>>>> Create file resolver working at front-end and back-end without error treatment
=======
//Duvidas populate

>>>>>>> Criado o module files e a resolver create File
=======
>>>>>>> Create file resolver working at front-end and back-end without error treatment
=======
//Duvidas populate

>>>>>>> Criado o module files e a resolver create File
=======
>>>>>>> Create file resolver working at front-end and back-end without error treatment
async function myProjects(parent, args, context) {
=======
// Não estamos tratando o Erro do roles.exect(), conflito com tipagem
async function myProjects(_, __, context) {
>>>>>>> update listFiles and error
  const roles = await Role.find({ user: context.user })
    .populate('project')
    .exec();
>>>>>>> Criado o module files e a resolver create File

    return roles;
  } catch (err) {
    console.error(err);
    throw new ApolloError(err.message, 'INTERNAL_ERROR');
  }
}

export const mutations = { createProject };
export const queries = { listProjects };
