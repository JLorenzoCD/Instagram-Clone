import { useModalPost } from '../hooks/useModalPost';
import ModalPost from '../components/ModalPost';

import PostSoloImage from '../components/PostSoloImage';

import { exploreData } from '../data/explore';

function Explore() {
	const { showModal, closeModal, openModal } = useModalPost();

	const matrixExploreData = [];
	const COLS = 5;
	for (let i = 0; i < exploreData.length; i += COLS) {
		matrixExploreData.push(exploreData.slice(i, i + COLS));
	}

	return (
		<section>
			<ModalPost closeModal={closeModal} showModal={showModal} />

			<div>
				<label className='block m-2 text-sm font-medium text-gray-900'>
					<input
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
					<div key={`section-${index}`} className='grid grid-cols-3 gap-1 mb-1 max-h-screen grid-rows-1'>
						{!!fila && !!fila.length && (
							<>
								{/* Este tiene que ir a la derecha o a la izquierda y debe ser el doble de alto */}
								<PostSoloImage
									className={`${index % 2 === 0 ? 'order-2' : ''} size-full`}
									onClick={openModal}
									data={{ image: fila[0], comments: 50, likes: 30, time: '', id: 0 }}
								/>

								<div className='col-span-2 grid grid-cols-2 grid-rows-2 gap-1'>
									{fila.splice(1, 5).map((srcImage, index) => (
										<PostSoloImage
											key={srcImage + index}
											className='size-full'
											onClick={openModal}
											data={{ image: srcImage, comments: 50, likes: 30, time: '', id: 0 }}
										/>
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
