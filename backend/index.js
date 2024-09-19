import express from "express";
import cors from "cors";
import bodyParser from "body-parser";
import dotenv from "dotenv";
import { db } from "./firebase.js";
import { collection, doc, setDoc, getDocs } from "firebase/firestore";
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

app.get("/get-wishlists", async (req, res) => {
	try {
		const usersSnapshot = await getDocs(collection(db, "users"));
		const wishlists = [];

		usersSnapshot.forEach((doc) => {
			const data = doc.data();
			wishlists.push({
				uid: doc.id,
				name: data.name,
				wishlist: data.wishlist,
			});
		});

		res.status(200).json(wishlists);
	} catch (error) {
		console.error("Error fetching wishlists: ", error);
		res.status(500).json({ error: "Error fetching wishlists" });
	}
});

// API route to add a new user with an empty wishlist
// sends json message with status and either error or success message
app.post("/add-user", async (req, res) => {
	try {
		const { uid, name } = req.body;

		if (!uid || !name) {
			return res
				.status(400)
				.json({ error_msg: "Missing required fields: uid, name." });
		}

		addUser(uid, name);
		res.status(200).json({
			success_msg: "User added successfully.",
		});
	} catch (error) {
		// error occurred in addUser
		res.status(500).json({
			error_msg: "Error adding user.",
		});
	}
});

function start() {
	app.listen(port, () => {
		console.log(`Started listening on http://localhost:${port}`);
	});
}

start();
