import { useState } from 'react';

export function useModal<T>() {
	const [modalData, setModalData] = useState<{
		show: boolean;
		data?: T;
	}>({ show: false, data: undefined });

	const openModal = (data?: T) => setModalData({ show: true, data });
	const closeModal = () => setModalData({ show: false, data: undefined });

	return { modalData, openModal, closeModal };
}
