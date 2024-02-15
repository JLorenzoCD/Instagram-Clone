import { useEffect, useState } from 'react';

import UserServices from '../services/user';
import PostService from '../services/post';

import Footer from './../components/Footer';
import Post from './../components/Post';
import Stories from './../components/Stories';
import Suggestions from './../components/Suggestions';

import type { IPostHome } from '../types/post';

function Home() {
	const [data, setData] = useState<undefined | ICurrentUser>(undefined);

	useEffect(() => {
		(async () => {
			const userService = new UserServices();
			setData(await userService.getCurrentUserData());
		})();
	}, []);

	if (data === undefined) return null;

	const userService = new UserServices();

	return (
		<>
			<div className='xl:grid xl:grid-cols-6'>
				<div className='xl:col-span-4'>
					<Stories />

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
								<a
									className='text-xs text-sky-500 font-bold cursor-pointer'
									onClick={async () => await userService.logOut()}
								>
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

function SectionPostHome() {
	const [data, setData] = useState<undefined | IPostHome[]>(undefined);

	useEffect(() => {
		(async () => {
			const postService = new PostService();

			setData(await postService.getHome());
		})();
	}, []);

	return (
		<section className='flex justify-center'>
			<div className='w-full px-2'>
				{data !== undefined && (
					<>
						{data.map((postData) => (
							<Post {...postData} key={postData.post.id} />
						))}
					</>
				)}
			</div>
		</section>
	);
}

type ICurrentUser = {
	image: string;
	username: string;
	name: string;
};
