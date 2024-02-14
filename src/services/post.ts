import type { IPostToStore, IPostToUpdate } from '../types/post';

import PostModel from '../models/local/post';

export default class PostService {
	postModel = new PostModel();

	getHome() {
		const currentUserId = 1;

		return this.postModel.getHome(currentUserId);
	}
	getProfile(userId: number) {
		return this.postModel.getProfile(userId);
	}
	getExplore() {
		const currentUserId = 1;

		return this.postModel.getExplore(currentUserId);
	}

	store(data: IPostToStore) {
		console.log(`Se crea un post con los siguientes datos: ${data}`);
	}
	update(postId: number, data: IPostToUpdate) {
		console.log(`Modificando el post con id ${postId} con los siguientes campos: ${data}`);
	}
	delete(postId: number) {
		console.log(`Eliminando el post con id ${postId}`);
	}
}
