import type { EntityID } from './entity';

export type IPost = {
	id: EntityID;

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

export type IPostHome = {
	post: IPost;
	me: {
		followed: boolean;
		liked: boolean;
		saved: boolean;
		comment?: string;
	};
};

export type IPostSoloImage = {
	id: EntityID;
	image: string;
	likes: number;
	comments: number;
	time: string;
};
