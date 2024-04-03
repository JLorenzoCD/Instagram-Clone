import UserService from '@/services/local/user';

import type { IEntityID } from '@/types/entity';
import type { IUserLogin, IUserSingup } from '@/types/user';

export default class UserController {
	userService = new UserService();

	async login(loginData: IUserLogin) {
		return await this.userService.login(loginData);
	}

	async singup(singupData: IUserSingup) {
		return await this.userService.singup(singupData);
	}

	async logout() {
		return await this.userService.logout();
	}

	async getCurrentUserData(currentUserId: IEntityID) {
		return await this.userService.getCurrentUserData(currentUserId);
	}

	async getProfileData(userId: IEntityID) {
		return await this.userService.getProfileData(userId);
	}

	async getSuggestions(currentUserId: IEntityID) {
		return await this.userService.getSuggestions(currentUserId);
	}
}
