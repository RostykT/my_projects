import React, { useState, useEffect, useRef } from "react";

function TodoForm(props) {
	const [input, SetInput] = useState("");

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
		</form>
	);
}

export default TodoForm;
