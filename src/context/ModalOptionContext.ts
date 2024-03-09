import { createContext } from 'react';

interface IModalOptionContext {
	modalData: { show: boolean };
	openModal: () => void;
	closeModal: () => void;
}

export const ModalOptionContext = createContext<IModalOptionContext>({} as IModalOptionContext);
