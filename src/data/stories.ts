import type { IStory } from '../types/story';

export const userStorie: IStory = {
	id: 1,
	profile: 'https://placekitten.com/200',
	username: 'me',
};

const usernames = [
	'john',
	'emily',
	'michael',
	'susan',
	'david',
	'amelia',
	'brian',
	'olivia',
	'chris',
	'sophia',
	'kevin',
	'natalie',
	'alex',
	'emma',
	'jason',
	'mia',
	'ryan',
	'lily',
	'owen',
	'eva',
	'jackson',
	'hazel',
	'nathan',
	'scarlett',
	'liam',
	'zoey',
	'ethan',
	'ava',
	'matthew',
	'aubrey',
	'caleb',
];

export const storiesData: IStory[] = usernames.map((username, index) => ({
	id: 10 + index,
	username,
	profile: 'https://placekitten.com/200',
}));
