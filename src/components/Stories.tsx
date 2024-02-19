import { useEffect, useRef, useState } from 'react';

import { useUserStore } from '../store/user';

import StoryService from '../services/story';

import SkeletonProfile from './skeleton/Profile';

import type { IStory } from '../types/story';

function Stories() {
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
		<div className='overflow-hidden max-w-xl mx-auto p-3 mb-5 relative'>
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
		</div>
	);
}

export default Stories;

interface StorieProps {
	data: IStory;
}
export function Storie({ data: { username } }: StorieProps) {
	return (
		<li className='flex flex-col items-center space-y-1'>
			<div className='bg-gradient-to-tr from-yellow-400 to-purple-600 p-1 rounded-full'>
				<a href='#' className='block bg-white p-1 rounded-full transform transition hover:-rotate-6 size-12'>
					{/* <img className='w-24 h-24 rounded-full' src={profile} alt={`instagram-profile-${username}`} /> */}
					<SkeletonProfile className='size-full' />
				</a>
			</div>

			<button className='text-xs'>{username}</button>
		</li>
	);
}

function useScrollX() {
	const storiesRef = useRef<HTMLUListElement | null>(null);

	const [showLeft, setShowLeft] = useState(false);
	const [showRight, setShowRight] = useState(true);

	const onScroll = () => {
		if (storiesRef.current === null) return;

		if (0 < storiesRef.current.scrollLeft) {
			setShowLeft(true);
		} else {
			setShowLeft(false);
		}

		if (storiesRef.current.scrollLeft === storiesRef.current.scrollWidth - storiesRef.current.clientWidth) {
			setShowRight(false);
		} else {
			setShowRight(true);
		}
	};

	const scrollLeft = () => {
		if (storiesRef.current == null) return;

		storiesRef.current.scrollLeft = storiesRef.current.scrollLeft - storiesRef.current.clientWidth;
	};

	const scrollRight = () => {
		if (storiesRef.current == null) return;

		storiesRef.current.scrollLeft = storiesRef.current.scrollLeft + storiesRef.current.clientWidth;
	};

	return { storiesRef, onScroll, scrollLeft, scrollRight, showLeft, showRight };
}
