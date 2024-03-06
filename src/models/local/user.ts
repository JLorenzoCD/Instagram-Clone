import { LOCAL_PROMISE_WAIT_TIME } from '@/consts/local';

import { currentUser, currentUserProfile, userSuggestions } from '@/data/user';

import type { IEntityID } from '@/types/entity';
import type { IUserLogin, IUserSingup } from '@/types/user';

export default class UserModel {
	async login(loginData: IUserLogin) {
		await new Promise((resolve) => setTimeout(resolve, LOCAL_PROMISE_WAIT_TIME));
		console.log({ loginData });
		return currentUser;
	}

	async singup(singupData: IUserSingup) {
		await new Promise((resolve) => setTimeout(resolve, LOCAL_PROMISE_WAIT_TIME));
		console.log({ singupData });
		return currentUser;
	}

	async logout() {
		await new Promise((resolve) => setTimeout(resolve, LOCAL_PROMISE_WAIT_TIME));
		console.log('Cerrando sesion');
	}

	async getCurrentUserData(currentUserId: IEntityID) {
		await new Promise((resolve) => setTimeout(resolve, LOCAL_PROMISE_WAIT_TIME));
		console.log(`Obteniendo la info del usuario actual cuyo id es "${currentUserId}"`);

		return currentUser;
	}
	async getProfileData(userId: IEntityID) {
		await new Promise((resolve) => setTimeout(resolve, LOCAL_PROMISE_WAIT_TIME));
		console.log(`Obteniendo la info del perfil del usuario cuyo id es "${userId}"`);

		return currentUserProfile;
	}
	async getSuggestions(userId: IEntityID) {
		await new Promise((resolve) => setTimeout(resolve, LOCAL_PROMISE_WAIT_TIME));
		console.log(`Obteniendo las cuentas sugeridas del usuario cuyo id es "${userId}"`);

		return userSuggestions;
	}
}
