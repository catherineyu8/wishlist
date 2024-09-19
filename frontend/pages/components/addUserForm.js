import { useState } from "react";

export default function UserForm({ onSubmit }) {
	const [uid, setUid] = useState("");
	const [name, setName] = useState("");

	const handleSubmit = (event) => {
		event.preventDefault();
		onSubmit({ uid, name });
	};

	return (
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
	);
}
