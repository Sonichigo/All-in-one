exports.getTasks = async (req, res) => {
	const { createClient } = require("@astrajs/collections");
	const astraClient = await createClient({
		astraDatabaseId: process.env.ASTRA_DB_ID,
		astraDatabaseRegion: process.env.ASTRA_DB_REGION,
		applicationToken: process.env.ASTRA_DB_APPLICATION_TOKEN,
	});

	const tasksCollection = astraClient.namespace("feed").collection("taskCollection");

	const tasks = await tasksCollection.find({});
	const response = Object.keys(tasks).map((key) => ({
		id: key,
		...tasks[key]
	}));

	res.json(response);
}

exports.createTask = async (req, res) => {
	const { createClient } = require("@astrajs/collections");
	const astraClient = await createClient({
		astraDatabaseId: process.env.ASTRA_DB_ID,
		astraDatabaseRegion: process.env.ASTRA_DB_REGION,
		applicationToken: process.env.ASTRA_DB_APPLICATION_TOKEN,
	});

	const taskCollection = astraClient.namespace("feed").collection("taskCollection");

	const post = await taskCollection.create({
		"task": req.body.task
	});
	console.log(req);
	res.send("POST request was successfully completed.");
};
