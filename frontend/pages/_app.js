import { useState, useEffect } from "react";
import AddUserForm from "./components/addUserForm";
import ViewWishlists from "./components/viewWishlists";
import AddItemForm from "./components/addItemForm";
import "../css/main.css";
import "../css/wishlists.css";

export default function Home() {
	const [wishlists, setWishlists] = useState([]);

	useEffect(() => {
		const fetchWishlists = async () => {
			try {
				const response = await fetch(
					"http://localhost:8080/get-wishlists"
				);
				if (response.ok) {
					const data = await response.json();
					setWishlists(data);
				} else {
					throw new Error("Failed to fetch wishlists.");
				}
			} catch (err) {
				setError(err.message);
			}
		};

		fetchWishlists();
	}, []);

	const handleAddUserSubmit = async ({ uid, name }) => {
		try {
			const response = await fetch("http://localhost:8080/add-user", {
				method: "POST",
				headers: {
					"Content-Type": "application/json",
				},
				body: JSON.stringify({
					uid: uid,
					name: name,
				}),
			});

			if (response.ok) {
				// success code from server
				// const result = await response.json();
				alert("User added successfully.");
			} else {
				// error code from server

				alert("Failed to add user.");
			}
		} catch (error) {
			// network or other unexpected error
			setError(err.message);
		}
	};

	const handleAddItemSubmit = async ({ uid, item }) => {
		try {
			const response = await fetch("http://localhost:8080/add-item", {
				method: "POST",
				headers: {
					"Content-Type": "application/json",
				},
				body: JSON.stringify({
					uid: uid,
					item: item,
				}),
			});

			if (response.ok) {
				// success code from server
				// const result = await response.json();
				alert("Item added successfully.");
			} else {
				// error code from server

				alert("Failed to add item.");
			}
		} catch (error) {
			// network or other unexpected error
			setError(err.message);
		}
	};

	return (
		<div>
			<ViewWishlists wishlists={wishlists}></ViewWishlists>
			<AddUserForm onSubmit={handleAddUserSubmit} />
			<AddItemForm onSubmit={handleAddItemSubmit} />
		</div>
	);
}
