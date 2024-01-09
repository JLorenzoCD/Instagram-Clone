import Heart from './icons/Heart';
import Message from './icons/Message';

interface Props {
	image: string;
	alt: string;
	likes: number;
	comments: number;
	time: string;
}

export function PostProfile({ image, alt, likes, comments }: Props) {
	return (
		<div className='w-1/3 h-fit p-px md:px-3'>
			<a href='#'>
				<article className='bg-gray-100 text-white md:mb-6 relative overflow-hidden'>
					<img className='h-96 w-full object-cover' src={image} alt={alt} />
					{/* overlay*/}
					<div className='top-0 left-0 absolute h-full w-full bg-black/30 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity duration-300'>
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
			</a>
		</div>
	);
}
