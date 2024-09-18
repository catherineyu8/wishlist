import { getWishList } from "./utils/api.js";

export default function Home() {
	return (
		<div>
			<p>hello!</p>
			<title>My Wishlist</title>
			{displayWishlist}
		</div>
	);
}

// Function to display the wishlist on the frontend
async function displayWishlist() {
	try {
		const wishlist = await getWishlist(); // Fetch the wishlist
		const wishlistContainer = document.getElementById("wishlist-container");

		// Clear the container first
		wishlistContainer.innerHTML = "";

		// Display each wishlist item in the container
		wishlist.forEach((item) => {
			const listItem = document.createElement("li");
			listItem.textContent = item.name; // Assuming each wishlist item has a 'name' property
			wishlistContainer.appendChild(listItem);
		});
	} catch (error) {
		console.error("Error fetching the wishlist:", error);
	}
}
