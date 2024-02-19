import { create } from 'zustand';

import type { ICurrentUser } from '../types/user';

import { currentUser } from '../data/user';

interface IUserState {
	currentUser?: ICurrentUser;
	login: (currentUserData: ICurrentUser) => void;
	logout: () => void;
}
export const useUserStore = create<IUserState>((set) => ({
	// Initial State
	currentUser: currentUser,

	// Actions
	login: (currentUserData: ICurrentUser) =>
		set(() => ({
			currentUser: currentUserData,
		})),
	logout: () =>
		set(() => ({
			currentUser: undefined,
		})),
}));
