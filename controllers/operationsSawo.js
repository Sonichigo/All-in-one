exports.createSawoE = async (req, res) => {
	const { createClient } = require("@astrajs/collections");
	const astraClient = await createClient({
		astraDatabaseId: process.env.ASTRA_DB_ID,
		astraDatabaseRegion: process.env.ASTRA_DB_REGION,
		applicationToken: process.env.ASTRA_DB_APPLICATION_TOKEN,
	});

	const sawoCollection = astraClient.namespace("sawo").collection("sawonCollection");

	const post = await sawoCollection.create({
		"user_id": req.body.user_id,
		"created_on":req.body.created_on,
		"identifier": req.body.identifier,
		"identifier_type":"email",
		"verification_token": req.body.verification_token,
		"name": req.body.customFieldInputValues.Name,
		"number": req.body.customFieldInputValues.Number,
		"company": req.body.customFieldInputValues.Company
	});

	res.send("POST request was successfully completed.");
};


exports.getSawoE = async (req, res) => {
	const { createClient } = require("@astrajs/collections");
	const astraClient = await createClient({
		astraDatabaseId: process.env.ASTRA_DB_ID,
		astraDatabaseRegion: process.env.ASTRA_DB_REGION,
		applicationToken: process.env.ASTRA_DB_APPLICATION_TOKEN,
	});

	const getSawoCollection = astraClient.namespace("sawo").collection("sawonCollection");

	const gtasks = await getSawoCollection.find({});
	const response = Object.keys(gtasks).map((key) => ({
		id: key,
		...gtasks[key]
	}));

	res.json(response);
}

exports.createSawoP = async (req, res) => {
	const { createClient } = require("@astrajs/collections");
	const astraClient = await createClient({
		astraDatabaseId: process.env.ASTRA_DB_ID,
		astraDatabaseRegion: process.env.ASTRA_DB_REGION,
		applicationToken: process.env.ASTRA_DB_APPLICATION_TOKEN,
	});

	const sawoCollection = astraClient.namespace("sawo").collection("sawopCollection");

	const post = await sawoCollection.create({
		"user_id": req.body.user_id,
		"created_on":req.body.created_on,
		"identifier": req.body.identifier,
		"identifier_type":"phone_number_sms",
		"verification_token": req.body.verification_token,
		"name": req.body.customFieldInputValues.Name,
		"email": req.body.customFieldInputValues.Email,
		"company": req.body.customFieldInputValues.Company
	});

	res.send("POST request was successfully completed.");
};


exports.getSawoP = async (req, res) => {
	const { createClient } = require("@astrajs/collections");
	const astraClient = await createClient({
		astraDatabaseId: process.env.ASTRA_DB_ID,
		astraDatabaseRegion: process.env.ASTRA_DB_REGION,
		applicationToken: process.env.ASTRA_DB_APPLICATION_TOKEN,
	});

	const getSawoCollection = astraClient.namespace("sawo").collection("sawopCollection");

	const gtasks = await getSawoCollection.find({});
	const response = Object.keys(gtasks).map((key) => ({
		id: key,
		...gtasks[key]
	}));

	res.json(response);
}