import { useState } from "react";

export default function ViewWishlists({ wishlists }) {
	return (
		<div>
			<h1>Wishlists</h1>

			<ul class="wishlists">
				{wishlists.map((user) => (
					<ul class="user-wishlist" key={user.uid}>
						<h2>
							wishlist for {user.name} (uid {user.uid})
						</h2>
						{user.wishlist.length > 0 ? (
							user.wishlist.map((item, index) => (
								<li key={index}>{item}</li>
							))
						) : (
							<li>No items in wishlist</li>
						)}
					</ul>
				))}
			</ul>
		</div>
	);
}
