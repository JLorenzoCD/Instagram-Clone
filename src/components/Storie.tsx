import SkeletonProfile from './skeleton/Profile';

import type { IStory } from '@/types/story';

interface Props {
	data: IStory;
	isCurrentUser?: boolean;
}
export default function Storie({ data: { username }, isCurrentUser }: Props) {
	return (
		<li className='flex flex-col items-center space-y-1'>
			<div className='relative bg-gradient-to-tr from-yellow-400 to-purple-600 p-1 rounded-full'>
				<a href='#' className='block bg-white p-1 rounded-full transform transition hover:-rotate-6 size-12'>
					{/* <img className='w-24 h-24 rounded-full' src={profile} alt={`instagram-profile-${username}`} /> */}
					<SkeletonProfile className='size-full' />
				</a>

				{isCurrentUser && (
					<button className='absolute bg-blue-500 text-white text-xl font-medium size-7 rounded-full bottom-0 right-0 border-4 border-white flex justify-center items-center hover:bg-blue-700 focus:outline-none'>
						+
					</button>
				)}
			</div>

			<button className='text-xs'>{username}</button>
		</li>
	);
}
