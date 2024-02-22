interface Props extends React.InputHTMLAttributes<HTMLInputElement> {}

export default function InputSession(props: Props) {
	return (
		<input
			{...props}
			className='text-xs w-full mb-2 rounded border bg-gray-100 border-gray-300 px-2 py-2 focus:outline-none focus:border-gray-400 active:outline-none'
		/>
	);
}
