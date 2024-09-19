import { useState } from "react";

export default function Home() {
	const [uid, setUid] = useState("");
	const [name, setName] = useState("");

	const handleSubmit = async (event) => {
		event.preventDefault();

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
			<form onSubmit={handleSubmit}>
				<label>
					User ID:
					<input
						type="text"
						value={uid}
						onChange={(e) => setUid(e.target.value)}
						required
					/>
				</label>
				<br />
				<br />
				<label>
					Name:
					<input
						type="text"
						value={name}
						onChange={(e) => setName(e.target.value)}
						required
					/>
				</label>
				<br />
				<br />
				<button type="submit">Add User</button>
			</form>
		</div>
	);
}
