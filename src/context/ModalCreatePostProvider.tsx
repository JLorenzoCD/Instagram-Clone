import { useState } from 'react';

import { ModalCreatePostContext } from './ModalCreatePostContext';

import ModalCreatePost from '@/components/ModalCreatePost';

interface Props {
	children: JSX.Element | JSX.Element[];
}

export default function ModalCreatePostProvider({ children }: Props) {
	const [show, setShow] = useState(false);

	const openModal = () => setShow(true);
	const closeModal = () => setShow(false);

	return (
		<ModalCreatePostContext.Provider value={{ show, openModal, closeModal }}>
			{show && <ModalCreatePost closeModal={closeModal} show={show} />}
			{children}
		</ModalCreatePostContext.Provider>
	);
}
