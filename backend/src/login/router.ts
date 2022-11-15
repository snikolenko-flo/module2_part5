import { login } from './handler.js';
import { signUp } from './handler.js';
import express, { Request, Response } from 'express';
import { FileService } from '../services/file.service.js';
import { log } from '../helper/logger.js';

export const loginRouter = express.Router();
export const signUpRouter = express.Router();
const fileService = new FileService();

loginRouter.get('/', async (req: Request, res: Response) => {
  log.info(`Request "${req.originalUrl}" is got.`);
  await fileService.sendFile(req, res, './built/frontend/html/login.html', 'text/html');
});

loginRouter.post('/login', async(req: Request, res: Response) => {
  log.info(`Request "${req.originalUrl}" is got.`);
  await login(req, res);
});

signUpRouter.get('/', async (req: Request, res: Response) => {
  log.info(`Request "${req.originalUrl}" is got.`);
  await fileService.sendFile(req, res, './built/frontend/html/signup.html', 'text/html');
});

signUpRouter.post('/', async(req: Request, res: Response) => {
  log.info(`Request "${req.originalUrl}" is got.`);
  await signUp(req, res);
});


