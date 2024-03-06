import SkeletonProfile from './skeleton/Profile';

import type { IStory } from '@/types/story';

interface Props {
	data: IStory;
}
export default function Storie({ data: { username } }: Props) {
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
