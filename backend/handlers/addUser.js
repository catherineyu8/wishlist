import { collection, doc, setDoc } from "firebase/firestore"; // Import necessary Firestore functions

import { db } from "../firebase.js"; // Import the db instance

// Function to add a new user with a wishlist
export default async function addUser(uid, name) {
	// TODO: add try/catch block here and console.log the error?

	// Create a reference to the "users" collection and the specific user document
	const userDocRef = doc(collection(db, "users"), uid);

	// Set a new document for the user with the wishlist
	await setDoc(userDocRef, {
		name: name,
		wishlist: [], // initialize new users with empty wishlist
		// createdAt: new Date(), // Optional field to track when the wishlist was created
	});
	// TODO: comment this out
	console.log(`Account added for user: ${uid} (${name})`);
}
