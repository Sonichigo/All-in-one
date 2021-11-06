/* eslint-disable */

exports.getFeed = async (req, res) => {
	const { createClient } = require("@astrajs/collections");
	const astraClient = await createClient({
		astraDatabaseId: "bf446f4c-f4ea-4dcf-8253-2f60fcceae9a",
		astraDatabaseRegion: process.env.ASTRA_DB_REGION,
		applicationToken: "AstraCS:BjdGHtbnHkSatsiHHZvBkNsC:c053bfe3493d4020577d0437fc5aad51e10f96abaf6a4667665f0a5d298a76f7",
	});

	const postsCollection = astraClient.namespace("spyfall").collection("postsCollection");

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
		applicationToken: "AstraCS:BjdGHtbnHkSatsiHHZvBkNsC:c053bfe3493d4020577d0437fc5aad51e10f96abaf6a4667665f0a5d298a76f7",
	});

	const postsCollection = astraClient.namespace("spyfall").collection("postsCollection");

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
		applicationToken: "AstraCS:BjdGHtbnHkSatsiHHZvBkNsC:c053bfe3493d4020577d0437fc5aad51e10f96abaf6a4667665f0a5d298a76f7",
	});

	const tasksCollection = astraClient.namespace("spyfall").collection("tasksCollection");

	const tasks = await tasksCollection.find({});
	const response = Object.keys(tasks).map((key) => ({
		id: key,
		...tasks[key]
	}));

	res.json(response);
}