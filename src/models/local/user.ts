import { currentUser, currentUserProfile, userSuggestions } from '../../data/user';

export default class UserModel {
	getCurrentUserData(currentUserId: number) {
		console.log(`Obteniendo la info del usuario actual cuyo id es "${currentUserId}"`);

		return currentUser;
	}
	getProfileData(userId: number) {
		console.log(`Obteniendo la info del perfil del usuario cuyo id es "${userId}"`);

		return currentUserProfile;
	}
	getSuggestions(userId: number) {
		console.log(`Obteniendo las cuentas sugeridas del usuario cuyo id es "${userId}"`);

		return userSuggestions;
	}
}
