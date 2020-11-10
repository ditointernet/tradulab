import { model as File } from '.'
import { model as Project } from '../project';

async function createFile(parent, args) {
  const project = await Project.findOne({ project: args.project })

  if (!project) {
    throw new Error('The provided project does not exist.');
  }

  const file = new File({
    filename: args.filename,
    translation_progress: 0,
    approval_progress: 0,
    source_language: args.source_language,
    extension: args.extension,
    project,
  });

  try {
    await file.save();
  } catch (err) {
    throw err;
  }

  return file;
}

export const mutations = { createFile };
