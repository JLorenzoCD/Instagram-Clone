import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

import PostService from '@/services/post';

import Post from '@/components/Post';

import type { IPostFewInfo } from '@/types/post';
import type { IEntityID } from '@/types/entity';

function ShowPost() {
	const { postID } = useParams();
	const [data, setData] = useState<undefined | IPostFewInfo[]>(undefined);

	useEffect(() => {
		const postService = new PostService();

		(async () => {
			setData(await postService.getInfo(postID as IEntityID));
		})();
	}, [postID]);

	if (data === undefined) return null;

	return (
		<section className='py-4 px-2'>
			{data !== undefined && data.map((post) => <Post key={post.post.id} data={post} />)}
		</section>
	);
}

export default ShowPost;
