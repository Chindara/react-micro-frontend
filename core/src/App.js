import React, { Suspense } from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';

// const TheLayout = React.lazy(() => import('./layouts/TheLayout'));
import TheLayout from './layouts/TheLayout';

function App() {
	return (
		<div>
			<Router>
				<Suspense>
					<Routes>
						<Route path='*' element={<TheLayout />} />
					</Routes>
				</Suspense>
			</Router>
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
}

ReactDOM.render(<App />, document.getElementById('app'));
// export default App;
