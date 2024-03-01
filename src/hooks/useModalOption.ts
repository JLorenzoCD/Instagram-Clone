import { useContext } from 'react';

import { ModalOptionContext } from '@/context/ModalOptionContext';

export function useModalOption() {
	return useContext(ModalOptionContext);
}
