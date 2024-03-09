import { createContext } from 'react';

interface IModalCreatePostContext {
	modalData: { show: boolean };
	openModal: () => void;
	closeModal: () => void;
}

export const ModalCreatePostContext = createContext<IModalCreatePostContext>({} as IModalCreatePostContext);
