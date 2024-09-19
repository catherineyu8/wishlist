import { collection, doc, setDoc } from "firebase/firestore"; // Import necessary Firestore functions

// Function to add a new user with a wishlist
export default async function addUser(uid, name) {
	try {
		// Create a reference to the "users" collection and the specific user document
		const userDocRef = doc(collection(db, "users"), uid);

		// Set a new document for the user with the wishlist
		await setDoc(userDocRef, {
			name: name,
			wishlist: [], // initialize new users with empty wishlist
			// createdAt: new Date(), // Optional field to track when the wishlist was created
		});

		console.log(`Account added for user: ${userID} (${name})`);
	} catch (error) {
		console.error("Error adding user: ", error);
	}
}
