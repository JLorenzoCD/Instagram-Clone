import { useQuery } from '@tanstack/react-query';
import { useUserStore } from '@/store/user';

import PostService from '@/services/post';

import Post from './Post';
import Spinner from './Spinner';

export default function SectionPostHome() {
	const currentUserId = useUserStore((state) => state.currentUser!.id);

	const { data, isLoading } = useQuery({
		queryFn: () => {
			const postService = new PostService();
			return postService.getHome(currentUserId);
		},
		queryKey: ['postHomeData', currentUserId],
	});

	if (isLoading)
		return (
			<section className='flex justify-center'>
				<Spinner />
			</section>
		);

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
