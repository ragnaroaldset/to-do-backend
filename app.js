const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const getAllTasks = require("./db").getAllTasks;
const postNewTask = require("./db").postNewTask;
const deleteTask = require("./db").deleteTask;
app.use(bodyParser.json({ limit: "15mb" }));
app.use(bodyParser.urlencoded({ extended: false }));

// Dette er et GET endepunkt som henter ut alle våre oppgaver (tasks) fra databasen
app.get("/tasks", (req, res) => {
	return getAllTasks()
		.then(results => res.send(results));
});

app.post("/tasks", (req, res) => {
	// SE OPPGAVER.md - Oppgave 1
});


app.listen(1337, (req, res) => {
	console.log("App is running 🎀");
});