import Post from './components/Post';
import Stories from './components/Stories';

import { postsData } from './data/post';

function App() {
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
