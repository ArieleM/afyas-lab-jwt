import { Router } from 'express';

import UserController from './app/controller/UserController'
import SessionController from './app/controller/SessionController'
import authMiddleware from './app/middlewares/auth'


const routes = new Router();

routes.post('/session', SessionController.store);
routes.post('/users', UserController.store);


routes.use(authMiddleware);

routes.post('/dashboard', UserController.index);

export default routes;