import StoryService from '@/services/local/story';

import type { IEntityID } from '@/types/entity';

export default class StoryController {
	sotryService = new StoryService();

	async getAll(currentUserId: IEntityID) {
		return await this.sotryService.getAll(currentUserId);
	}

	async getUserStories(currentUserId: IEntityID) {
		return await this.sotryService.getStories(currentUserId);
	}
}
