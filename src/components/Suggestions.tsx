import { useQuery } from '@tanstack/react-query';
import { useUserStore } from '@/store/user';

import UserController from '@/controllers/user';

import Spinner from './Spinner';

export default function Suggestions() {
	const currentUserId = useUserStore((state) => state.currentUser!.id);

	const { data: suggestionsData, isLoading } = useQuery({
		queryFn: () => {
			const userController = new UserController();
			return userController.getSuggestions(currentUserId);
		},
		queryKey: ['suggestionsData', currentUserId],
	});

	if (isLoading)
		return (
			<section className='flex justify-center my-20'>
				<Spinner />
			</section>
		);

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
