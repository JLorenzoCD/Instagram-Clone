import PostService from '@/services/local/post';

import type { IPostToStore, IPostToUpdate } from '@/types/post';
import type { IEntityID } from '@/types/entity';

export default class PostController {
	postService = new PostService();

	async getHome(currentUserId: IEntityID) {
		return await this.postService.getHome(currentUserId);
	}

	async getProfile(userId: IEntityID) {
		return await this.postService.getProfile(userId);
	}

	async getExplore(currentUserId: IEntityID) {
		return await this.postService.getExplore(currentUserId);
	}

	async getInfoLargeScreen(postId: IEntityID) {
		return await this.postService.getInfoLargeScreen(postId);
	}

	async getInfo(postId: IEntityID) {
		return await this.postService.getInfo(postId);
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
