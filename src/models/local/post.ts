import { explorePostData, modalPostData, postsData, profilePostData } from '../../data/post';

import type { EntityID } from '../../types/entity';

export default class PostModel {
	getHome(currentUserId: EntityID) {
		console.log(`Obteninendo los post para la pagina de inicio del usuario con id: ${currentUserId}`);

		return postsData;
	}
	getProfile(userId: EntityID) {
		console.log(`Obteninendo los post del perfil del usuario con id: ${userId}`);

		return profilePostData;
	}

	getExplore(userId: EntityID) {
		console.log(`Obteninendo los post del perfil del usuario con id: ${userId}`);

		return explorePostData;
	}

	getInfoLargeScreen(postId: EntityID) {
		console.log(`Obteninendo la informacion para dispositivos de pantalla grande del post con id: ${postId}`);

		return modalPostData;
	}
}
