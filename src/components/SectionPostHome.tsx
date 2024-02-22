import { useEffect, useState } from 'react';

import { useUserStore } from '@/store/user';

import PostService from '@/services/post';

import Post from './Post';

import type { IPostHome } from '@/types/post';

export default function SectionPostHome() {
	const [data, setData] = useState<undefined | IPostHome[]>(undefined);

	const currentUserId = useUserStore((state) => state.currentUser!.id);

	useEffect(() => {
		(async () => {
			const postService = new PostService();

			setData(await postService.getHome(currentUserId));
		})();
	}, [currentUserId]);

	return (
		<section className='flex justify-center'>
			<div className='w-full px-2'>
				{data !== undefined && (
					<>
						{data.map((postData) => (
							<Post data={postData} key={postData.post.id} />
						))}
					</>
				)}
			</div>
		</section>
	);
}
