import { useState } from 'react';

import type { IEntityID } from '../types/entity';

export function useModalPost() {
	const [modalData, setModalData] = useState<{
		show: boolean;
		postId: null | IEntityID;
	}>({ show: false, postId: null });

	const openModal = (postId: IEntityID) => setModalData({ show: true, postId });
	const closeModal = () => setModalData({ show: false, postId: null });

	return { modalData, openModal, closeModal };
}
