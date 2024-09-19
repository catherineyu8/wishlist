import { collection, doc, setDoc, getDocs } from "firebase/firestore";
import { db } from "../firebase.js"; // Import the db instance

export default async function getWishlist() {
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

	return wishlists;
}
