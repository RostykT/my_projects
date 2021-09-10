import React, { useState, useEffect, useRef } from "react";

function TodoForm(props) {
	const [input, SetInput] = useState(props.edit ? props.edit.value : "");

	const inputRef = useRef(null);
	useEffect(() => {
		inputRef.current.focus();
	});

	const handleChange = (e) => {
		SetInput(e.target.value);
	};
	const HandleSubmit = (e) => {
		e.preventDefault();

		props.onSubmit({
			id: Math.floor(Math.random() * 1000),
			text: input,
		});
		SetInput("");
	};

	return (
		<form className="todo-form" onSubmit={HandleSubmit}>
			{props.edit ? (
				<>
					<input
						type="text"
						placeholder="Update your item"
						value={input}
						name="text"
						className="todo-input edit"
						onChange={handleChange}
						ref={inputRef}
					/>
					<button className="todo-button edit"> Update</button>
				</>
			) : (
				<>
					<input
						type="text"
						placeholder="Add a todo"
						value={input}
						name="text"
						className="todo-input"
						onChange={handleChange}
						ref={inputRef}
					/>
					<button className="todo-button"> Add todo</button>
				</>
			)}
		</form>
	);
}

export default TodoForm;
