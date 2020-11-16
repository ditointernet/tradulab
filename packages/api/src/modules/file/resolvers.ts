import path from 'path';
import fs from 'fs';
import { model as File } from '.'
import { model as Project } from '../project';
import { model as Role } from '../role';

async function createFile(parent, args, context) {
  const { createReadStream, filename } = await args.file;
  console.log(args.file);

  const stream = createReadStream();
  stream.on('data', (chunk) => console.log(chunk.toString()));
  const project = await Project.findOne({ _id: args.projectId })

  if (!project) {
    throw new Error('The provided project does not exist.');
  }

  const file = new File({
    filename,
    translationProgress: 0,
    approvalProgress: 0,
    sourceLanguage: args.sourceLanguage,
    extension: filename.split('.').pop(),
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
