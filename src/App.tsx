import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import ModalPostProvider from './context/ModalPostProvider';

import Layout from './Layout';

import Home from './pages/Home';
import Profile from './pages/Profile';
import Explore from './pages/Explore';
import ShowPost from './pages/ShowPost';

import Session from './pages/Session';
import Login from './pages/Session/Login';
import Singup from './pages/Session/Singup';

import PrivateRoute from './pages/RoutesType/PrivateRoute';
import GuestRoute from './pages/RoutesType/GuestRoute';

const queryClient = new QueryClient();

function App() {
	return (
		<QueryClientProvider client={queryClient}>
			<BrowserRouter basename='/Instagram-Clone/'>
				<Routes>
					<Route
						path='/'
						element={
							<PrivateRoute>
								<Layout>
									<Home />
								</Layout>
							</PrivateRoute>
						}
					/>
					<Route
						path='/profile'
						element={
							<PrivateRoute>
								<Layout>
									<ModalPostProvider>
										<Profile />
									</ModalPostProvider>
								</Layout>
							</PrivateRoute>
						}
					/>
					<Route
						path='/explore'
						element={
							<PrivateRoute>
								<Layout>
									<ModalPostProvider>
										<Explore />
									</ModalPostProvider>
								</Layout>
							</PrivateRoute>
						}
					/>

					<Route
						path='/post/:postID'
						element={
							<PrivateRoute>
								<Layout>
									<ModalPostProvider>
										<ShowPost />
									</ModalPostProvider>
								</Layout>
							</PrivateRoute>
						}
					/>

					<Route
						path='/user'
						element={
							<GuestRoute>
								<Session />
							</GuestRoute>
						}
					>
						<Route index element={<Login />} />
						<Route path='login' element={<Login />} />
						<Route path='singup' element={<Singup />} />
					</Route>
				</Routes>
			</BrowserRouter>
		</QueryClientProvider>
	);
}

export default App;
