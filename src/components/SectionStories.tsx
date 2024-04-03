import { useQuery } from '@tanstack/react-query';

import { useUserStore } from '@/store/user';
import { useScrollX } from '@/hooks/useScrollX';

import StoryController from '@/controllers/story';

import Storie from './Storie';
import Spinner from './Spinner';
import Arrow from './icons/Arrow';

export default function SectionStories() {
	const { onScroll, scrollLeft, scrollRight, storiesRef, showLeft, showRight } = useScrollX();

	const currentUserId = useUserStore((state) => state.currentUser!.id);

	const { data: storiesData, isLoading } = useQuery({
		queryFn: async () => {
			const storyController = new StoryController();

			return {
				user: await storyController.getUserStories(currentUserId),
				stories: await storyController.getAll(currentUserId),
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
					className='align-top cursor-pointer filter drop-shadow-lg absolute m-auto bottom-1/2 translate-y-1/4 left-3 '
				>
					<Arrow fill='white' className='size-6' />
				</button>
			)}
			{showRight && (
				<button
					onClick={scrollRight}
					className='align-top cursor-pointer filter drop-shadow-lg absolute m-auto bottom-1/2 translate-y-1/4 right-3'
				>
					<Arrow fill='white' className='rotate-180 size-6' />
				</button>
			)}
		</section>
	);
}
