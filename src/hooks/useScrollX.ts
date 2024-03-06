import { useRef, useState } from 'react';

export function useScrollX() {
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
