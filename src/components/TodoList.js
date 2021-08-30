import React, { useContext } from 'react';
import { TodoContext } from '../contexts/TodoContext';
import Todo from './Todo';

const TodoList = () => {
	const { filteredTodos, setStatus, todos, setTodos } = useContext(TodoContext);
	const statusHandler = (e) => {
		setStatus(e.target.value);
	};

	const clearAllHandler = () => {
		setTodos([]);
	};

	return (
		<div className='todo-container'>
			<div className='inputField'>
				<select name='todos' onChange={statusHandler}>
					<option value='all'>All</option>
					<option value='completed'>Completed</option>
					<option value='pending'>Pending</option>
				</select>
			</div>
			<ul className='todoList'>
				{filteredTodos.length === 0 ? (
					<h3>No Data!!!</h3>
				) : (
					filteredTodos.map((todo) => <Todo key={todo.id} todo={todo} />)
				)}
			</ul>
			<div className='footer'>
				<span>
					You have{' '}
					<span className='pendingTasks'>
						{todos.filter((item) => !item.completed).length}
					</span>{' '}
					pending tasks
				</span>
				<button onClick={clearAllHandler}>Clear All</button>
			</div>
		</div>
	);
};

export default TodoList;
