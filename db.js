require("dotenv").config();
const { MongoClient, ServerApiVersion } = require("mongodb");
const uuid = require("uuid");

const uri = `mongodb+srv://${process.env.DATABASE_USERNAME}:${process.env.DATABASE_PASSWORD}@cluster0.vb3eg.mongodb.net/?retryWrites=true&w=majority`;
const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true, serverApi: ServerApiVersion.v1 });
client.connect();
const collection = client.db(`${process.env.GROUP}`).collection("tasks");

function getAllTasks() {
	return collection.find({}).toArray();
}

function postNewTask(task) {
	const newId = uuid.v4();
	task.id = newId;
	return collection.insertOne(task)
		.then(() => collection.find({ id: task.id}).toArray())
		.then(arr => arr[0]);
}

function deleteTask(task) {
	return collection.deleteOne(task);
}

module.exports = { getAllTasks, postNewTask, deleteTask };
