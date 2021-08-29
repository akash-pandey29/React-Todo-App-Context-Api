import React, { useContext } from 'react';
import { TodoContext } from '../contexts/TodoContext';
import Todo from './Todo';

const TodoList = () => {
	const { filteredTodos } = useContext(TodoContext);

	return (
		<div className='todo-container'>
			<ul className='todo-list'>
				{filteredTodos.length === 0 ? (
					<h2>No Data!!!</h2>
				) : (
					filteredTodos.map((todo, index) => (
						<Todo key={todo.id} todo={todo} todoIndex={index} />
					))
				)}
			</ul>
		</div>
	);
};

export default TodoList;
