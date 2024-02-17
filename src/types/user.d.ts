import type { IEntityID } from './entity';

export type IUserSuggestion = {
	id: IEntityID;
	image: string;
	username: string;
};

export type ICurrentUser = {
	image: string;
	username: string;
	name: string;
};

export type ICurrentUserProfile = {
	id: IEntityID;
	profileImage: string;
	username: string;
	numberPost: number;
	numberFollowers: number;
	numberFollowing: number;
	description: string;
};
