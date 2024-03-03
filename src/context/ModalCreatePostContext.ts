import { createContext } from 'react';

interface IModalCreatePostContext {
	show: boolean;
	openModal: () => void;
	closeModal: () => void;
}

export const ModalCreatePostContext = createContext<IModalCreatePostContext>({} as IModalCreatePostContext);
