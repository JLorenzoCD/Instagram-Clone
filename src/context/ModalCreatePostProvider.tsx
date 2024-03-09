import { useModal } from '@/hooks/useModal';

import { ModalCreatePostContext } from './ModalCreatePostContext';

import ModalCreatePost from '@/components/modals/ModalCreatePost';

interface Props {
	children: JSX.Element | JSX.Element[];
}

export default function ModalCreatePostProvider({ children }: Props) {
	const { modalData, openModal, closeModal } = useModal<undefined>();

	return (
		<ModalCreatePostContext.Provider value={{ modalData, openModal, closeModal }}>
			{modalData.show && <ModalCreatePost closeModal={closeModal} show={modalData.show} />}
			{children}
		</ModalCreatePostContext.Provider>
	);
}
