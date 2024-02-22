import { useEffect, useState } from 'react';

import { useUserStore } from '@/store/user';

import UserServices from '@/services/user';

import type { IUserSuggestion } from '@/types/user';

export default function Suggestions() {
	const [suggestionsData, setModalPostData] = useState<undefined | IUserSuggestion[]>(undefined);

	const currentUserId = useUserStore((state) => state.currentUser!.id);

	useEffect(() => {
		const userServices = new UserServices();

		(async () => {
			setModalPostData(await userServices.getSuggestions(currentUserId));
		})();
	}, [currentUserId]);

	return (
		<>
			<div className='flex flex-row pt-5'>
				<div className='w-72 font-bold text-gray-500 text-sm'>Suggestions For You</div>
				<div className='w-32 text-sm text-right'>
					<a href='#' className='text-black-400 font-bold text-xs'>
						See All
					</a>
				</div>
			</div>

			{suggestionsData !== undefined &&
				suggestionsData.map((user) => {
					return (
						<div key={user.id} className='flex py-2'>
							<div className='flex items-center'>
								<a className='inline-block align-top' href='#'>
									<img className='rounded-full' src={user.image} width='35' />
								</a>
								<div className='inline-block ml-2'>
									<div className='text-sm font-medium'>{user.username}</div>
									<div className='text-gray-500 text-xs'>Suggested for you</div>
								</div>
							</div>
							<div className='flex-1 items-center flex justify-end '>
								<span className='text-blue-500 text-xs'>Folow</span>
							</div>
						</div>
					);
				})}
		</>
	);
}
