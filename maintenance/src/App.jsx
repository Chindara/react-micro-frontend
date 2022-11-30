import React from 'react';
import ReactDOM from 'react-dom';

import SampleList from './components/sample-component/SampleList';

import './index.css';

const App = () => (
	<div className='container'>
		<SampleList />
	</div>
);
ReactDOM.render(<App />, document.getElementById('app'));
