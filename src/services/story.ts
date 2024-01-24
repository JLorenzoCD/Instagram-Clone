import StoryModel from '../models/local/story';

export default class StoryService {
	sotryModel = new StoryModel();

	getAll() {
		const currentUserId = 1;

		return this.sotryModel.getAll(currentUserId);
	}

	getUserStories() {
		const currentUserId = 1;

		return this.sotryModel.getStories(currentUserId);
	}
}
