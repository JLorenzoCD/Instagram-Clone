import { createPortal } from 'react-dom';

interface Props extends React.HTMLAttributes<HTMLDivElement> {
	children: JSX.Element | JSX.Element[];
	portalID: string;
	show: boolean;
}
export default function Modal({ children, portalID, show, ...props }: Props) {
	return createPortal(
		<div
			aria-hidden={`${show}`}
			className={`${
				show ? '' : 'hidden'
			} overflow-y-auto overflow-x-hidden fixed top-0 right-0 left-0 bottom-0 z-50 flex justify-center items-center w-full md:inset-0 max-h-full bg-black/50 p-4`}
			{...props}
		>
			{children}
		</div>,
		document.getElementById(portalID)!
	);
}
