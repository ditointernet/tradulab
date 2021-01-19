import * as mongoose from 'mongoose';

import { LANGS_LIST } from './constants';

const { Types } = mongoose.Schema;

const schema = new mongoose.Schema(
  {
    phrase: {
      type: Types.ObjectId,
      ref: 'phrase', // O código quebra se eu referenciar um model que ainda não existe?
      required: true,
      index: true,
    },
    user: {
      type: Types.ObjectId,
      ref: 'user',
      required: true,
      index: true,
    },
    lang: {
      type: String,
      enum: LANGS_LIST,
      required: true,
      index: true,
    },
    text: {
      type: String,
      required: true,
      // Faz sentido ter erro de tamanho da string aqui? Se sim, que tamanhos máximo e
      // mínimo seriam esses, dado que uma "frase" pode ser uma palavra só ou até um texto?
    },
    private: {
      type: Boolean,
      default: false,
    },
    rating: {
      // Preciso pesquisar como tipar um "objeto" no mongoose, se realmente formos deixar
      // o rating daquela forma. Se alguém souber já me fala.
    },
  },
  {
    timestamps: true,
    minimize: false,
  }
);

const model = mongoose.model('suggestion', schema);

export default model;
