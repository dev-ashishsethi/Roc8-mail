import { useEffect } from 'react';
import './App.css';
import { useDispatch, useSelector } from 'react-redux/es/exports';
import { fetchInit } from './actions';
import { initialEmail } from './reducer';
import { AppDispatch } from './store/store';

function App() {
	const dispatch: AppDispatch = useDispatch();
	const res = useSelector<initialEmail[], initialEmail[]>((state) => state);

	useEffect(() => {
		dispatch(fetchInit());
	}, []);

	console.log('api call', res);
	return (
		<div className='App'>
			<h1>ajbxkjbasxbasl</h1>
		</div>
	);
}

export default App;
