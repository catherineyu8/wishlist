// setup the frontend server

import express from "express";
import path from "path";

const app = express();
const port = 3000; // You can choose a different port if necessary

// Serve static files from the "public" directory
app.use(express.static(path.join(__dirname, "public")));

// Basic route for testing
app.get("/", (req, res) => {
	res.sendFile(path.join(__dirname, "public", "index.html"));
});

// Start the server
app.listen(port, () => {
	console.log(`Server is running at http://localhost:${port}`);
});
