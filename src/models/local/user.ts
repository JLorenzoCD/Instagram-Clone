import { currentUserData } from '../../data/currentUser';
import { profileUserData } from '../../data/profile';

export default class UserModel {
	getCurrentUserData(currentUserId: number) {
		console.log(`Obteniendo la info del usuario actual cuyo id es "${currentUserId}"`);

		return currentUserData;
	}
	getProfileData(userId: number) {
		console.log(`Obteniendo la info del perfil del usuario cuyo id es "${userId}"`);

		return profileUserData;
	}
}
