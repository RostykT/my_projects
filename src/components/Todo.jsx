import React, { useState } from "react";
import TodoForm from "./TodoForm";
import TodoList from "./TodoList";
import { FiEdit3 } from "react-icons/fi";
import { IoMdClose } from "react-icons/io";

function Todo({ todos, completeTodo, removeTodo, updateTodo }) {
	const [edit, setEdit] = useState({
		id: null,
		value: "",
	});
	const submitUpdate = (value) => {
		updateTodo(edit.id, value);
		setEdit({
			id: null,
			value: "",
		});
	};
	if (edit.id) {
		return <TodoForm edit={edit} onSubmit={submitUpdate} />;
	}
	return todos.map((todo, index) => (
		<div
			key={index}
			className={todo.isComplete ? "todo-row complete" : "todo-row"}
		>
			<div key={todo.id} onClick={() => completeTodo(todo.id)}>
				{todo.text}
			</div>
			<div className="icons">
				<FiEdit3
					onClick={() => setEdit({ id: todo.id, value: todo.text })}
					className="edit-icon"
				/>
				<IoMdClose
					onClick={() => removeTodo(todo.id)}
					className="delete-icon"
				/>
			</div>
		</div>
	));
}

export default Todo;
