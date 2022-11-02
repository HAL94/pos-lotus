import { Request, Response } from 'express';
import { User } from '../entities';

declare global {
  namespace Express {
    export interface Request {      
      user?: User;
    }
  }
}

export interface Context {
  req: Request;
  res: Response;
}
