import type { ICurrentUser, ICurrentUserProfile, IUserSuggestion } from '../types/user';

export const userSuggestions: IUserSuggestion[] = [
	{
		id: '41651',
		image: 'https://picsum.photos/200',
		username: 'emily',
	},
	{
		id: '54658',
		image: 'https://picsum.photos/200',
		username: 'michael',
	},
	{
		id: '268768',
		image: 'https://picsum.photos/200',
		username: 'natalie',
	},
];

export const currentUserProfile: ICurrentUserProfile = {
	id: 1,
	profileImage:
		'https://images.unsplash.com/photo-1502791451862-7bd8c1df43a7?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=700&q=80',
	username: 'me',
	numberPost: 50,
	numberFollowers: 123,
	numberFollowing: 157,
	description: 'Travel, Nature and Music\nLorem ipsum dolor sit amet consectetur',
};

export const currentUser: ICurrentUser = {
	id: 1,
	image: 'https://picsum.photos/200',
	username: 'me.current_user',
	name: 'Me 👦',
};
