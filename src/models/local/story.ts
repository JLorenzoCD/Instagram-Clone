import { storiesData, userStorie } from '../../data/stories';

export default class StoryModel {
	getAll(userId: number) {
		console.log(`Obteniendo las historias para el usuario cuyo id es "${userId}"`);

		return storiesData;
	}
	getStories(userId: number) {
		console.log(`Obteniendo las historias del usuario cuyo id es "${userId}"`);

		return userStorie;
	}
}
