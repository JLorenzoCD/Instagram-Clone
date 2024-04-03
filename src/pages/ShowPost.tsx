import { useQuery } from '@tanstack/react-query';
import { useParams } from 'react-router-dom';

import PostController from '@/controllers/post';

import Post from '@/components/Post';
import Spinner from '@/components/Spinner';

import type { IEntityID } from '@/types/entity';

function ShowPost() {
	const { postID } = useParams();

	const { data, isLoading } = useQuery({
		queryFn: () => {
			const postController = new PostController();
			return postController.getInfo(postID as IEntityID);
		},
		queryKey: ['postShowMobile', postID],
	});

	if (isLoading)
		return (
			<section className='flex justify-center my-10'>
				<Spinner />
			</section>
		);

	return (
		<section className='py-4 px-2'>
			{data !== undefined && data.map((post) => <Post key={post.post.id} data={post} />)}
		</section>
	);
}

export default ShowPost;
