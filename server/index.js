const express = require("express");
const cors = require("cors");
const { connection } = require("./config/db.js");

require("dotenv").config();
const app = express();
app.use(express.json());
app.use(cors());
app.get("/", function(req, res) {
	res.status(200).send("Welcome to HomePage");
});

const PORT = process.env.PORT || 8080;
app.listen(PORT, async () => {
	try {
		await connection;
		console.log(`application listen on ${PORT}`);
	} catch (error) {
		console.log(error);
	}
});
