import { useState } from 'react';

import Close from './icons/Close';

import Modal from './Modal';

interface Props {
	show: boolean;
	closeModal: () => void;
}

export default function ModalCreatePost({ show, closeModal }: Props) {
	const [formData, setFormData] = useState<{ imageFile: File | null; description: string }>({
		imageFile: null,
		description: '',
	});

	const fileSelectedHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
		const fileName = e.target.value;
		const idxDot = fileName.lastIndexOf('.') + 1;
		const extFile = fileName.substring(idxDot, fileName.length).toLowerCase();

		if (!(extFile == 'jpg' || extFile == 'png')) {
			alert('Only jpg and png files are allowed!');
			e.target.value = '';
			return;
		}

		if (e.target.files === null) {
			alert('Error!');
			return;
		}

		const file = e.target.files[0];
		setFormData((prev) => ({ ...prev, imageFile: file }));

		console.log('Archivo valido');
	};

	const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault();

		try {
			console.log(formData);
		} catch (err) {
			console.error(err);
		}
	};

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
							className='text-gray-50 bg-transparent hover:bg-gray-400 rounded-lg text-sm size-12 ms-auto inline-flex justify-center items-center absolute top-0 right-0 font-bold'
							onClick={closeModal}
							title='Close modal'
						>
							<Close />
						</button>

						<form className='max-w-lg mx-auto px-4 py-10' onSubmit={onSubmit}>
							<label className='block mb-6 text-sm font-medium text-gray-900'>
								Upload image
								<input
									name='imageFile'
									className='block w-full text-sm text-gray-900 border border-gray-300 rounded-lg cursor-pointer bg-gray-50 focus:outline-none'
									type='file'
									accept='image/png, image/jpeg'
									onChange={fileSelectedHandler}
								/>
							</label>

							<label className='block mb-6 text-sm font-medium text-gray-900'>
								Your description
								<textarea
									rows={4}
									className='block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500'
									placeholder='Leave the description...'
									name='description'
									value={formData.description}
									onChange={(e) => setFormData((prev) => ({ ...prev, description: e.target.value }))}
								></textarea>
							</label>

							<button
								type='submit'
								className='text-sm text-center bg-blue-500 disabled:bg-blue-300 text-white py-1 rounded font-medium w-full'
							>
								Create Post
							</button>
						</form>
					</div>
				</div>
			</div>
		</Modal>
	);
}
