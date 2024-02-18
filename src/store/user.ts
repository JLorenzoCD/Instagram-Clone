import { create } from 'zustand';

import type { ICurrentUser } from '../types/user';

import { currentUser } from '../data/user';

interface IUserState {
	currentUser?: ICurrentUser;
}
export const useUserStore = create<IUserState>(() => ({
	currentUser: currentUser,
}));
