import { exploreData } from '../data/explore';

function Explore() {
	const matrixExploreData = [];
	const COLS = 5;
	for (let i = 0; i < exploreData.length; i += COLS) {
		matrixExploreData.push(exploreData.slice(i, i + COLS));
	}

	return (
		<section>
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
			{/* TODO: Tengo que modificar el array para que sea una matriz de 5 columnas */}
			{!!matrixExploreData &&
				!!matrixExploreData.length &&
				matrixExploreData.map((fila, index) => (
					<div key={`section-${index}`} className='grid grid-cols-3 gap-1 mb-1 max-h-screen grid-rows-1'>
						{!!fila && !!fila.length && (
							<>
								{/* Este tiene que ir a la derecha o a la izquierda y debe ser el doble de alto */}
								<PostExplore className={`${index % 2 === 0 ? 'order-2' : ''}`} srcImage={fila[0]} />

								<div className='col-span-2 grid grid-cols-2 grid-rows-2 gap-1'>
									{fila.splice(1, 5).map((srcImage, index) => (
										// Este es un cuadrado  que se repite 4 veces
										<PostExplore key={srcImage + index} srcImage={srcImage as string} />
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

interface PropsPostExplore {
	className?: string;
	srcImage: string;
}

function PostExplore({ className, srcImage }: PropsPostExplore) {
	/*
	TODO: Tengo que hacer logica para que si la pantalla es chica valla al path de la publicacion, y en sao de ser pantalla grande me habra un modal
	*/
	return (
		<article className={className}>
			<img src={srcImage} className='block size-full object-cover object-center' />
		</article>
	);
}
