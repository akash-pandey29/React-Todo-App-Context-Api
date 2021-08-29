import React, { useState, useEffect, useContext } from 'react';
import './App.css';
import Form from './components/Form';
import TodoList from './components/TodoList';
import { TodoContext, TodoProvider } from './contexts/TodoContext';
import 'react-toastify/dist/ReactToastify.css';

const App = () => {
	return (
		<div>
			<header>
				<h1>React TODO App</h1>
			</header>

			<TodoProvider>
				<Form />
				<TodoList />
			</TodoProvider>
		</div>
	);
};

export default App;
