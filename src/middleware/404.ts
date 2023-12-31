import { Request, Response, NextFunction } from 'express';

const notFound = (_req: Request, res: Response, _next: NextFunction) => {
  res.status(404).json({
    status: 'notFound',
    message: 'Resource not found',
  });
};

export default notFound;