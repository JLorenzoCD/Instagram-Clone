import { createContext } from 'react';

import type { IEntityID } from '../types/entity';

interface IModalPostContext {
	modalData: {
		show: boolean;
		postId: IEntityID | null;
	};
	openModal: (postId: IEntityID) => void;
}

export const ModalPostContext = createContext<IModalPostContext>({} as IModalPostContext);
