/* eslint-disable */

exports.getFeed = async (req, res) => {
	const { createClient } = require("@astrajs/collections");
	const astraClient = await createClient({
		astraDatabaseId: process.env.ASTRA_DB_ID,
		astraDatabaseRegion: process.env.ASTRA_DB_REGION,
		applicationToken: process.env.ASTRA_DB_APPLICATION_TOKEN,
	});

	const postsCollection = astraClient.namespace("posts").collection("postsCollection");

	const posts = await postsCollection.find({});
	const response = Object.keys(posts).map((key) => ({
		id: key,
		...posts[key]
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

	const postsCollection = astraClient.namespace("posts").collection("postsCollection");

	const post = await postsCollection.create({
		"username": req.body.username,
		"postImg": req.body.postImg,
		"caption": req.body.caption,
		"points": req.body.points
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

	const tasksCollection = astraClient.namespace("posts").collection("tasksCollection");

	const tasks = await tasksCollection.find({});
	const response = Object.keys(tasks).map((key) => ({
		id: key,
		...tasks[key]
	}));

	res.json(response);
}