import React from 'react';

import { Routes, Route, NavLink } from 'react-router-dom';

import Home from './Page/Home/Home';
import Profile from './Page/Profile/Profile';

function AuthenticatedApp() {
	return (
		<>
			<header>
				<nav>
					<ul>
						<li>
							<NavLink to='/'>Home</NavLink>
						</li>
						<li>
							<NavLink to='/profile'>Profile</NavLink>
						</li>
					</ul>
				</nav>
			</header>

			<main>
				<Routes>
					<Route path='' element={<Home />} />
					<Route path='/profile' element={<Profile />} />
				</Routes>
			</main>

			<footer>footer</footer>
		</>
	);
}

export default AuthenticatedApp;
