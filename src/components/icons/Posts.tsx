interface Props extends React.SVGProps<SVGSVGElement> {}

function Posts(props: Props) {
	return (
		<svg aria-label='Posts' fill='currentColor' height={24} role='img' viewBox='0 0 24 24' width={24} {...props}>
			<title>Posts</title>
			<rect
				fill='none'
				height={18}
				stroke='currentColor'
				strokeLinecap='round'
				strokeLinejoin='round'
				strokeWidth={2}
				width={18}
				x={3}
				y={3}
			/>
			<line
				fill='none'
				stroke='currentColor'
				strokeLinecap='round'
				strokeLinejoin='round'
				strokeWidth={2}
				x1='9.015'
				x2='9.015'
				y1={3}
				y2={21}
			/>
			<line
				fill='none'
				stroke='currentColor'
				strokeLinecap='round'
				strokeLinejoin='round'
				strokeWidth={2}
				x1='14.985'
				x2='14.985'
				y1={3}
				y2={21}
			/>
			<line
				fill='none'
				stroke='currentColor'
				strokeLinecap='round'
				strokeLinejoin='round'
				strokeWidth={2}
				x1={21}
				x2={3}
				y1='9.015'
				y2='9.015'
			/>
			<line
				fill='none'
				stroke='currentColor'
				strokeLinecap='round'
				strokeLinejoin='round'
				strokeWidth={2}
				x1={21}
				x2={3}
				y1='14.985'
				y2='14.985'
			/>
		</svg>
	);
}

export default Posts;