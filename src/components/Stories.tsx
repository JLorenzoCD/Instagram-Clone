import SkeletonProfile from './skeleton/Profile';

import { userStorie, storiesData } from '../data/stories';

function Stories() {
	const userPostedAStory = false;

	return (
		<div className='max-w-full overflow-hidden md:max-w-2xl mx-auto p-3 mb-5'>
			<ul className='flex space-x-6'>
				{userPostedAStory && <Storie {...userStorie} />}

				{!!storiesData &&
					storiesData.length !== 0 &&
					storiesData.map((storie) => <Storie {...storie} key={storie.id} />)}
			</ul>
		</div>
	);
}

export default Stories;

interface StorieProps {
	id: number;
	profile: string;
	username: string;
}
export function Storie({ username }: StorieProps) {
	return (
		<li className='flex flex-col items-center space-y-1'>
			<div className='bg-gradient-to-tr from-yellow-400 to-purple-600 p-1 rounded-full'>
				<a href='#' className='block bg-white p-1 rounded-full transform transition hover:-rotate-6 size-12'>
					{/* <img className='w-24 h-24 rounded-full' src={profile} alt={`instagram-profile-${username}`} /> */}
					<SkeletonProfile className='size-full' />
				</a>
			</div>

			<button className='text-xs'>{username}</button>
		</li>
	);
}
