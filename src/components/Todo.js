import React, { useContext } from 'react';
import { FaCheck, FaTrash, FaPen } from 'react-icons/fa';
import { TodoContext } from '../contexts/TodoContext';

const Todo = ({ todo, todoIndex }) => {
	const { todos, setTodos, setInputText, toastMessage } =
		useContext(TodoContext);

	const deleteHandler = () => {
		let todoElement = document.querySelector(`#todo-${todoIndex}`);
		todoElement.classList.add('fall');
		todoElement.addEventListener('transitionend', () => {
			setTodos(todos.filter((item) => item.id !== todo.id));
		});
		toastMessage('Item Deleted Successfully', 'error');
	};

	const editHandler = () => {
		setInputText({ id: todo.id, text: todo.text });
	};

	const completeHandler = () => {
		setTodos(
			todos.map((item) => {
				if (item.id === todo.id) {
					return {
						...item,
						completed: !item.completed,
					};
				}
				return item;
			})
		);
	};
	return (
		<div className='todo' id={`todo-${todoIndex}`}>
			<li className={`todo-item ${todo.completed ? 'completed' : ''}`}>
				{todo.text}
			</li>
			<button className='complete-btn' onClick={completeHandler}>
				<FaCheck />
			</button>
			<button className='edit-btn' onClick={editHandler}>
				<FaPen />
			</button>
			<button className='trash-btn' onClick={deleteHandler}>
				<FaTrash />
			</button>
		</div>
	);
};

export default Todo;
