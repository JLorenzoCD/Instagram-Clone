import { BrowserRouter, Route, Routes } from 'react-router-dom';

import Menu from './components/Menu';

import Home from './pages/Home';
import Profile from './pages/Profile';

function App() {
	return (
		<BrowserRouter>
			<div className='bg-zinc-50 sm:grid sm:grid-cols-[72px_1fr] lg:grid-cols-[300px_1fr]'>
				<div className='border-r-2'>
					<Menu />
				</div>
				<main>
					<Routes>
						<Route path='/' element={<Home />} />
						<Route path='/profile' element={<Profile />} />
					</Routes>
				</main>
			</div>
		</BrowserRouter>
	);
}

export default App;
