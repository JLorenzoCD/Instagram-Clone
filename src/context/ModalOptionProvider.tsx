import { useModal } from '@/hooks/useModal';

import { ModalOptionContext } from './ModalOptionContext';

import ModalOption from '@/components/modals/ModalOption';

interface Props {
	children: JSX.Element | JSX.Element[];
}

export default function ModalOptionProvider({ children }: Props) {
	const { modalData, openModal, closeModal } = useModal<undefined>();

	return (
		<ModalOptionContext.Provider value={{ modalData, openModal, closeModal }}>
			{modalData.show && <ModalOption closeModal={closeModal} show={modalData.show} />}
			{children}
		</ModalOptionContext.Provider>
	);
}
