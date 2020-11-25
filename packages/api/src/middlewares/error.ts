import { Request, Response, NextFunction } from 'express';

export default function errorMiddleware(
  err,
  req: Request,
  res: Response,
  next: NextFunction
) {
  if (err.name === 'UnauthorizedError')
    return res.status(401).json({ error: err.name, message: 'JWT Expired.' });

  return res.status(500).json({ error: err.name, message: err.message });
}
