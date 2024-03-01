import { createContext } from 'react';

interface IModalOptionContext {
	show: boolean;
	openModal: () => void;
	closeModal: () => void;
}

export const ModalOptionContext = createContext<IModalOptionContext>({} as IModalOptionContext);
