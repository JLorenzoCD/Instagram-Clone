import { currentUser, currentUserProfile, userSuggestions } from '@/data/user';

import type { IEntityID } from '@/types/entity';

export default class UserModel {
	async getCurrentUserData(currentUserId: IEntityID) {
		console.log(`Obteniendo la info del usuario actual cuyo id es "${currentUserId}"`);

		return currentUser;
	}
	async getProfileData(userId: IEntityID) {
		console.log(`Obteniendo la info del perfil del usuario cuyo id es "${userId}"`);

		return currentUserProfile;
	}
	async getSuggestions(userId: IEntityID) {
		console.log(`Obteniendo las cuentas sugeridas del usuario cuyo id es "${userId}"`);

		return userSuggestions;
	}
}
