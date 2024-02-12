import { useModalPost } from '../hooks/useModalPost';
import ModalPost from '../components/ModalPost';

import PostSoloImage from '../components/PostSoloImage';

import { explorePostData } from '../data/post';

function Explore() {
	const { modalData, closeModal, openModal } = useModalPost();

	const matrixExploreData = [];
	const COLS = 5;
	for (let i = 0; i < explorePostData.length; i += COLS) {
		matrixExploreData.push(explorePostData.slice(i, i + COLS));
	}

	return (
		<section>
			<ModalPost closeModal={closeModal} modalData={modalData} />

			<div>
				<label className='block m-2 text-sm font-medium text-gray-900'>
					<input
						name='searchPost'
						type='text'
						className='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5'
						placeholder='Buscar..'
						required
					/>
				</label>
			</div>
			{!!matrixExploreData &&
				!!matrixExploreData.length &&
				matrixExploreData.map((fila, index) => (
					<div key={`section-${index}-${fila[0].id}`} className='grid grid-cols-3 gap-1 mb-1 max-h-screen grid-rows-1'>
						{!!fila && !!fila.length && (
							<>
								{/* Este tiene que ir a la derecha o a la izquierda y debe ser el doble de alto */}
								<PostSoloImage
									className={`${index % 2 === 0 ? 'order-2' : ''} size-full`}
									onClick={() => openModal(fila[0].id)}
									data={fila[0]}
								/>

								<div className='col-span-2 grid grid-cols-2 grid-rows-2 gap-1'>
									{fila.splice(1, 5).map((post) => (
										<PostSoloImage key={post.id} className='size-full' onClick={() => openModal(post.id)} data={post} />
									))}
								</div>
							</>
						)}
					</div>
				))}
		</section>
	);
}

export default Explore;
