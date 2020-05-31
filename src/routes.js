import { Router } from 'express';

const routes = new Router();

routes.get('/auth', (req, res) => {
  return res.json({ message: 'Rota de autenticação' });
});

export default routes;
