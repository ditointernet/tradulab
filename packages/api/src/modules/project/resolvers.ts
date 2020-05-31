import { model as Project } from '.';

async function createProject(parent, args, context) {
  const project = new Project({
    owner: context.user,
    displayName: args.displayName,
  });

  await project.save();
  await project.owner.populate();

  return project;
}

export const mutations = { createProject };
