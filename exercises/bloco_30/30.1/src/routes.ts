import { Router } from 'express';

import TournamentsController from './controllers/tournamentsController';

const tournamentsController = new TournamentsController();
const routes = Router();

routes.get('/tournaments', tournamentsController.getAll);

export default routes;
