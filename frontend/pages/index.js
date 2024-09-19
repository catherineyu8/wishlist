import { useState } from "react";
import UserForm from "./components/addUserForm";

export default function Home() {
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
			<h1>Add User</h1>
			<UserForm onSubmit={handleAddUserSubmit} />
		</div>
	);
}
