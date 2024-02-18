import { createPortal } from 'react-dom';

interface Props {
	children: JSX.Element | JSX.Element[];
	portalID: string;
}
export default function Modal({ children, portalID }: Props) {
	return createPortal(<>{children}</>, document.getElementById(portalID)!);
}
