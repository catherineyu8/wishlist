import express from "express";
import cors from "cors";
import bodyParser from "body-parser";
import dotenv from "dotenv";
import { db } from "./firebase.js";
import { collection, doc, setDoc } from "firebase/firestore";

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
app.use(bodyParser.urlencoded({ extended: false }));

app.get("/", async (req, res) => {
	return res.send("Hello, world!");
});

const data = {
	name: "Los Angeles",
	state: "CA",
	country: "USA",
};

// Add a new document in collection "cities" with ID 'LA'
// const res = await db.collection("cities").doc("LA").set(data); // db.collection doesnt work
const res = await setDoc(doc(collection(db, "cities"), "LA"), data);

// ways to add things to database?!
// app.get("/add-item", async (req, res) => {
// 	try {
// 		const { name, description } = req.query; // Extract data from the request query

// 		if (!name || !description) {
// 			return res
// 				.status(400)
// 				.send(
// 					"Missing required query parameters. Please make sure to include all of the following params: name, description"
// 				);
// 		}
// 		// // Add a new document to the "items" collection
// 		// const newItem = await db.collection("wishlist").add({
// 		// 	name: name,
// 		// 	description: description,
// 		// 	// createdAt: admin.firestore.FieldValue.serverTimestamp(),
// 		// });
// 		// Add a new document to the "items" collection
// 		const newItem = await addDoc(collection(db, "wishlist"), {
// 			name: name,
// 			description: description,
// 			// createdAt: serverTimestamp(),
// 		});

// 		res.status(200).send(`Item added with ID: ${newItem.id}`);
// 	} catch (error) {
// 		console.error("Error adding item: ", error);
// 		res.status(500).send("Error adding item");
// 	}
// });

// app.get("/post/:postID", async (req, res) => {
// 	return res.send(req.params.postID);
// });

function start() {
	app.listen(port, () => {
		console.log(`Started listening on http://localhost:${port}`);
	});
}

start();
