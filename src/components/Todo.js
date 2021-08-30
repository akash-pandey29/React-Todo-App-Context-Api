import React, { useContext } from 'react';
import { TodoContext } from '../contexts/TodoContext';

const Todo = ({ todo }) => {
	const { todos, setTodos, setInputText, toastMessage } =
		useContext(TodoContext);

	const deleteHandler = () => {
		let todoElement = document.querySelector(`#todo-${todo.id}`);
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
		<div className='todo' id={`todo-${todo.id}`}>
			<li className={`todo-item ${todo.completed ? 'completed' : ''}`}>
				{todo.text}
				<span className='icon'>
					<span className='icon-action' onClick={completeHandler}>
						<i className='fas fa-check-double'></i>
					</span>
					<span className='icon-action' onClick={editHandler}>
						<i className='fas fa-pen'></i>
					</span>
					<span className='icon-action' onClick={deleteHandler}>
						<i className='fas fa-trash'></i>
					</span>
				</span>
			</li>
		</div>
	);
};

export default Todo;
