import * as jwt from 'jsonwebtoken';
import { NextFunction, Request, Response } from 'express';
import { formatApolloErrors } from 'apollo-server-errors';

import { env } from '../helpers';
import TradulabError from '../errors';
import { ERROR_CODES } from '../constants';

interface Session {
  auth: {
    id: string;
    iat: number;
    exp: number;
  };
}

export default async function jwtMiddleware(
  req: Request,
  res: Response,
  next: NextFunction
) {
  const { authorization } = req.headers;
  const bearerRegex = /^Bearer\s/i;
  const isAuthorized = bearerRegex.test(authorization);

  if (isAuthorized) {
    const token = authorization.split(bearerRegex)[1];

    try {
      (req as Request & Session).auth = await jwt.verify(
        token,
        env.getOrThrow('JWT_SECRET')
      );
    } catch (err) {
      if (err.name === 'TokenExpiredError') {
        return res
          .status(200)
          .json(buildError(new TradulabError(ERROR_CODES.EXPIRED_TOKEN)));
      } else if (err.name === 'JsonWebTokenError') {
        return res
          .status(200)
          .json(buildError(new TradulabError(ERROR_CODES.INVALID_TOKEN)));
      } else {
        return res
          .status(200)
          .json(buildError(new TradulabError(ERROR_CODES.UNAUTHORIZED)));
      }
    }
  }

  return next();
}

function buildError(err: TradulabError) {
  return {
    errors: formatApolloErrors([err]),
    data: null,
  };
}
