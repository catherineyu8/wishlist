import { useState, useEffect } from "react";
import AddUserForm from "./components/addUserForm";
import ViewWishlists from "./components/viewWishlists";

export default function Home() {
	const [wishlists, setWishlists] = useState([]);

	useEffect(() => {
		const fetchWishlists = async () => {
			try {
				const response = await fetch(
					"http://localhost:8080/get-wishlists"
				);
				if (!response.ok) {
					throw new Error("Failed to fetch wishlists");
				}
				const data = await response.json();
				setWishlists(data);
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
				const result = await response.json();
				alert("User added successfully.");
			} else {
				alert("Failed to add user.");
			}
		} catch (error) {
			// TODO: do something more here other than just reporting to the user???
			alert("Error posting request to server to add user.");
		}
	};

	return (
		<div>
			<ViewWishlists wishlists={wishlists}></ViewWishlists>
			<AddUserForm onSubmit={handleAddUserSubmit} />
		</div>
	);
}
