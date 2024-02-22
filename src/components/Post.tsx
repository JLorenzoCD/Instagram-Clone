import Heart from './icons/Heart';
import Message from './icons/Message';
import SavePost from './icons/SavePost';
import Share from './icons/Share';
import Options from './icons/Options';

import SkeletonImage from './skeleton/Image';
import SkeletonProfile from './skeleton/Profile';

import Comment from './Comment';

import { getTimeAgo } from '@/utilities/time';

import type { IPostHome } from '@/types/post';

interface Props {
	data: IPostHome;
}

export default function Post({ data: { post, me } }: Props) {
	const MAX_DESCRIPTION_LEN = 90;

	const description =
		MAX_DESCRIPTION_LEN < post.user.name.length + post.description.length
			? post.description.substring(0, MAX_DESCRIPTION_LEN) + ' ... mas'
			: post.description;

	return (
		<article className='bg-white border-gray-300 max-w-96 border mb-4 mx-auto sm:w-96 '>
			<header className='flex justify-between p-3 border-b border-b-gray-300'>
				<div className='flex items-center'>
					<div className='w-10 h-10 mr-4'>
						{/* <img src={data.userPicture} className='rounded-full' /> */}
						<SkeletonProfile className='size-full' />
					</div>
					<div className='col-span-4 text-sm font-semibold'>
						{post.user.name} • <span className='text-gray-400 text-xs'>{getTimeAgo(post.time)}</span>
						{!me.followed && (
							<>
								{''} • <span className='text-blue-500 text-xs'>Folow</span>
							</>
						)}
					</div>
				</div>

				<div className='flex justify-center items-center'>
					<Options />
				</div>
			</header>
			<div className='h-96 sm:size-96'>
				{/* <img src={data.postImage} /> */}
				<SkeletonImage />
			</div>
			<div className='flex flex-col p-4 gap-3'>
				<div className='flex flex-row gap-3'>
					<Heart liked={me.liked} />
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
					<Comment data={{ username: 'Me', comment: me.comment }} />
				) : (
					<>
						{!!post.mainComment && post.mainComment.comment.trim().length !== 0 && (
							<Comment data={{ username: post.mainComment.username, comment: post.mainComment.comment }} />
						)}
					</>
				)}

				<input
					name='addComment'
					type='text'
					className=' text-gray-900 text-sm focus:outline-0 block w-full py-2'
					placeholder='Add a comment...'
				/>
			</footer>
		</article>
	);
}
