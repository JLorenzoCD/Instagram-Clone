import { explorePostData, modalPostData, postsData, profilePostData } from '../../data/post';

import type { IEntityID } from '../../types/entity';

export default class PostModel {
	async getHome(currentUserId: IEntityID) {
		console.log(`Obteninendo los post para la pagina de inicio del usuario con id: ${currentUserId}`);

		return postsData;
	}
	async getProfile(userId: IEntityID) {
		console.log(`Obteninendo los post del perfil del usuario con id: ${userId}`);

		return profilePostData;
	}

	async getExplore(userId: IEntityID) {
		console.log(`Obteninendo los post del perfil del usuario con id: ${userId}`);

		return explorePostData;
	}

	async getInfoLargeScreen(postId: IEntityID) {
		console.log(`Obteninendo la informacion para dispositivos de pantalla grande del post con id: ${postId}`);

		return modalPostData;
	}
}
