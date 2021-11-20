const express = require('express');
const route = express.Router();

const operationsSawo = require('../controllers/operationsSawo.js');
const operationsFeed = require('../controllers/operationsFeed.js');
const operationsController = require('../controllers/operationsController.js');

route
	.route('/')

route
	.route('/feed')
	.get(operationsFeed.getFeed)
	.post(operationsFeed.createFeed);

route
	.route("/tasks")
	.get(operationsController.getTasks)
	.post(operationsController.createTask);

route
	.route("/sawo/email/")
	.get(operationsSawo.getSawoE)
	.post(operationsSawo.createSawoE);

route
	.route("/sawo/phone/")
	.get(operationsSawo.getSawoP)
	.post(operationsSawo.createSawoP);
module.exports = route;
