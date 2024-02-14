import { storiesData, userStorie } from '../../data/stories';

import type { EntityID } from '../../types/entity';

export default class StoryModel {
	getAll(userId: EntityID) {
		console.log(`Obteniendo las historias para el usuario cuyo id es "${userId}"`);

		return storiesData;
	}
	getStories(userId: EntityID) {
		console.log(`Obteniendo las historias del usuario cuyo id es "${userId}"`);

		return userStorie;
	}
}
