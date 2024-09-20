import {
	collection,
	doc,
	setDoc,
	updateDoc,
	arrayUnion,
} from "firebase/firestore"; // Import necessary Firestore functions
import { db } from "../firebase.js"; // Import the db instance

// Function to add a new user with a wishlist
export default async function addItem(uid, item) {
	try {
		// Create a reference to the "users" collection and the specific user document
		const userDocRef = doc(collection(db, "users"), uid);

		await updateDoc(userDocRef, {
			wishlist: arrayUnion(item), // TODO: use arrayRemove to remove items
		});

		console.log(`Item added for user: ${uid}`);
	} catch (error) {
		console.error("Error adding item: ", error);
	}
}
