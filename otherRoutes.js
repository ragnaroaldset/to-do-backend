const express = require("express");
const router = express.Router();
const updateTask = require("./db").updateTask;

router.put("/tasks", (req, res) => {
	if (!req.body && !req.body.id && !req.body.completed) {
		return res.status(400).send("Invalid request. Please check that you have all the required fields in body.");
	}
	return updateTask(req.body)
		.then(() => res.sendStatus(200));
});

module.exports = router;
