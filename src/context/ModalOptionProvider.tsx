import { useState } from 'react';

import { ModalOptionContext } from './ModalOptionContext';

import ModalOption from '@/components/ModalOption';

interface Props {
	children: JSX.Element | JSX.Element[];
}

export default function ModalOptionProvider({ children }: Props) {
	const [show, setShow] = useState(false);

	const openModal = () => setShow(true);
	const closeModal = () => setShow(false);

	return (
		<ModalOptionContext.Provider value={{ show, openModal, closeModal }}>
			{show && <ModalOption closeModal={closeModal} show={show} />}
			{children}
		</ModalOptionContext.Provider>
	);
}
