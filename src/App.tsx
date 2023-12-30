import Post from './components/Post';
import Stories from './components/Stories';

function App() {
	const postsData = [
		{
			post: {
				user: {
					name: 'Alice',
					picture: 'https://example.com/alice.jpg',
				},
				urlImage: 'https://example.com/post1.jpg',
				likes: 15,
				numberComments: 5,
				time: '2023-12-26T10:30:00Z',
				description: '¡Increíble día en la playa! ☀️🌊',
			},
			me: {
				followed: true,
				liked: false,
				saved: false,
				comment: '¡Que foto tan genial!',
			},
		},
		{
			post: {
				user: {
					name: 'Bob',
					picture: 'https://example.com/bob.jpg',
				},
				urlImage: 'https://example.com/post2.jpg',
				likes: 30,
				numberComments: 12,
				time: '2023-12-23T18:45:00Z',
				description: 'Explorando nuevas aventuras ⛰️🌲',
				mainComment: {
					comment: 'Me encanta esta vista 😍',
					username: 'Eva',
				},
			},
			me: {
				followed: false,
				liked: true,
				saved: false,
			},
		},
		{
			post: {
				user: {
					name: 'Eva',
					picture: 'https://example.com/eva.jpg',
				},
				urlImage: 'https://example.com/post3.jpg',
				likes: 20,
				numberComments: 8,
				time: '2023-12-22T15:20:00Z',
				description: 'Disfrutando de la naturaleza 🌿✨',
				mainComment: {
					comment: 'Hermoso paisaje 🏞️',
					username: 'Alice',
				},
			},
			me: {
				followed: true,
				liked: true,
				comment: '¡Fantástico!',
				saved: true,
			},
		},
	];

	return (
		<>
			<main className='bg-gray-200'>
				<Stories />
				<section className='flex justify-center'>
					<div>
						{!!postsData && (
							<>
								{postsData.map((post) => (
									<Post {...post} />
								))}
							</>
						)}
					</div>
				</section>
			</main>
		</>
	);
}

export default App;
