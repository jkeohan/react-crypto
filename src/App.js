import './App.css';
//Import route and our components
import { Route, Routes } from 'react-router-dom';
import Currencies from './pages/currencies';
import Main from './pages/main';
import Price from './pages/price';
import Nav from './components/nav';

function App() {
	// We will use the Route component to specify each route
	return (
		<div className='App'>
			<Nav />
			<Routes>
				<Route path='/' element={<Main />} />
				<Route path='/currencies' element={<Currencies />} />
				<Route path='/price/:symbol' element={<Price />} />
			</Routes>
		</div>
	);
}

export default App;
