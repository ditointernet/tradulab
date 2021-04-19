import * as mongoose from 'mongoose';

export interface ConnectionArgs {
  limit?: number;
  startAfter?: string;
}

export function buildConnectionQuery<DocType extends mongoose.IDocument>(
  args: ConnectionArgs
) {
  const where: mongoose.FilterQuery<DocType> = {};

  const DEFAULT_LIMIT = 25;

  if (args.startAfter) {
    (where.createdAt as any) = {
      $lt: new Date(fromBase64(args.startAfter)),
    };
  }

  const limit = args.limit ?? DEFAULT_LIMIT;

  return { where, limit };
}

export function buildConnectionResponse<DocType extends mongoose.IDocument>(
  documents: DocType[],
  limit: number
) {
  const hasNextPage =
    documents.length > limit
      ? !!documents.splice(documents.length - 1, 1).length
      : false;
  const lastDocument = documents[documents.length - 1];

  return {
    edges: documents.map((node) => ({ node })),
    pageInfo: {
      hasNextPage,
      endCursor: lastDocument
        ? toBase64(lastDocument.createdAt.toISOString())
        : undefined,
    },
  };
}

export function fromBase64(input: string): string {
  return Buffer.from(input, 'base64').toString();
}

export function toBase64(input: string): string {
  return Buffer.from(input).toString('base64');
}

export function escapeRegex(input: string) {
  return input.replace(/[-/\\^$*+?.()|[\]{}]/g, '\\$&');
}
