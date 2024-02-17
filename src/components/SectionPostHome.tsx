import { useEffect, useState } from 'react';

import PostService from '../services/post';

import Post from './Post';

import type { IPostHome } from '../types/post';

export default function SectionPostHome() {
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
