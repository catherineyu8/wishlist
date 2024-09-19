// const db = require("../firebase"); // Import the initialized Firestore instance

// async function getWishList() {
// 	const wishlistRef = db.collection("wishlist").doc("uid");

// 	const doc = await wishlistRef.get();
// 	if (!doc.exists) {
// 		console.log("No such document!");
// 	} else {
// 		console.log("Document data:", doc.data());
// 	}
// }

// // export getWishList

export default async function getWishlist(uid) {
	// let data = await fetch("http://localhost:8080/?uid=" + uid);
	// let posts = await data.json();
	// return (
	// 	<ul>
	// 		{posts.map((post) => (
	// 			<li key={post.id}>{post.title}</li>
	// 		))}
	// 	</ul>
	// );
}
