import { useUserStore } from '@/store/user';
import { useScreenSize } from '@/hooks/useScreenSize';

import Suggestions from '@/components/Suggestions';
import SectionStories from '@/components/SectionStories';
import SectionPostHome from '@/components/SectionPostHome';
import Footer from '@/components/Footer';

function Home() {
	const currentUser = useUserStore((state) => state.currentUser!);
	const logout = useUserStore((state) => state.logout);

	const { width } = useScreenSize(); // Avoiding unnecessary data requests

	return (
		<>
			<div className='xl:grid xl:grid-cols-6'>
				<div className='xl:col-span-4'>
					<SectionStories />

					<SectionPostHome />
				</div>

				{1280 <= width && (
					<aside className='hidden xl:block xl:col-span-2'>
						<div className='fixed p-5 w-80'>
							<div className='flex flex-row'>
								<a href='#'>
									<img className='rounded-full' src={currentUser.image} width='100' />
								</a>
								<div className='w-72 pl-2 m-auto'>
									<div className='text-sm font-medium'>
										<a href='#'>{currentUser.username}</a>
									</div>
									<div className='text-gray-500 text-sm leading-4'>{currentUser.name}</div>
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
				)}
			</div>
		</>
	);
}

export default Home;
