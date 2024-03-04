import { z } from 'zod';

import { ACCEPTED_IMAGE_TYPES, MAX_FILE_SIZE } from '@/consts/post';

export const createPostSchema = z.object({
	description: z.string(),
	imageFile: z
		.any()
		.refine((file) => file !== null, 'An image has not been selected.')
		.refine((file) => file.size <= MAX_FILE_SIZE, 'Max file size is 5MB.')
		.refine((file) => ACCEPTED_IMAGE_TYPES.includes(file.type), '.jpg, .jpeg and .png files are accepted.'),
});
