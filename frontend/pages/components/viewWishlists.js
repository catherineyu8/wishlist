// // In order to use react hooks (`useState`, `useEffect`), we must specify that this component runs on the client
// "use client";
// // We import react functions
// import { useEffect, useState } from "react";
// import { getWishlist } from "../handlers/get-wishlist";

// export default async function Wishlist(props) {
// 	const [uid, setUid] = useState();
// 	let data = await fetch("http://localhost:8080/?uid=" + uid);
// 	let posts = await data.json();

// 	return (
// 		<div>
// 			<p>wishlist here!</p>
// 			{getWishlist}
// 		</div>
// 	);
// }
