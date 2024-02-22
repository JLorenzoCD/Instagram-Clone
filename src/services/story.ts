import StoryModel from '@/models/local/story';

import type { IEntityID } from '@/types/entity';

export default class StoryService {
	sotryModel = new StoryModel();

	async getAll(currentUserId: IEntityID) {
		return await this.sotryModel.getAll(currentUserId);
	}

	async getUserStories(currentUserId: IEntityID) {
		return await this.sotryModel.getStories(currentUserId);
	}
}
