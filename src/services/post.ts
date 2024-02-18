import PostModel from '../models/local/post';

import type { IPostToStore, IPostToUpdate } from '../types/post';
import type { IEntityID } from '../types/entity';

export default class PostService {
	postModel = new PostModel();

	async getHome(currentUserId: IEntityID) {
		return await this.postModel.getHome(currentUserId);
	}

	async getProfile(userId: IEntityID) {
		return await this.postModel.getProfile(userId);
	}

	async getExplore(currentUserId: IEntityID) {
		return await this.postModel.getExplore(currentUserId);
	}

	async getInfoLargeScreen(postId: IEntityID) {
		return await this.postModel.getInfoLargeScreen(postId);
	}

	async store(data: IPostToStore) {
		console.log(`Se crea un post con los siguientes datos: ${data}`);
	}

	async update(postId: IEntityID, data: IPostToUpdate) {
		console.log(`Modificando el post con id ${postId} con los siguientes campos: ${data}`);
	}

	async delete(postId: IEntityID) {
		console.log(`Eliminando el post con id ${postId}`);
	}
}
