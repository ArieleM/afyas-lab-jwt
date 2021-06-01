import { Router } from 'express';

import UserController from './app/controller/UserController'
import SessionController from './app/controller/SessionController'
import NotificationsController from './app/controller/NotificationsController'
import InfoController from './app/controller/InfoController'
import authMiddleware from './app/middlewares/auth'


const routes = new Router();

routes.get('/', (req, res) => {
  res.json({ message: 'Okay' })
})

// Criar usuário
routes.post('/users', UserController.store)


// Logar
routes.post('/session', SessionController.store)

// Autenticação
routes.use(authMiddleware)

//Relacionamento de tabelas
routes.post('/info', InfoController.store)
routes.put('/info/:id', InfoController.update)

// Logar
routes.post('/dashboard', UserController.index)

// Notifications
routes.get('/notifications', NotificationsController.index)
routes.put('/notifications/:id', NotificationsController.update)

export default routes;