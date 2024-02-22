import { useEffect, useState } from 'react';

import { useModalPost } from '@/hooks/useModalPost';

import { useUserStore } from '@/store/user';

import UserServices from '@/services/user';

import Posts from '@/components/icons/Posts';
import Reels from '@/components/icons/Reels';
import Tagged from '@/components/icons/Tagged';

import SectionPostProfile from '@/components/SectionPostProfile';

import type { ICurrentUserProfile } from '@/types/user';

function Profile() {
	const [data, setData] = useState<undefined | ICurrentUserProfile>(undefined);
	const { openModal } = useModalPost();

	const currentUserId = useUserStore((state) => state.currentUser!.id);

	useEffect(() => {
		const userService = new UserServices();

		(async () => {
			setData(await userService.getProfileData(currentUserId));
		})();
	}, [currentUserId]);

	if (data === undefined) return null;

	return (
		<>
			<div className='lg:w-10/12 lg:mx-auto mb-8'>
				<header className='flex flex-wrap items-center p-4 md:py-8'>
					<div className='md:w-3/12 md:ml-16'>
						{/* profile image */}
						<img
							className='w-20 h-20 md:w-40 md:h-40 object-cover rounded-full border-2 border-pink-600 p-1'
							src={data.profileImage}
							alt={`${data.username}-profile-image`}
						/>
					</div>
					{/* profile meta */}
					<div className='w-8/12 md:w-7/12 ml-4'>
						<div className='md:flex md:flex-wrap md:items-center mb-4'>
							<h2 className='text-3xl inline-block font-light sm:mr-5 mb-2 sm:mb-0'>{data.username}</h2>
							{/* follow button */}
							<a
								href='#'
								className='bg-blue-500 px-2 py-1 text-white font-semibold text-sm rounded block text-center sm:inline-block'
							>
								Follow
							</a>
						</div>
						{/* post, following, followers list for medium screens */}
						<ul className='hidden md:flex space-x-8 mb-4'>
							<li>
								<span className='font-semibold'>{data.numberPost} </span>
								posts
							</li>
							<li>
								<span className='font-semibold'>{data.numberFollowers} </span>
								followers
							</li>
							<li>
								<span className='font-semibold'>{data.numberFollowing} </span>
								following
							</li>
						</ul>
						{/* user meta form medium screens */}
						<div className='hidden md:block'>
							{data.description.split('\n').map((paragraph) => (
								<p key={`1-${paragraph}`}>{paragraph}</p>
							))}
						</div>
					</div>
					{/* user meta form small screens */}
					<div className='md:hidden text-sm my-2'>
						{data.description.split('\n').map((paragraph) => (
							<p key={`2-${paragraph}`}>{paragraph}</p>
						))}
					</div>
				</header>
				{/* posts */}
				<div className='px-px md:px-3'>
					{/* user following for mobile only */}
					<ul className='flex md:hidden justify-around space-x-8 border-t text-center p-2 text-gray-600 leading-snug text-sm'>
						<li>
							<span className='font-semibold text-gray-800 block'>{data.numberPost} </span>
							posts
						</li>
						<li>
							<span className='font-semibold text-gray-800 block'>{data.numberFollowers} </span>
							followers
						</li>
						<li>
							<span className='font-semibold text-gray-800 block'>{data.numberFollowing} </span>
							following
						</li>
					</ul>
					{/* insta freatures */}
					<ul className='flex items-center justify-around md:justify-center space-x-12 uppercase tracking-widest font-semibold text-xs text-gray-600 border-t'>
						{/* posts tab is active */}
						<li className='md:border-t md:border-gray-700 md:-mt-px md:text-gray-700 flex-1  flex justify-center'>
							<a className='inline-block p-3' href='#'>
								<Posts className='size-6 m-auto' />
								<span className='hidden md:inline'>post</span>
							</a>
						</li>
						<li className='flex-1 flex justify-center'>
							<a className='inline-block p-3' href='#'>
								<Reels className='size-6 m-auto' />
								<span className='hidden md:inline'>reels</span>
							</a>
						</li>
						<li className='flex-1 flex justify-center'>
							<a className='inline-block p-3' href='#'>
								<Tagged className='size-6 m-auto' />
								<span className='hidden md:inline'>tagged</span>
							</a>
						</li>
					</ul>

					{data !== undefined && <SectionPostProfile userId={data.id} openModal={openModal} />}
				</div>
			</div>
		</>
	);
}

export default Profile;
