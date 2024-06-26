import { useQuery } from '@tanstack/react-query';
import { useScreenSize } from '@/hooks/useScreenSize';

import { Navigate } from 'react-router-dom';

import PostController from '@/controllers/post';

import Close from '../icons/Close';
import Options from '../icons/Options';
import Heart from '../icons/Heart';
import Message from '../icons/Message';
import Share from '../icons/Share';
import SavePost from '../icons/SavePost';

import SkeletonProfile from '../skeleton/Profile';

import Modal from './Modal';
import Comment from '../Comment';
import Spinner from '../Spinner';

import { getTimeAgo } from '@/utilities/time';

import type { IEntityID } from '@/types/entity';

interface Props {
	modalData: {
		show: boolean;
		data?: IEntityID;
	};
	closeModal: () => void;
}

export default function ModalPost({ modalData, closeModal }: Props) {
	const { width } = useScreenSize();

	const { data: modalPostData, isLoading } = useQuery({
		queryFn: () => {
			const postController = new PostController();
			return postController.getInfoLargeScreen(modalData.data as IEntityID);
		},
		queryKey: ['modalPostData', modalData.data],
	});

	if (width <= 640) {
		return <Navigate to={`/post/${modalData.data}`} replace />;
	}

	if (isLoading)
		return (
			<Modal portalID='portal-modal' show={modalData.show} onClick={closeModal}>
				<Spinner />
			</Modal>
		);

	if (!modalData.show || modalPostData === undefined) return null;

	return (
		<Modal portalID='portal-modal' show={modalData.show} onClick={closeModal}>
			<div className='w-full max-w-5xl max-h-full overflow-hidden' onClick={(e) => e.stopPropagation()}>
				<div className='bg-white rounded-lg shadow flex'>
					<div className='basis-1/2'>
						<img src={modalPostData.post.image} className='size-full object-cover max-h-[90vh]' />
					</div>
					<div className='basis-1/2 flex flex-col'>
						<div className='flex-1'>
							<header className='flex justify-between p-3 border-b border-b-gray-300'>
								<div className='flex items-center'>
									<div className='w-10 h-10 mr-4'>
										{/* <img src={data.userPicture} className='rounded-full' /> */}
										<SkeletonProfile className='size-full' />
									</div>
									<p className='col-span-4 text-sm font-semibold'>
										{modalPostData.user.name}
										{!modalPostData.user.follow && (
											<>
												{' '}
												• <span className='text-blue-500 text-xs'>Folow</span>
											</>
										)}
									</p>
								</div>

								<div className='flex justify-center items-center'>
									<Options />
									<button
										type='button'
										className='text-gray-500 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm size-8 ms-auto inline-flex justify-center items-center'
										onClick={closeModal}
										title='Close modal'
									>
										<Close />
									</button>
								</div>
							</header>

							<section>
								{!!modalPostData.post.comments.length &&
									modalPostData.post.comments.map((comment) => <Comment key={comment.id} data={comment} full />)}
							</section>
						</div>

						<div className='p-4'>
							<div className='flex flex-row gap-3'>
								<Heart liked={modalPostData.post.liked} />
								<Message />
								<Share />
								<SavePost saved={modalPostData.post.saved} />
							</div>
							<p className='text-sm text-black font-black'>{modalPostData.post.likes.toLocaleString('es-AR')} Likes</p>
							<p className='text-sm text-gray-600'>Hace {getTimeAgo(modalPostData.post.time)}</p>

							<div className='flex items-center mt-3'>
								<SkeletonProfile className='size-7 mr-2' />
								<input
									type='text'
									name='addComment'
									className=' text-gray-900 text-sm focus:outline-0 block w-full py-2'
									placeholder='Add a comment...'
								/>
							</div>
						</div>
					</div>
				</div>
			</div>
		</Modal>
	);
}
