import { useState } from 'react';

export function useModalPost() {
	const [modalData, setModalData] = useState<{
		show: boolean;
		postId: null | number | string;
	}>({ show: false, postId: null });

	const openModal = (postId: number | string) => setModalData({ show: true, postId });
	const closeModal = () => setModalData({ show: false, postId: null });

	return { modalData, openModal, closeModal };
}
