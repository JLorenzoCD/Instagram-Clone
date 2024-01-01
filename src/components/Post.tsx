import Heart from './icons/Heart';
import Message from './icons/Message';
import SavePost from './icons/SavePost';
import Share from './icons/Share';

import SkeletonImage from './skeleton/Image';
import SkeletonProfile from './skeleton/Profile';

interface Props {
	post: {
		user: {
			name: string;
			picture: string;
		};
		urlImage: string;
		likes: number;
		numberComments: number;
		time: string;
		description: string;

		mainComment?: {
			username: string;
			comment: string;
		};
	};
	me: {
		followed: boolean;
		liked: boolean;
		comment?: string;
		saved: boolean;
	};
}

export default function Post({ post, me }: Props) {
	const MAX_DESCRIPTION_LEN = 90;

	const description =
		MAX_DESCRIPTION_LEN < post.user.name.length + post.description.length
			? post.description.substring(0, MAX_DESCRIPTION_LEN) + ' ... mas'
			: post.description;

	return (
		<article className='bg-white border-gray-300 w-96 border mb-4'>
			<header className='grid grid-cols-6 items-center p-3 border-b border-b-gray-300'>
				<div className='w-10 h-10'>
					{/* <img src={data.userPicture} className='rounded-full' /> */}
					<SkeletonProfile />
				</div>
				<div className='col-span-4 text-sm font-semibold'>
					{post.user.name} • <span className='text-gray-400 text-xs'>{getTimeAgo(post.time)}</span>
					{!me.followed && (
						<>
							{''} • <span className='text-blue-500 text-xs'>Folow</span>
						</>
					)}
				</div>

				<div className='flex justify-center items-center'>
					<svg
						xmlns='http://www.w3.org/2000/svg'
						className='h-6 w-6'
						fill='none'
						viewBox='0 0 24 24'
						stroke='currentColor'
					>
						<path
							strokeLinecap='round'
							strokeLinejoin='round'
							strokeWidth={2}
							d='M5 12h.01M12 12h.01M19 12h.01M6 12a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0z'
						/>
					</svg>
				</div>
			</header>
			<div style={{ width: 382, height: 382 }}>
				{/* <img src={data.postImage} /> */}
				<SkeletonImage />
			</div>
			<div className='flex flex-col p-4 gap-3'>
				<div className='flex flex-row gap-3'>
					<Heart fill={me.liked} />
					<Message />
					<Share />
					<SavePost saved={me.saved} />
				</div>
				<div className='text-sm font-semibold'>{post.likes.toString().replace('.', ',')} Likes</div>
				<div className='text-sm'>
					{post.description.trim().length != 0 && (
						<>
							<span className='font-semibold'>{post.user.name}</span> {description}
						</>
					)}
				</div>
			</div>
			<footer className='px-4 pb-4'>
				{1 < post.numberComments && (
					<div className='text-gray-500 text-sm'>View all {post.numberComments} comments</div>
				)}
				{!!me.comment && me.comment.trim().length !== 0 ? (
					<div className='text-sm'>
						<span className='font-semibold'>Me </span> {me.comment}
					</div>
				) : (
					<>
						{!!post.mainComment && post.mainComment.comment.trim().length !== 0 && (
							<div className='text-sm'>
								<span className='font-semibold'>{post.mainComment.username} </span> {post.mainComment.comment}
							</div>
						)}
					</>
				)}

				<input
					type='text'
					className=' text-gray-900 text-sm focus:outline-0 block w-full py-2'
					placeholder='Add a comment...'
				/>
			</footer>
		</article>
	);
}

function getTimeAgo(time: string) {
	const currentTime = new Date();
	const postTime = new Date(time);
	const timeDiff = currentTime.getTime() - postTime.getTime();

	const seconds = Math.floor(timeDiff / 1000);
	const minutes = Math.floor(seconds / 60);
	const hours = Math.floor(minutes / 60);
	const days = Math.floor(hours / 24);
	const months = Math.floor(days / 30);
	const years = Math.floor(months / 12);

	if (years > 0) {
		return years === 1 ? `${years} año` : `${years} años`;
	} else if (months > 0) {
		return months === 1 ? `${months} mes` : `${months} meses`;
	} else if (days > 0) {
		return days === 1 ? `${days} día` : `${days} días`;
	} else if (hours > 0) {
		return hours === 1 ? `${hours} hora` : `${hours} horas`;
	} else if (minutes > 0) {
		return minutes === 1 ? `${minutes} minuto` : `${minutes} minutos`;
	} else {
		return seconds === 1 ? `${seconds} segundo` : `${seconds} segundos`;
	}
}
