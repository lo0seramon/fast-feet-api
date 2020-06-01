import { Router } from 'express';

import AuthController from './app/controllers/AuthController';

const routes = new Router();

routes.post('/authenticate', AuthController.store);

export default routes;
