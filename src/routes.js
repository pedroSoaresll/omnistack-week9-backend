const express = require('express');
const multer = require('multer');
const uploadConfig = require('./config/upload');
const sessionController = require('./controllers/SessionController');
const spotController = require('./controllers/SpotController');
const dashboardController = require('./controllers/DashboardController');
const bookingController = require('./controllers/BookingController');

const upload = multer(uploadConfig);
const routes = express.Router();

routes.post('/sessions', sessionController.store);

routes.post('/spots', upload.single('thumbnail'), spotController.store);
routes.get('/spots', spotController.index);

routes.get('/dashboards', dashboardController.show);

routes.post('/spots/:spot_id/bookings', bookingController.store);

module.exports = routes;