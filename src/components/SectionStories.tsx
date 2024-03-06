import { useEffect, useState } from 'react';

import { useUserStore } from '@/store/user';
import { useScrollX } from '@/hooks/useScrollX';

import StoryService from '@/services/story';

import Storie from './Storie';

import type { IStory } from '@/types/story';

export default function SectionStories() {
	const { onScroll, scrollLeft, scrollRight, storiesRef, showLeft, showRight } = useScrollX();

	const [storiesData, setStoriesData] = useState<undefined | { user: IStory; stories: IStory[] }>(undefined);

	const currentUserId = useUserStore((state) => state.currentUser!.id);

	useEffect(() => {
		const storyServices = new StoryService();

		(async () => {
			setStoriesData({
				user: await storyServices.getUserStories(currentUserId),
				stories: await storyServices.getAll(currentUserId),
			});
		})();
	}, [currentUserId]);

	return (
		<section className='overflow-hidden max-w-xl mx-auto p-3 mb-5 relative'>
			<ul className='flex space-x-2 overflow-x-scroll scroll-smooth no-scrollbar' onScroll={onScroll} ref={storiesRef}>
				{!!storiesData && !!storiesData.user && <Storie data={storiesData.user} />}

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
