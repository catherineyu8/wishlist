import { useState } from "react";

export default function AddUserForm({ onSubmit }) {
	const [uid, setUid] = useState("");
	const [name, setName] = useState("");

	const handleSubmit = (event) => {
		event.preventDefault();
		onSubmit({ uid, name });
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
