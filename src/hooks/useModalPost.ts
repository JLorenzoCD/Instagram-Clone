import { useState } from 'react';

import type { EntityID } from '../types/entity';

export function useModalPost() {
	const [modalData, setModalData] = useState<{
		show: boolean;
		postId: null | EntityID;
	}>({ show: false, postId: null });

	const openModal = (postId: EntityID) => setModalData({ show: true, postId });
	const closeModal = () => setModalData({ show: false, postId: null });

	return { modalData, openModal, closeModal };
}
