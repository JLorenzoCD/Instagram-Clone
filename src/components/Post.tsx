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

		mainComment?: string;
	};
	me: {
		followed: boolean;
		liked: boolean;
		comment?: string;
	};
}

export default function Post({ post, me }: Props) {
	const MAX_DESCRIPTION_LEN = 90;

	const description =
		MAX_DESCRIPTION_LEN < post.user.name.length + post.description.length
			? post.description.substring(0, MAX_DESCRIPTION_LEN) + ' ... mas'
			: post.description;

	return (
		<article className='bg-white border-gray-300 w-96 border mb-2'>
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
							d='M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z'
						/>
					</svg>
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
							d='M7 8h10M7 12h4m1 8l-4-4H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-3l-4 4z'
						/>
					</svg>
					<svg
						xmlns='http://www.w3.org/2000/svg'
						className='h-6 w-6 rotate-45 -translate-y-1 translate-x-1'
						fill='none'
						viewBox='0 0 24 24'
						stroke='currentColor'
					>
						<path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M12 19l9 2-9-18-9 18 9-2zm0 0v-8' />
					</svg>
					<svg
						xmlns='http://www.w3.org/2000/svg'
						className='h-6 w-6 ml-auto'
						fill='none'
						viewBox='0 0 24 24'
						stroke='currentColor'
					>
						<path
							strokeLinecap='round'
							strokeLinejoin='round'
							strokeWidth={2}
							d='M5 5a2 2 0 012-2h10a2 2 0 012 2v16l-7-3.5L5 21V5z'
						/>
					</svg>
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
			<footer className='p-4'>
				{1 < post.numberComments && (
					<div className='text-gray-500 text-sm'>View all {post.numberComments} comments</div>
				)}
				{!!me.comment && me.comment.trim().length !== 0 ? (
					<div className='text-sm'>
						<span className='font-semibold'>Me </span> {me.comment}
					</div>
				) : (
					<>
						{!!post.mainComment && post.mainComment.trim().length !== 0 && (
							<div className='text-sm'>
								<span className='font-semibold'>Me </span> {me.comment}
							</div>
						)}
					</>
				)}
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

function SkeletonImage() {
	return (
		<div role='status' className='space-y-2.5 animate-pulse w-full h-full'>
			<div className='flex items-center justify-center w-full h-full bg-gray-300 rounded sm:w-96 '>
				<svg
					className='w-10 h-10 text-gray-200 '
					aria-hidden='true'
					xmlns='http://www.w3.org/2000/svg'
					fill='currentColor'
					viewBox='0 0 20 18'
				>
					<path d='M18 0H2a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2Zm-5.5 4a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3Zm4.376 10.481A1 1 0 0 1 16 15H4a1 1 0 0 1-.895-1.447l3.5-7A1 1 0 0 1 7.468 6a.965.965 0 0 1 .9.5l2.775 4.757 1.546-1.887a1 1 0 0 1 1.618.1l2.541 4a1 1 0 0 1 .028 1.011Z' />
				</svg>
			</div>
		</div>
	);
}

function SkeletonProfile() {
	return (
		<div role='status' className='animate-pulse w-full h-full'>
			<div className='flex items-center justify-center w-full h-full'>
				<svg
					className='w-full h-full text-gray-200 '
					aria-hidden='true'
					xmlns='http://www.w3.org/2000/svg'
					fill='currentColor'
					viewBox='0 0 20 20'
				>
					<path d='M10 0a10 10 0 1 0 10 10A10.011 10.011 0 0 0 10 0Zm0 5a3 3 0 1 1 0 6 3 3 0 0 1 0-6Zm0 13a8.949 8.949 0 0 1-4.951-1.488A3.987 3.987 0 0 1 9 13h2a3.987 3.987 0 0 1 3.951 3.512A8.949 8.949 0 0 1 10 18Z' />
				</svg>
			</div>
		</div>
	);
}
