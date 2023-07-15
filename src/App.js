import React from 'react';
import './App.css';
import Navbar from './components/Navbar';
import { BrowserRouter as Router, Routes, Route }
	from 'react-router-dom';
import Home from './pages';
import Mentalhealth from './pages/mentalhealth';
import Physicallyfit from './pages/fit';
import Alert from './pages/alert';
import Checkup from './pages/check-ups';

function App() {
	return (
		<Router>
			<Navbar />
			<Routes>
				<Route exact path='/'  element={<Home />} />
				<Route path='/mentalhealth' element={<Mentalhealth />} />
				<Route path='/fit' element={<Physicallyfit />} />
				<Route path='/alert' element={<Alert />} />
				<Route path='/check-ups' element={<Checkup />} />
			</Routes>
		</Router>
	);
}

export default App;
