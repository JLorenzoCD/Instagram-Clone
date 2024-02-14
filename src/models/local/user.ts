import { currentUser, currentUserProfile, userSuggestions } from '../../data/user';

import type { EntityID } from '../../types/entity';

export default class UserModel {
	getCurrentUserData(currentUserId: EntityID) {
		console.log(`Obteniendo la info del usuario actual cuyo id es "${currentUserId}"`);

		return currentUser;
	}
	getProfileData(userId: EntityID) {
		console.log(`Obteniendo la info del perfil del usuario cuyo id es "${userId}"`);

		return currentUserProfile;
	}
	getSuggestions(userId: EntityID) {
		console.log(`Obteniendo las cuentas sugeridas del usuario cuyo id es "${userId}"`);

		return userSuggestions;
	}
}
