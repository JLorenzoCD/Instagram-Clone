import { useQuery } from '@tanstack/react-query';

import PostController from '@/controllers/post';

import PostSoloImage from './PostSoloImage';
import Spinner from './Spinner';

import type { IEntityID } from '@/types/entity';

interface Props {
	userId: IEntityID;
	openModal: (postId: IEntityID) => void;
}
export default function SectionPostProfile({ userId, openModal }: Props) {
	const { data, isLoading } = useQuery({
		queryFn: () => {
			const postController = new PostController();
			return postController.getProfile(userId);
		},
		queryKey: ['postProfileData', userId],
	});

	if (isLoading)
		return (
			<section className='flex justify-center'>
				<Spinner />
			</section>
		);

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
