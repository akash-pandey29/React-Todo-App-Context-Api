import React from 'react';
import './App.css';
import Form from './components/Form';
import TodoList from './components/TodoList';
import { TodoProvider } from './contexts/TodoContext';
import 'react-toastify/dist/ReactToastify.css';

const App = () => {
	return (
		<TodoProvider>
			<div>
				<div className='wrapper'>
					<header>
						TODO APP{' '}
						<img src='./Public/Images/checklist.gif' alt='icon' height='30' />
					</header>
					<Form />
				</div>
				<div className='wrapper'>
					<TodoList />
				</div>
			</div>
		</TodoProvider>
	);
};

export default App;
