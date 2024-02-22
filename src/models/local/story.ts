import { storiesData, userStorie } from '@/data/stories';

import type { IEntityID } from '@/types/entity';

export default class StoryModel {
	async getAll(userId: IEntityID) {
		console.log(`Obteniendo las historias para el usuario cuyo id es "${userId}"`);

		return storiesData;
	}
	async getStories(userId: IEntityID) {
		console.log(`Obteniendo las historias del usuario cuyo id es "${userId}"`);

		return userStorie;
	}
}
