import { create } from 'zustand';

import type { ICurrentUser, IUserLogin, IUserSingup } from '@/types/user';

import UserController from '@/controllers/user';

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
		const userController = new UserController();
		const currentUser = await userController.login(loginData);

		set(() => ({
			currentUser: currentUser,
		}));
	},
	singup: async (singupData: IUserSingup) => {
		const userController = new UserController();
		const currentUser = await userController.singup(singupData);

		set(() => ({
			currentUser: currentUser,
		}));
	},
	logout: async () => {
		const userController = new UserController();
		await userController.logout();

		set(() => ({
			currentUser: undefined,
		}));
	},
}));
