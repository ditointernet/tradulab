import { ApolloError } from 'apollo-server-express';
import { Types } from 'mongoose';

import Phrase from './model';
import { model as File, constants as fileConstants } from '../file';
import TradulabError from '../../errors';

interface ICreatePhraseArgs {
  fileId: string;
  text: string;
}

async function createPhrase(_, args: ICreatePhraseArgs) {
  const { fileId, text } = args;

  const file = await File.findById(fileId);

  if (!file) throw new TradulabError(fileConstants.ERROR_CODES.FILE_NOT_FOUND);

  const phrase = new Phrase({
    file: fileId,
    text,
  });

  try {
    await phrase.save();

    return phrase;
  } catch (err) {
    console.error(err);

    throw new ApolloError(err.message);
  }
}

interface IListPhrasesArgs {
  projectId: Types.ObjectId;
  fileId: Types.ObjectId;
}

async function listPhrases(_parent, args: IListPhrasesArgs) {
  const { fileId } = args;

  try {
    const phrases = await Phrase.find({ file: fileId }).populate('file').exec();

    // O código abaixo é uma alternativa que pode ser testada mais tarde,
    // em que além de todos os campos de Phrase, também se retorna a "topSuggestion",
    // que é a suggestion aprovada ou mais votada.
    // Acho que seria legal aparecer essa suggestion para cada phrase
    // já na página de phrases, para que a pessoa contribuidora já saiba
    // quais phrases estão mais necessitando de contribuição.
    // Com essa informação, o front-end pode até escolher ordenar as phrases
    // dando prioridade àquelas que tem sugestões menos votadas.

    // const phrases = await Phrase.aggregate([
    //   { $match: { file: fileId } },
    //   { $project: { file: 0 } },     // elimina o campo "file"
    //   {
    //     $lookup: {
    //       from: 'files',
    //       localField: 'file',        // seria quase equivalente ao "populate('file')"
    //       foreignField: 'id',
    //       as: 'file',
    //     },
    //   },
    //   { $unwind: '$file' },          // necessário porque o file vem como array de documents
    //   {
    //     $lookup: {
    //       from: 'suggestions',
    //       localField: 'id',          // cada phrase passa a ter um campo "suggestion",
    //       foreignField: 'phrase',    // que na verdade é um array com suas suggestions
    //       as: 'suggestion',
    //     },
    //   },
    //   {                              // campo "suggestion" deixa de ser array, para cada
    //     $unwind: '$suggestion'       // elemento do antigo array surge um novo document,
    //   },                             // leiam sobre esse operador para entender melhor
    //   {
    //     $sort: {
    //       'suggestion.approved': -1,      // a partir daqui é bem parecido com o que
    //       'suggestion.rating.score': -1,  // expliquei na conversa do slack: primeiro
    //     }                                 // ordena por aprovados ou mais votados
    //   },
    //   {
    //     $group: {
    //       _id: '$_id',
    //       topSuggestion: { $first: '$suggestion' },    // e aqui agrupa pelo id da phrase,
    //       key: { $first: '$key' },                     // de modo que cada phrase vai ter
    //       text: { $first: '$text' },                   // uma topSuggestion
    //       file: { $first: '$file' },
    //       createdAt: { $first: '$createdAt' },
    //       updatedAt: { $first: '$updatedAt' },
    //     },
    //   },
    // ]);

    // Como eu disse, é necessário testar essa requisição, não tenho certeza se ela funciona
    // ou se precisa ser ajustada. Foi baseada no que eu aprendi na Trybe, na documentação
    // oficial do mongoDB, e numas respostas do stackoverflow:
    // https://docs.mongodb.com/manual/reference/operator/aggregation/match/
    // https://docs.mongodb.com/manual/reference/operator/aggregation/project/
    // https://docs.mongodb.com/manual/reference/operator/aggregation/lookup/
    // https://docs.mongodb.com/manual/reference/operator/aggregation/unwind/
    // https://docs.mongodb.com/manual/reference/operator/aggregation/sort/
    // https://docs.mongodb.com/manual/reference/operator/aggregation/first/
    // https://stackoverflow.com/questions/35176641/mongo-group-with-project

    // Caso este código seja descomentado, lembrar de alterar o type Phrase
    // para incluir a "topSuggestion" opcionalmente.

    if (phrases.length > 0) return phrases;

    const file = await File.findById(fileId);

    if (!file) {
      throw new TradulabError(fileConstants.ERROR_CODES.FILE_NOT_FOUND);
    }

    if (file.processedStatus === 'pending') {
      throw new TradulabError(fileConstants.ERROR_CODES.PROCESSING_IS_PENDING);
    }

    if (file.processedStatus === 'failed') {
      throw new TradulabError(fileConstants.ERROR_CODES.PROCESSING_FAILED);
    }
  } catch (err) {
    console.error(err);
    throw err;
  }

  return [];
}

export const mutations = { createPhrase };
export const queries = { listPhrases };
