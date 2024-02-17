import { useEffect, useState } from 'react';

import { useModalPost } from '../hooks/useModalPost';

import PostService from '../services/post';

import PostSoloImage from '../components/PostSoloImage';

import { IPostSoloImage } from '../types/post';

function Explore() {
	const { openModal } = useModalPost();

	const [matrixExploreData, setMatrizExploreData] = useState<undefined | IPostSoloImage[][]>(undefined);

	useEffect(() => {
		const postService = new PostService();

		(async () => {
			const explorePostData = await postService.getExplore();

			const data = [];
			const COLS = 5;
			for (let i = 0; i < explorePostData.length; i += COLS) {
				data.push(explorePostData.slice(i, i + COLS));
			}

			setMatrizExploreData(data);
		})();
	}, []);

	return (
		<section>
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
			{matrixExploreData !== undefined &&
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
									{fila.map((post, index) => {
										if (index)
											return (
												<PostSoloImage
													key={post.id}
													className='size-full'
													onClick={() => openModal(post.id)}
													data={post}
												/>
											);
									})}
								</div>
							</>
						)}
					</div>
				))}
		</section>
	);
}

export default Explore;
