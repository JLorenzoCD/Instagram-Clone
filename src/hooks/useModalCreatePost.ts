import { useContext } from 'react';

import { ModalCreatePostContext } from '@/context/ModalCreatePostContext';

export function useModalCreatePost() {
	return useContext(ModalCreatePostContext);
}
