import { useState } from 'react';

import { ModalPostContext } from './ModalPostContext';

import ModalPost from '../components/ModalPost';

import type { IEntityID } from '../types/entity';

interface Props {
	children: JSX.Element | JSX.Element[];
}

export default function ModalPostProvider({ children }: Props) {
	const [modalData, setModalData] = useState<{
		show: boolean;
		postId: null | IEntityID;
	}>({ show: false, postId: null });

	const openModal = (postId: IEntityID) => setModalData({ show: true, postId });
	const closeModal = () => setModalData({ show: false, postId: null });

	return (
		<ModalPostContext.Provider value={{ modalData, openModal }}>
			{modalData.show && <ModalPost closeModal={closeModal} modalData={modalData} />}
			{children}
		</ModalPostContext.Provider>
	);
}
