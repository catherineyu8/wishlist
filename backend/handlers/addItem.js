import {
	collection,
	doc,
	setDoc,
	updateDoc,
	arrayUnion,
} from "firebase/firestore"; // Import necessary Firestore functions

// Function to add a new user with a wishlist
async function addItem(uid, item) {
	try {
		// Create a reference to the "users" collection and the specific user document
		const userDocRef = doc(collection(db, "users"), uid);

		// Set a new document for the user with the wishlist
		await setDoc(userDocRef, {
			username: "user1",
			item: item, // Pass the array of items
			createdAt: new Date(), // Optional field to track when the wishlist was created
		});

		console.log(`Wishlist added for user: ${uid}`);
	} catch (error) {
		console.error("Error adding wishlist: ", error);
	}
}
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
