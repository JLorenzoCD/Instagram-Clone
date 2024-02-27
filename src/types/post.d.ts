import type { IEntityID } from './entity';

export type IPost = {
	id: IEntityID;

	user: {
		name: string;
		picture: string;
	};

	time: string;
	urlImage: string;
	description: string;

	likes: number;
	numberComments: number;

	mainComment?: {
		comment: string;
		username: string;
	};
};

export type IPostToStore = Pick<IPost, 'urlImage' | 'description'>;
export type IPostToUpdate = Partial<Omit<IPost, 'id' | 'user'>>;

export type IPostFewInfo = {
	post: IPost;
	me: {
		followed: boolean;
		liked: boolean;
		saved: boolean;
		comment?: string;
	};
};

export type IPostSoloImage = {
	id: IEntityID;
	image: string;
	likes: number;
	comments: number;
	time: string;
};

export type IPostFullInfo = {
	user: {
		name: string;
		picture: string;
		follow: boolean;
	};
	post: {
		image: string;
		time: string;
		likes: number;
		liked: boolean;
		saved: boolean;
		description: string;
		comments: {
			id: number;
			time: string;
			username: string;
			comment: string;
		}[];
	};
};
