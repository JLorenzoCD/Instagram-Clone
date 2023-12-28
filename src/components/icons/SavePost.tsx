interface Props {
	saved: boolean;
}

function SavePost({ saved }: Props) {
	return (
		<svg
			xmlns='http://www.w3.org/2000/svg'
			className='h-6 w-6 ml-auto'
			fill={saved ? 'black' : 'none'}
			viewBox='0 0 24 24'
			stroke='black'
		>
			<path
				strokeLinecap='round'
				strokeLinejoin='round'
				strokeWidth={2}
				d='M5 5a2 2 0 012-2h10a2 2 0 012 2v16l-7-3.5L5 21V5z'
			/>
		</svg>
	);
}

export default SavePost;
