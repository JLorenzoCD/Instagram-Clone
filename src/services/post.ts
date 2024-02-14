import PostModel from '../models/local/post';

import type { IPostToStore, IPostToUpdate } from '../types/post';
import type { EntityID } from '../types/entity';

export default class PostService {
	postModel = new PostModel();

	getHome() {
		const currentUserId = 1;

		return this.postModel.getHome(currentUserId);
	}

	getProfile(userId: EntityID) {
		return this.postModel.getProfile(userId);
	}

	getExplore() {
		const currentUserId = 1;

		return this.postModel.getExplore(currentUserId);
	}

	getInfoLargeScreen(postId: EntityID) {
		return this.postModel.getInfoLargeScreen(postId);
	}

	store(data: IPostToStore) {
		console.log(`Se crea un post con los siguientes datos: ${data}`);
	}

	update(postId: EntityID, data: IPostToUpdate) {
		console.log(`Modificando el post con id ${postId} con los siguientes campos: ${data}`);
	}

	delete(postId: EntityID) {
		console.log(`Eliminando el post con id ${postId}`);
	}
}
