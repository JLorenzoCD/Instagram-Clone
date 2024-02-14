import UserModel from '../models/local/user';

import type { EntityID } from '../types/entity';

export default class UserServices {
	userModel = new UserModel();

	logIn() {}
	logUp() {}
	logOut() {
		console.log('Cerrando secion');
	}
	getCurrentUserData() {
		const currentUserId = 1;

		return this.userModel.getCurrentUserData(currentUserId);
	}

	getProfileData(userId: EntityID) {
		return this.userModel.getProfileData(userId);
	}

	getSuggestions() {
		const currentUserId = 1;

		return this.userModel.getSuggestions(currentUserId);
	}
}
