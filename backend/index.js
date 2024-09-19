import express from "express";
import cors from "cors";
import bodyParser from "body-parser";
import dotenv from "dotenv";
import { db } from "./firebase.js";
import { collection, doc, setDoc, getDocs } from "firebase/firestore";
import addUser from "./handlers/addUser.js";
import getWishlist from "./handlers/getWishlist.js";

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

// include API routes to add a new user with an empty wishlist,
// add items for a user, and view all the wishlists.
// also sends a json message with status code and either error or success message
app.get("/", async (req, res) => {
	return res.send("This is the server. Hello, world!");
});

app.get("/get-wishlists", async (req, res) => {
	try {
		const wishlists = await getWishlist();
		res.status(200).json(wishlists);
	} catch (error) {
		console.error("Error fetching wishlists: ", error);
		res.status(500).json({ error: "Error fetching wishlists" });
	}
});

app.post("/add-user", async (req, res) => {
	try {
		const { uid, name } = req.body;

		if (!uid || !name) {
			// halt execution if fields not provided
			return res
				.status(400)
				.json({ error_msg: "Missing required fields: uid, name." });
		}

		await addUser(uid, name);
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

// TODO: API route for adding item for a uid

// start the backend server
function start() {
	app.listen(port, () => {
		console.log(`Started listening on http://localhost:${port}`);
	});
}

start();
