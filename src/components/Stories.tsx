import SkeletonProfile from './skeleton/Profile';

import { myStorie, storiesData } from '../data/stories';

function Stories() {
	return (
		<div className='max-w-2xl mx-auto p-3 mb-5'>
			<ul className='flex space-x-6'>
				<Storie {...myStorie} />
				{!!storiesData && storiesData.length !== 0 && storiesData.map((storie) => <Storie {...storie} />)}
			</ul>
		</div>
	);
}

export default Stories;

interface StorieProps {
	profile: string;
	username: string;
	isMe?: boolean;
}
export function Storie({ username, isMe = false }: StorieProps) {
	return (
		<li className='flex flex-col items-center space-y-1'>
			<div className={`${isMe ? 'relative' : ''} bg-gradient-to-tr from-yellow-400 to-purple-600 p-1 rounded-full`}>
				<a href='#' className='block bg-white p-1 rounded-full transform transition hover:-rotate-6 size-12'>
					{/* <img className='w-24 h-24 rounded-full' src={profile} alt={`instagram-profile-${username}`} /> */}
					<SkeletonProfile />
				</a>

				{!!isMe && (
					<button className='absolute bg-blue-500 text-white text-xl font-medium size-6 rounded-full -bottom-1 right-0 border-2 border-white font-mono hover:bg-blue-700 focus:outline-none leading-6'>
						+
					</button>
				)}
			</div>

			<button className='text-xs'>{username}</button>
		</li>
	);
}
