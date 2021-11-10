/* eslint-disable */

exports.getFeed = async (req, res) => {
	const { createClient } = require("@astrajs/collections");
	const astraClient = await createClient({
		astraDatabaseId: process.env.ASTRA_DB_ID,
		astraDatabaseRegion: process.env.ASTRA_DB_REGION,
		applicationToken: process.env.ASTRA_DB_APPLICATION_TOKEN,
		});

	const spyfallsCollection = astraClient.namespace("spyfalls").collection("spyfallsCollection");

	const spyfalls = await spyfallsCollection.findOne({});
	console.log(spyfalls)
	const response = Object.keys(spyfalls).map((key) => ({
		id: key,
		...spyfalls[key]
	}));

	res.json(response);
};

exports.createFeed = async (req, res) => {
	const { createClient } = require("@astrajs/collections");
	const astraClient = await createClient({
		astraDatabaseId: process.env.ASTRA_DB_ID,
		astraDatabaseRegion: process.env.ASTRA_DB_REGION,
		applicationToken: process.env.ASTRA_DB_APPLICATION_TOKEN,
	});

	const spyfallsCollection = astraClient.namespace("spyfalls").collection("spyfallsCollection");

	const spyfall = await spyfallsCollection.create({
		"username": req.body.username,
		"postImg": req.body.postImg,
		"caption": req.body.caption,
		"point": req.body.point
	});

	res.send("POST request was successfully completed.");
};

exports.getTasks = async (req, res) => {
	const { createClient } = require("@astrajs/collections");
	const astraClient = await createClient({
		astraDatabaseId: process.env.ASTRA_DB_ID,
		astraDatabaseRegion: process.env.ASTRA_DB_REGION,
		applicationToken: process.env.ASTRA_DB_APPLICATION_TOKEN,
	});

	const tasksCollection = astraClient.namespace("spyfalls").collection("tasksCollection");

	const tasks = await tasksCollection.find({});
	const response = Object.keys(tasks).map((key) => ({
		id: key,
		...tasks[key]
	}));

	res.json(response);
}