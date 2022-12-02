import React from 'react';
import ReactDOM from 'react-dom';

import IndexController from './components/controllers/IndexController';

import './index.css';

const App = () => (
	<div className='container'>
		<IndexController />
	</div>
);
ReactDOM.render(<App />, document.getElementById('app'));
