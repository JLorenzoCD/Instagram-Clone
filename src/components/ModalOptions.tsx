import Close from './icons/Close';

import Modal from './Modal';

interface Props {
	show: boolean;
	closeModal: () => void;
}

export default function ModalOptions({ show, closeModal }: Props) {
	return (
		<Modal portalID='portal-modal'>
			<div
				aria-hidden={`${show}`}
				className={`${
					show ? '' : 'hidden'
				} overflow-y-auto overflow-x-hidden fixed top-0 right-0 left-0 bottom-0 z-50 flex justify-center items-center w-full md:inset-0 max-h-full bg-black/50 p-4`}
				onClick={closeModal}
			>
				<div className='w-full max-w-2xl max-h-full overflow-hidden' onClick={(e) => e.stopPropagation()}>
					<div className='bg-white rounded-lg shadow'>
						<button
							type='button'
							className='text-gray-50 bg-transparent hover:bg-gray-400 hover:text-gray-900 rounded-lg text-sm size-12 ms-auto inline-flex justify-center items-center absolute top-0 right-0'
							onClick={closeModal}
							title='Close modal'
						>
							<Close />
						</button>

						<ul className='block p-1'>
							<li className='flex p-4 lg:p-4 hover:bg-zinc-200'>
								<p className='ml-4'>Opcion 1</p>
							</li>
							<li className='flex p-4 lg:p-4 hover:bg-zinc-200'>
								<p className='ml-4'>Opcion 2</p>
							</li>
						</ul>
					</div>
				</div>
			</div>
		</Modal>
	);
}
