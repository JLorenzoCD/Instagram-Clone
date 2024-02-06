import { getTimeAgo } from '../utilities/time';
import Heart from './icons/Heart';
import SkeletonProfile from './skeleton/Profile';

interface Props {
	full?: boolean;
	data: {
		username: string;
		comment: string;
	};
}

export default function Comment({ data, full }: Props) {
	if (!full)
		return (
			<div className='text-sm'>
				<span className='font-semibold'>{data.username} </span> <p>{data.comment}</p>
			</div>
		);

	return (
		<div className='text-sm flex p-2 justify-between items-center'>
			<div className='flex'>
				<div>
					<SkeletonProfile className='size-7 mr-2' />
				</div>
				<div>
					<span className='font-semibold'>
						{data.username}
						<span className='ml-2 text-gray-400 text-sm'>{getTimeAgo('2023-12-26T10:30:00Z')}</span>
					</span>
					<p>{data.comment}</p>
				</div>
			</div>
			<div>
				<Heart className='size-5 cursor-pointer' stroke='gray' />
			</div>
		</div>
	);
}
