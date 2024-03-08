import { useState } from 'react';

import Close from './icons/Close';

import Modal from './Modal';

import { ACCEPTED_IMAGE_TYPES } from '@/consts/post';

import { createPostSchema } from '@/utilities/schema/createPostSchema';

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

		if (e.target.files === null || !e.target.files.length || !fileName.trim().length) {
			return;
		}

		const file = e.target.files[0];

		if (!ACCEPTED_IMAGE_TYPES.includes(file.type)) {
			alert('Only .jpg, .jpeg and .png files are allowed!');
			e.target.value = '';
			return;
		}

		setFormData((prev) => ({ ...prev, imageFile: file }));
	};

	const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault();

		try {
			const clearData = createPostSchema.parse(formData);
			console.log(clearData);
		} catch (err) {
			console.error(err);
		}
	};

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
		</Modal>
	);
}
