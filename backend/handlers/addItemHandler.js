// // In your backend route handler, e.g., in an Express route
// const db = require("./firebase"); // Import the initialized Firestore instance

// app.post("/add-item", async (req, res) => {
// 	try {
// 		const { name, description } = req.body; // Extract data from the request body

// 		// Add a new document to the "items" collection
// 		const newItem = await db.collection("wishlist").add({
// 			name: name,
// 			description: description,
// 			// createdAt: admin.firestore.FieldValue.serverTimestamp(),
// 		});

// 		res.status(200).send(`Item added with ID: ${newItem.id}`);
// 	} catch (error) {
// 		console.error("Error adding item: ", error);
// 		res.status(500).send("Error adding item");
// 	}
// });
