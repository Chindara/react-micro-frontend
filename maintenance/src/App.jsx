import React from 'react';
import ReactDOM from 'react-dom';
import { ToastContainer } from 'react-toastify';

import SampleList from './components/sample-component/SampleList';

import './index.css';

const App = () => (
	<div className='container'>
		<SampleList />
		<ToastContainer
			autoClose={5000}
			hideProgressBar={false}
			newestOnTop
			closeOnClick
			rtl={false}
			pauseOnFocusLoss
			draggable
			pauseOnHover
			theme='colored'
			style={{ fontSize: '14px' }}
		/>
	</div>
);
ReactDOM.render(<App />, document.getElementById('app'));
