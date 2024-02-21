import { BrowserRouter, Route, Routes } from 'react-router-dom';

import ModalPostProvider from './context/ModalPostProvider';

import Layout from './Layout';

import Home from './pages/Home';
import Profile from './pages/Profile';
import Explore from './pages/Explore';
import Login from './pages/Login';

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

				<Route path='/login' element={<Login />} />
			</Routes>
		</BrowserRouter>
	);
}

export default App;
