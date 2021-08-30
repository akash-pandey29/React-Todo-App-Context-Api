import React, { useContext } from 'react';
import { v4 as uuidv4 } from 'uuid';
import { TodoContext } from '../contexts/TodoContext';

const Form = () => {
	const { todos, setTodos, inputText, setInputText, toastMessage } =
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
			let todoElement = document.querySelector(`#todo-${inputText.id}`);
			todoElement.classList.add('edited');
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
			todoElement.addEventListener('transitionend', () => {
				todoElement.classList.remove('edited');
			});

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

	return (
		<form>
			<div className='inputField'>
				<input
					value={inputText.text}
					type='text'
					onChange={inputTextHandler}
					placeholder='Add Todo Task'
				/>
				<button type='submit' onClick={submitTodoHandler}>
					<i className='fas fa-plus'></i>
					{/* <FaPlusSquare /> */}
				</button>
			</div>
		</form>
	);
};

export default Form;
