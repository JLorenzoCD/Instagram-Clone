export const modalPostData = {
	user: {
		name: 'username',
		picture: '',
		follow: false,
	},
	post: {
		image: 'https://picsum.photos/275/385',
		time: '2023-12-26T10:30:00Z',
		likes: 5000,
		liked: false,
		saved: false,
		description: '',
		comments: [
			{
				id: 8,
				time: '2023-12-30T10:30:00Z',
				username: 'Me',
				comment: 'Explorando nuevas aventuras ⛰️🌲',
			},
			{
				id: 10,
				time: '2023-12-30T10:30:00Z',
				username: 'Jack',
				comment:
					'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse eleifend nunc pellentesque erat varius laoreet. Mauris placerat nulla a tellus dictum, a ornare lacus rutrum. Curabitur accumsan magna vitae orci mattis vestibulum. ',
			},
		],
	},
};
