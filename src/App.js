import React from 'react';
import { Route, Routes } from 'react-router';
import Login from './Pages/Login';
import Signup from './Pages/Signup';
import Home from './Pages/Home';
import Profile from './Pages/Profile';
import 'react-photo-view/dist/react-photo-view.css';

import './App.css';
import Layout from './Pages/Layout/Layout';
function App() {
	return (
		<div>
			{/* <Navbar /> */}
			<Routes>
				<Route path='/home' element={<Home />} />
				<Route path='/*' element={<Layout />} />
				<Route path='/profile/:id' element={<Profile />} />
				<Route path='/login' element={<Login />} />
				<Route path='/signup' element={<Signup />} />
			</Routes>
		</div>
	);
}

export default App;
