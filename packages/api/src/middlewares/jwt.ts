import { Request, Response, NextFunction } from 'express';
import * as jwt from 'jsonwebtoken';
import { env } from '../helpers';

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

  if (bearerRegex.test(authorization)) {
    const token = authorization.split(bearerRegex)[1];
    let decodedToken;

    try {
      decodedToken = await jwt.verify(token, env.getOrThrow('JWT_SECRET'));
    } catch (err) {
      console.error(err);
      // Estes erros devem ficar aqui ou serem movidos para o middle de erro
      if (err.name === 'TokenExpiredError') {
        return res.status(401).json({ error: 'JWT Expired.' });
      } else if (err.name === 'JsonWebTokenError') {
        return res.status(401).json({ error: 'Invalid JWT.' });
      } else {
        return res.status(401).json({ error: 'Unauthorized.' });
      }
    }

    (req as Request & Session).auth = decodedToken;
  }

  return next();
}
