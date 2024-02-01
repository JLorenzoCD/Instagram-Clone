import { createPortal } from 'react-dom';

export default function Modal({ children }: { children: JSX.Element | JSX.Element[] }) {
	return createPortal(<>{children}</>, document.getElementById('portal-modal')!);
}
