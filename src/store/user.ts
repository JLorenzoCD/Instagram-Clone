import { create } from 'zustand';

import type { ICurrentUser, IUserLogin, IUserSingup } from '@/types/user';

import UserServices from '@/services/user';

import { currentUser } from '@/data/user';

interface IUserState {
	currentUser?: ICurrentUser;

	login: (loginData: IUserLogin) => Promise<void>;
	singup: (singupData: IUserSingup) => Promise<void>;
	logout: () => Promise<void>;
}
export const useUserStore = create<IUserState>((set) => ({
	// Initial State
	// currentUser: undefined,
	currentUser: currentUser,

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
	logout: async () => {
		const userServices = new UserServices();
		await userServices.logout();

		set(() => ({
			currentUser: undefined,
		}));
	},
}));
