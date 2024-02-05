import { useState } from 'react';

export function useModalPost() {
	const [showModal, setShowModal] = useState(false);

	const openModal = () => setShowModal(true);
	const closeModal = () => setShowModal(false);

	return { showModal, openModal, closeModal };
}
