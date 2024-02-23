import { create } from 'zustand';

import type { ICurrentUser } from '@/types/user';

import { currentUser } from '@/data/user';

interface IUserState {
	currentUser?: ICurrentUser;
	login: () => void;
	logout: () => void;
}
export const useUserStore = create<IUserState>((set) => ({
	// Initial State
	currentUser: undefined,

	// Actions
	login: () =>
		set(() => ({
			currentUser: currentUser,
		})),
	logout: () =>
		set(() => ({
			currentUser: undefined,
		})),
}));
