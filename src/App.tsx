import Footer from './components/Footer';
import Post from './components/Post';
import Stories from './components/Stories';
import Suggestions from './components/Suggestions';

import { postsData } from './data/post';

function App() {
	const currentUserData = {
		me: {
			image: 'https://picsum.photos/200',
			username: 'me.current_user',
			name: 'Me 👦',
		},
	};

	return (
		<div className='bg-zinc-50 grid grid-cols-8'>
			<header className='col-span-2'>Menu</header>
			<main className='col-span-4'>
				<Stories />
				<section className='flex justify-center'>
					<div>
						{!!postsData && (
							<>
								{postsData.map((postData) => (
									<Post {...postData} key={postData.post.id} />
								))}
							</>
						)}
					</div>
				</section>
			</main>
			<aside>
				<div className='fixed p-5 w-80'>
					<div className='flex flex-row'>
						<a href='#'>
							<img className='rounded-full' src={currentUserData.me.image} width='100' />
						</a>
						<div className='w-72 pl-2 m-auto'>
							<div className='text-sm font-medium'>
								<a href='#'>{currentUserData.me.username}</a>
							</div>
							<div className='text-gray-500 text-sm leading-4'>{currentUserData.me.name}</div>
						</div>
						<div className='w-32 text-right m-auto'>
							<a className='text-xs text-sky-500 font-bold cursor-pointer' onClick={() => console.log('Sing Out')}>
								Sign Out
							</a>
						</div>
					</div>

					<Suggestions />
					<Footer />
				</div>
			</aside>
		</div>
	);
}

export default App;
