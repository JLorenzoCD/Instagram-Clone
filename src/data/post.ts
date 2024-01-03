export const postsData = [
	{
		post: {
			id: 1,

			user: {
				name: 'Alice',
				picture: 'https://example.com/alice.jpg',
			},
			urlImage: 'https://example.com/post1.jpg',
			likes: 15,
			numberComments: 5,
			time: '2023-12-26T10:30:00Z',
			description: '¡Increíble día en la playa! ☀️🌊',
		},
		me: {
			followed: true,
			liked: false,
			saved: false,
			comment: '¡Que foto tan genial!',
		},
	},
	{
		post: {
			id: 2,

			user: {
				name: 'Bob',
				picture: 'https://example.com/bob.jpg',
			},
			urlImage: 'https://example.com/post2.jpg',
			likes: 30,
			numberComments: 12,
			time: '2023-12-23T18:45:00Z',
			description: 'Explorando nuevas aventuras ⛰️🌲',
			mainComment: {
				comment: 'Me encanta esta vista 😍',
				username: 'Eva',
			},
		},
		me: {
			followed: false,
			liked: true,
			saved: false,
		},
	},
	{
		post: {
			id: 3,

			user: {
				name: 'Eva',
				picture: 'https://example.com/eva.jpg',
			},
			urlImage: 'https://example.com/post3.jpg',
			likes: 20,
			numberComments: 8,
			time: '2023-12-22T15:20:00Z',
			description: 'Disfrutando de la naturaleza 🌿✨',
			mainComment: {
				comment: 'Hermoso paisaje 🏞️',
				username: 'Alice',
			},
		},
		me: {
			followed: true,
			liked: true,
			comment: '¡Fantástico!',
			saved: true,
		},
	},
];
