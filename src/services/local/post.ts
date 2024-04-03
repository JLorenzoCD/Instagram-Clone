import { LOCAL_PROMISE_WAIT_TIME } from '@/consts/local';

import { explorePostData, modalPostData, postsData, profilePostData } from '@/data/post';

import type { IEntityID } from '@/types/entity';

export default class PostService {
	async getHome(currentUserId: IEntityID) {
		await new Promise((resolve) => setTimeout(resolve, LOCAL_PROMISE_WAIT_TIME));
		console.log(`Obteninendo los post para la pagina de inicio del usuario con id: ${currentUserId}`);

		return postsData;
	}
	async getProfile(userId: IEntityID) {
		await new Promise((resolve) => setTimeout(resolve, LOCAL_PROMISE_WAIT_TIME));
		console.log(`Obteninendo los post del perfil del usuario con id: ${userId}`);

		return profilePostData;
	}

	async getExplore(userId: IEntityID) {
		await new Promise((resolve) => setTimeout(resolve, LOCAL_PROMISE_WAIT_TIME));
		console.log(`Obteninendo los post del perfil del usuario con id: ${userId}`);

		return explorePostData;
	}

	async getInfoLargeScreen(postId: IEntityID) {
		await new Promise((resolve) => setTimeout(resolve, LOCAL_PROMISE_WAIT_TIME));
		console.log(`Obteninendo la informacion para dispositivos de pantalla grande del post con id: ${postId}`);

		return modalPostData;
	}

	async getInfo(postId: IEntityID) {
		await new Promise((resolve) => setTimeout(resolve, LOCAL_PROMISE_WAIT_TIME));
		console.log(`Obteninendo la informacion del post con id: ${postId}`);

		return postsData;
	}
}
