import { create } from 'zustand';

import type { ICurrentUser, IUserLogin, IUserSingup } from '@/types/user';

import UserServices from '@/services/user';

interface IUserState {
	currentUser?: ICurrentUser;

	login: (loginData: IUserLogin) => Promise<void>;
	singup: (singupData: IUserSingup) => Promise<void>;
	logout: () => Promise<void>;
}
export const useUserStore = create<IUserState>((set) => ({
	// Initial State
	currentUser: undefined,

	// Actions
	login: async (loginData: IUserLogin) => {
		const userServices = new UserServices();
		const currentUser = await userServices.login(loginData);

		set(() => ({
			currentUser: currentUser,
		}));
	},
	singup: async (singupData: IUserSingup) => {
		const userServices = new UserServices();
		const currentUser = await userServices.singup(singupData);

		set(() => ({
			currentUser: currentUser,
		}));
	},
	logout: async () =>
		set(() => ({
			currentUser: undefined,
		})),
}));
