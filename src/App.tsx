import { BrowserRouter, Route, Routes } from 'react-router-dom';

import ModalPostProvider from './context/ModalPostProvider';

import Layout from './Layout';

import Home from './pages/Home';
import Profile from './pages/Profile';
import Explore from './pages/Explore';

import Session from './pages/Session';
import Login from './pages/Session/Login';
import Singup from './pages/Session/Singup';

function App() {
	return (
		<BrowserRouter>
			<Routes>
				<Route
					path='/'
					element={
						<Layout>
							<Home />
						</Layout>
					}
				/>
				<Route
					path='/profile'
					element={
						<Layout>
							<ModalPostProvider>
								<Profile />
							</ModalPostProvider>
						</Layout>
					}
				/>
				<Route
					path='/explore'
					element={
						<Layout>
							<ModalPostProvider>
								<Explore />
							</ModalPostProvider>
						</Layout>
					}
				/>

				<Route path='/user' element={<Session />}>
					<Route index element={<Login />} />
					<Route path='login' element={<Login />} />
					<Route path='singup' element={<Singup />} />
				</Route>
			</Routes>
		</BrowserRouter>
	);
}

export default App;
