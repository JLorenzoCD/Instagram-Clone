import { LOCAL_PROMISE_WAIT_TIME } from '@/consts/local';

import { storiesData, userStorie } from '@/data/stories';

import type { IEntityID } from '@/types/entity';

export default class StoryService {
	async getAll(userId: IEntityID) {
		await new Promise((resolve) => setTimeout(resolve, LOCAL_PROMISE_WAIT_TIME));
		console.log(`Obteniendo las historias para el usuario cuyo id es "${userId}"`);

		return storiesData;
	}
	async getStories(userId: IEntityID) {
		await new Promise((resolve) => setTimeout(resolve, LOCAL_PROMISE_WAIT_TIME));
		console.log(`Obteniendo las historias del usuario cuyo id es "${userId}"`);

		return userStorie;
	}
}
