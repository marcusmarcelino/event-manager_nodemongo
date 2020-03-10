const express = require('express');
const routes = express.Router();

const EventController = require('./controllers/EventController');

routes.get('/events', EventController.index);

routes.get('/events/:event_id', EventController.show);

routes.put('/events/:event_id', EventController.update);

routes.post('/events', EventController.store);

routes.delete('/events/:event_id', EventController.destroy);

module.exports = routes;