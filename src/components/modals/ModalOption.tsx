import { useUserStore } from '@/store/user';

import Close from '../icons/Close';

import Modal from './Modal';

interface Props {
	show: boolean;
	closeModal: () => void;
}

export default function ModalOption({ show, closeModal }: Props) {
	const logout = useUserStore((state) => state.logout);

	const themeLight = true;

	return (
		<Modal portalID='portal-modal' show={show} onClick={closeModal}>
			<div className='w-full max-w-2xl max-h-full overflow-hidden' onClick={(e) => e.stopPropagation()}>
				<div className='bg-white rounded-lg shadow'>
					<button
						type='button'
						className='text-gray-50 bg-transparent hover:bg-gray-400 rounded-lg text-sm size-12 ms-auto inline-flex justify-center items-center absolute top-0 right-0 font-bold'
						onClick={closeModal}
						title='Close modal'
					>
						<Close />
					</button>

					<ul className='block p-1'>
						<ModalOptionItem disabled>Configuracion</ModalOptionItem>
						<ModalOptionItem disabled>Tu actividad</ModalOptionItem>
						<ModalOptionItem disabled>Guardado</ModalOptionItem>
						<ModalOptionItem disabled>
							<CheckBoxInput>Cambiar apariencia ({themeLight ? 'light' : 'dark'})</CheckBoxInput>
						</ModalOptionItem>
						<ModalOptionItem disabled>Reportar un problema</ModalOptionItem>
						<ModalOptionItem onClick={logout}>Salir</ModalOptionItem>
					</ul>
				</div>
			</div>
		</Modal>
	);
}

interface ModalOptionItemProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {}
function ModalOptionItem({ disabled, ...props }: ModalOptionItemProps) {
	return (
		<li>
			<button
				{...props}
				className={`p-4 lg:p-4 w-full hover:bg-zinc-200 ${
					disabled ? 'text-slate-400 pointer-events-none' : 'hover:bg-zinc-200'
				}`}
			/>
		</li>
	);
}

function CheckBoxInput({ children }: { children: React.ReactNode }) {
	return (
		<label className='inline-flex items-center cursor-pointer w-full justify-center mt-1'>
			<input type='checkbox' value='' className='sr-only peer' />
			<div className="relative w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 rounded-full peer  peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:w-5 after:h-5 after:transition-all peer-checked:bg-blue-600"></div>
			<span className='ms-3 text-sm font-medium'>{children}</span>
		</label>
	);
}
