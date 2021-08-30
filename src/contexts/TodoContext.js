import React, { useState, createContext, useEffect } from 'react';
import { toast } from 'react-toastify';

export const TodoContext = createContext();

export const TodoProvider = (props) => {
	////Declaring States
	const [todos, setTodos] = useState([]);
	const [filteredTodos, setFilteredTodos] = useState([]);
	const [status, setStatus] = useState('all');
	const [inputText, setInputText] = useState({ id: null, text: '' });

	////Code to excute once initially
	useEffect(() => {
		getLocalTodos();
	}, []);

	////Code to execute whenever there is any change in States: todos and status
	useEffect(() => {
		filterHandler();
		saveLocalTodos();
	}, [todos, status]);

	////Code to Filter data
	const filterHandler = () => {
		switch (status) {
			case 'completed':
				setFilteredTodos(todos.filter((todo) => todo.completed));
				break;
			case 'pending':
				setFilteredTodos(todos.filter((todo) => !todo.completed));
				break;
			default:
				setFilteredTodos(todos);
		}
	};

	////Code to get data from Local Storage
	const getLocalTodos = () => {
		if (localStorage.getItem('todos') === null)
			localStorage.setItem('todos', JSON.stringify([]));
		else {
			let localTodos = JSON.parse(localStorage.getItem('todos'));
			setTodos(localTodos);
		}
	};

	////Code to save data in Local Storage
	const saveLocalTodos = () => {
		localStorage.setItem('todos', JSON.stringify(todos));
	};

	////Code for Toast Messages
	toast.configure();
	const toastProperties = {
		position: 'bottom-center',
		autoClose: 1500,
		hideProgressBar: true,
		closeOnClick: true,
		pauseOnHover: true,
		draggable: true,
		progress: undefined,
	};
	const toastMessage = (message, type) => {
		switch (type) {
			case 'success':
				toast.success(message, toastProperties);
				break;
			case 'error':
				toast.error(message, toastProperties);
				break;
			case 'info':
				toast.info(message, toastProperties);
				break;
			case 'warn':
				toast.warn(message, toastProperties);
				break;
			default:
				toast(message, toastProperties);
				break;
		}
	};

	return (
		<TodoContext.Provider
			value={{
				todos,
				setTodos,
				filteredTodos,
				setFilteredTodos,
				status,
				setStatus,
				inputText,
				setInputText,
				toastMessage,
			}}
		>
			{props.children}
		</TodoContext.Provider>
	);
};
