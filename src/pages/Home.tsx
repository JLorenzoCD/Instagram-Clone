import { useEffect, useState } from 'react';

import { useUserStore } from '@/store/user';

import UserServices from '@/services/user';

import Suggestions from '@/components/Suggestions';
import SectionStories from '@/components/SectionStories';
import SectionPostHome from '@/components/SectionPostHome';
import Footer from '@/components/Footer';

import type { ICurrentUser } from '@/types/user';

function Home() {
	const [data, setData] = useState<undefined | ICurrentUser>(undefined);

	const currentUserId = useUserStore((state) => state.currentUser!.id);
	const logout = useUserStore((state) => state.logout);

	useEffect(() => {
		(async () => {
			const userService = new UserServices();
			setData(await userService.getCurrentUserData(currentUserId));
		})();
	}, [currentUserId]);

	if (data === undefined) return null;

	return (
		<>
			<div className='xl:grid xl:grid-cols-6'>
				<div className='xl:col-span-4'>
					<SectionStories />

					<SectionPostHome />
				</div>

				<aside className='hidden xl:block xl:col-span-2'>
					<div className='fixed p-5 w-80'>
						<div className='flex flex-row'>
							<a href='#'>
								<img className='rounded-full' src={data.image} width='100' />
							</a>
							<div className='w-72 pl-2 m-auto'>
								<div className='text-sm font-medium'>
									<a href='#'>{data.username}</a>
								</div>
								<div className='text-gray-500 text-sm leading-4'>{data.name}</div>
							</div>
							<div className='w-32 text-right m-auto'>
								<a className='text-xs text-sky-500 font-bold cursor-pointer' onClick={logout}>
									Sign Out
								</a>
							</div>
						</div>

						<Suggestions />
						<Footer />
					</div>
				</aside>
			</div>
		</>
	);
}

export default Home;
