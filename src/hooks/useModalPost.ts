import { useContext } from 'react';

import { ModalPostContext } from '@/context/ModalPostContext';

export function useModalPost() {
	return useContext(ModalPostContext);
}
