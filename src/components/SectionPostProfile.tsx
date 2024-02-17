import { useEffect, useState } from 'react';

import PostService from '../services/post';

import PostSoloImage from './PostSoloImage';

import type { IPostSoloImage } from '../types/post';
import type { IEntityID } from '../types/entity';

interface Props {
	userId: IEntityID;
	openModal: (postId: IEntityID) => void;
}
export default function SectionPostProfile({ userId, openModal }: Props) {
	const [data, setData] = useState<undefined | IPostSoloImage[]>(undefined);

	useEffect(() => {
		const postService = new PostService();

		(async () => {
			setData(await postService.getProfile(userId));
		})();
	}, [userId]);

	return (
		<section className='grid gap-1 grid-cols-3 -mx-px md:-mx-3'>
			{data !== undefined &&
				data.map((post) => (
					<div key={post.id} className='p-px md:px-3'>
						<PostSoloImage data={post} onClick={() => openModal(post.id)} />
					</div>
				))}
		</section>
	);
}
