import { createContext } from 'react';

import type { IEntityID } from '@/types/entity';

interface IModalPostContext {
	modalData: {
		show: boolean;
		postId?: IEntityID;
	};
	openModal: (postId: IEntityID) => void;
	closeModal: () => void;
}

export const ModalPostContext = createContext<IModalPostContext>({} as IModalPostContext);
