import React, { useContext } from 'react';
import { FaPlusSquare } from 'react-icons/fa';
import { v4 as uuidv4 } from 'uuid';
import { TodoContext } from '../contexts/TodoContext';

const Form = () => {
	const { todos, setTodos, setStatus, inputText, setInputText, toastMessage } =
		useContext(TodoContext);

	const inputTextHandler = (e) => {
		setInputText({ ...inputText, text: e.target.value });
	};

	const submitTodoHandler = (e) => {
		e.preventDefault();
		if (inputText.text === '') {
			toastMessage('Enter some text', 'error');
			return;
		} else if (inputText.id !== null) {
			setTodos(
				todos.map((item) => {
					if (item.id === inputText.id) {
						return {
							...item,
							text: inputText.text,
						};
					}
					return item;
				})
			);

			toastMessage('Item Updated Successfully', 'info');
		} else {
			setTodos([
				...todos,
				{
					text: inputText.text,
					completed: false,
					id: uuidv4(),
				},
			]);

			toastMessage('Item Added Successfully', 'success');
		}
		setInputText({ id: null, text: '' });
	};

	const statusHandler = (e) => {
		setStatus(e.target.value);
	};
	return (
		<form>
			<input
				value={inputText.text}
				type='text'
				className='todo-input'
				onChange={inputTextHandler}
				placeholder='Add Todo Task'
			/>
			<button className='todo-button' type='submit' onClick={submitTodoHandler}>
				<FaPlusSquare />
			</button>
			<div className='select'>
				<select name='todos' className='filter-todo' onChange={statusHandler}>
					<option value='all'>All</option>
					<option value='completed'>Completed</option>
					<option value='pending'>Pending</option>
				</select>
			</div>
		</form>
	);
};

export default Form;
