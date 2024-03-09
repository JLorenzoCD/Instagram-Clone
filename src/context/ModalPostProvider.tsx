import { useModal } from '@/hooks/useModal';

import { ModalPostContext } from './ModalPostContext';

import ModalPost from '@/components/modals/ModalPost';

import type { IEntityID } from '@/types/entity';

interface Props {
	children: JSX.Element | JSX.Element[];
}

export default function ModalPostProvider({ children }: Props) {
	const { modalData, openModal, closeModal } = useModal<IEntityID>();

	return (
		<ModalPostContext.Provider value={{ modalData, openModal, closeModal }}>
			{modalData.show && <ModalPost closeModal={closeModal} modalData={modalData} />}
			{children}
		</ModalPostContext.Provider>
	);
}
