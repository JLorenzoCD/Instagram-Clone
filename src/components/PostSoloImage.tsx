import Heart from './icons/Heart';
import Message from './icons/Message';

import type { IPostSoloImage } from '@/types/post';

interface Props extends React.ButtonHTMLAttributes<HTMLButtonElement> {
	data: IPostSoloImage;
}

export default function PostSoloImage({ data: { image, likes, comments, id }, ...props }: Props) {
	return (
		<button {...props} className='size-full'>
			<article className='bg-gray-100 text-white md:mb-6 relative overflow-hidden size-full'>
				<img className='size-full' src={image} alt={`post id:${id}`} />
				{/* overlay*/}
				<div className='top-0 left-0 absolute size-full bg-black/30 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity duration-300'>
					<span className='p-2'>
						<Heart stroke='white' />
						{likes}
					</span>
					<span className='p-2'>
						<Message />
						{comments}
					</span>
				</div>
			</article>
		</button>
	);
}
