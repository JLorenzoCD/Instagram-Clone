import StoryModel from '../models/local/story';

export default class StoryService {
	sotryModel = new StoryModel();

	async getAll() {
		const currentUserId = 1;

		return await this.sotryModel.getAll(currentUserId);
	}

	async getUserStories() {
		const currentUserId = 1;

		return await this.sotryModel.getStories(currentUserId);
	}
}
