import { useState } from "react";

export default function AddItemForm({ onSubmit }) {
	const [uid, setUid] = useState("");
	const [item, setItem] = useState("");

	const handleSubmit = (event) => {
		event.preventDefault();
		onSubmit({ uid, item });

		setUid("");
		setItem("");
	};

	return (
		<div>
			<h1>Add Item</h1>
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
					Item:
					<input
						type="text"
						value={item}
						onChange={(e) => setItem(e.target.value)}
						required
					/>
				</label>
				<br />
				<br />
				<button type="submit">Add Item</button>
			</form>
		</div>
	);
}
