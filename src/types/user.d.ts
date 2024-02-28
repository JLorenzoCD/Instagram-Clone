import type { IEntityID } from './entity';

export type IUserSuggestion = {
	id: IEntityID;
	image: string;
	username: string;
};

export type ICurrentUser = {
	id: IEntityID;
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

export type IUserLogin = {
	username: string;
	password: string;
};

export type IUserSingup = {
	email: string;
	username: string;
	password: string;
	passwordConfirm: string;
};
