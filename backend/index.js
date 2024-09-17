import express from "express";
import cors from "cors";
import bodyParser from "body-parser";
import dotenv from "dotenv";
import { db } from "./FirebaseInit.js";
import { collection } from "firebase/firestore";
dotenv.config();


const app = express();
const port = 8080; // default port to listen

app.use(express.json());
app.use(
	cors({
		origin: "http://localhost:3000", // only let backend take requests from frontend running on this server
	})
);
app.use(bodyParser.urlencoded({ extended: false }));

app.get("/", async (req, res) => {
	return res.send("Hello, world!");
});

// app.get("/post/:postID", async (req, res) => {
// 	return res.send(req.params.postID);
// });

function start() {
	app.listen(port, () => {
		console.log(`Started listening on http://localhost:${port}`);
	});
}

start();
