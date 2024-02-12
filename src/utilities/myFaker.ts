import { randomNumber } from './randomNumber';

export function generatePostImage(n: number) {
	return new Array(n).fill(0).map(() => ({
		id: crypto.randomUUID(),
		image: 'https://picsum.photos/275/385',
		likes: randomNumber(5000),
		comments: randomNumber(500),
		time: '2023-12-26T10:30:00Z',
	}));
}
