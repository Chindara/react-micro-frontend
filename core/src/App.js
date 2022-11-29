import React, { Suspense } from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

// const TheLayout = React.lazy(() => import('./layouts/TheLayout'));
import TheLayout from './layouts/TheLayout';

function App() {
	return (
		<Router>
			<Suspense>
				<Routes>
					<Route path='*' element={<TheLayout />} />
				</Routes>
			</Suspense>
		</Router>
	);
}

ReactDOM.render(<App />, document.getElementById('app'));
// export default App;
