import { useQuery } from '@tanstack/react-query';

import { useUserStore } from '@/store/user';
import { useScrollX } from '@/hooks/useScrollX';

import StoryService from '@/services/story';

import Storie from './Storie';
import Spinner from './Spinner';

export default function SectionStories() {
	const { onScroll, scrollLeft, scrollRight, storiesRef, showLeft, showRight } = useScrollX();

	const currentUserId = useUserStore((state) => state.currentUser!.id);

	const { data: storiesData, isLoading } = useQuery({
		queryFn: async () => {
			const storyServices = new StoryService();

			return {
				user: await storyServices.getUserStories(currentUserId),
				stories: await storyServices.getAll(currentUserId),
			};
		},
		queryKey: ['storiesData', currentUserId],
	});

	if (isLoading)
		return (
			<section className='flex justify-center my-10'>
				<Spinner />
			</section>
		);

	return (
		<section className='overflow-hidden max-w-xl mx-auto p-3 mb-5 relative min-h-[100px]'>
			<ul className='flex space-x-2 overflow-x-scroll scroll-smooth no-scrollbar' onScroll={onScroll} ref={storiesRef}>
				{!!storiesData && !!storiesData.user && <Storie data={storiesData.user} isCurrentUser />}

				{!!storiesData &&
					!!storiesData.stories &&
					storiesData.stories.length !== 0 &&
					storiesData.stories.map((storie) => <Storie data={storie} key={storie.id} />)}
			</ul>

			{showLeft && (
				<button
					onClick={scrollLeft}
					className='text-black align-top inline-block bg-white rounded-full size-6 cursor-pointer filter drop-shadow-lg absolute m-auto left-2 top-0 bottom-0 -translate-y-1/4'
				>
					〈
				</button>
			)}
			{showRight && (
				<button
					onClick={scrollRight}
					className='text-black align-top inline-block bg-white rounded-full size-6 cursor-pointer filter drop-shadow-lg absolute m-auto right-2 top-0 bottom-0 -translate-y-1/4'
				>
					〉
				</button>
			)}
		</section>
	);
}
