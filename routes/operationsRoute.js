const express = require('express');
const route = express.Router();

const operationsController = require('../controllers/operationsController.js');

route
	.route('/')
	.get(operationsController.getFeed)
	.post(operationsController.createFeed);

route
	.route("/tasks")
	.get(operationsController.getTasks);

module.exports = route;
