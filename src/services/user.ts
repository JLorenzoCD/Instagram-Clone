import UserModel from '../models/local/user';

import type { IEntityID } from '../types/entity';

export default class UserServices {
	userModel = new UserModel();

	async logIn() {}
	async logUp() {}
	async logOut() {
		console.log('Cerrando secion');
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
