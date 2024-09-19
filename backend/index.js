import express from "express";
import cors from "cors";
import bodyParser from "body-parser";
import dotenv from "dotenv";
import { db } from "./firebase.js";
import { collection, doc, setDoc } from "firebase/firestore";
import addUser from "./handlers/addUser.js";

dotenv.config();

const app = express();
const port = 8080; // default port to listen

app.use(express.json());
// connect backend and frontend - only let backend take requests from frontend running on this server
app.use(
	cors({
		origin: "http://localhost:3000",
	})
);
// app.use(bodyParser.urlencoded({ extended: false }));

app.get("/", async (req, res) => {
	return res.send("This is the server. Hello, world!");
});

// API route to add a new user with an empty wishlist
app.post("/add-user", async (req, res) => {
	try {
		const { uid, name } = req.body;

		if (!uid || !name) {
			return res.status(400).send("Missing required fields: uid, name");
		}

		addUser(uid, name);
		res.status(200).send(`User ${userID} (${name}) added successfully.`);
	} catch (error) {
		console.error("Error adding user: ", error);
		res.status(500).send("Error adding user");
	}
});

function start() {
	app.listen(port, () => {
		console.log(`Started listening on http://localhost:${port}`);
	});
}

start();
