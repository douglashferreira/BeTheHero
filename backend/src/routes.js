const express = require('express');

const ongController = require('./controller/ongController');

const incidentController = require('./controller/incidentController');

const profileController = require('./controller/incidentController');

const sessionController = require('./controller/incidentController');

const connection = require('./database/connection');

const routes = express.Router();

routes.post('/sessions', sessionController.create);

routes.get('/ongs', ongController.index);

routes.post('/ongs', ongController.create);

routes.get('/profile', profileController.index);

routes.get('/incidents', incidentController.index);

routes.post('/incidents', incidentController.create);

routes.delete('/incidents:id', incidentController.create);

module.exports = routes;