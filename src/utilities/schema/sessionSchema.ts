import { z } from 'zod';

export const LoginSchema = z.object({
	password: z.string().trim().min(4),
	username: z.string().trim().min(5),
});

export const SingupSchema = LoginSchema.merge(
	z.object({
		email: z.string().trim().email(),
		passwordConfirm: z.string().trim().min(4),
	})
).refine((data) => data.password === data.passwordConfirm, {
	message: "Passwords don't match",
	path: ['passwordConfirm'],
});
