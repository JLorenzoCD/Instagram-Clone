import UserModel from '@/models/local/user';

import type { IEntityID } from '@/types/entity';
import type { IUserLogin, IUserSingup } from '@/types/user';

export default class UserServices {
	userModel = new UserModel();

	async login(loginData: IUserLogin) {
		return await this.userModel.login(loginData);
	}

	async singup(singupData: IUserSingup) {
		return await this.userModel.singup(singupData);
	}

	async logout() {
		return await this.userModel.logout();
	}

	async getCurrentUserData(currentUserId: IEntityID) {
		return await this.userModel.getCurrentUserData(currentUserId);
	}

	async getProfileData(userId: IEntityID) {
		return await this.userModel.getProfileData(userId);
	}

	async getSuggestions(currentUserId: IEntityID) {
		return await this.userModel.getSuggestions(currentUserId);
	}
}
