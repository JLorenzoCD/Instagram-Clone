import Heart from '../components/icons/Heart';
import Posts from '../components/icons/Posts';
import Reels from '../components/icons/Reels';
import Tagged from '../components/icons/Tagged';

function Profile() {
	const data = {
		profileImage:
			'https://images.unsplash.com/photo-1502791451862-7bd8c1df43a7?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=700&q=80',
		username: 'mrtravlerrr_2',
		numberPost: 50,
		numberFollowers: 123,
		numberFollowing: 157,
		description: 'Mr Travlerrr...\nTravel, Nature and Music\nLorem ipsum dolor sit amet consectetur',
	};

	return (
		<main className='bg-gray-100 bg-opacity-25'>
			<div className='lg:w-8/12 lg:mx-auto mb-8'>
				<header className='flex flex-wrap items-center p-4 md:py-8'>
					<div className='md:w-3/12 md:ml-16'>
						{/* profile image */}
						<img
							className='w-20 h-20 md:w-40 md:h-40 object-cover rounded-full border-2 border-pink-600 p-1'
							src={data.profileImage}
							alt={`${data.username}-profile-image`}
						/>
					</div>
					{/* profile meta */}
					<div className='w-8/12 md:w-7/12 ml-4'>
						<div className='md:flex md:flex-wrap md:items-center mb-4'>
							<h2 className='text-3xl inline-block font-light sm:mr-5 mb-2 sm:mb-0'>{data.username}</h2>
							{/* follow button */}
							<a
								href='#'
								className='bg-blue-500 px-2 py-1 text-white font-semibold text-sm rounded block text-center sm:inline-block'
							>
								Follow
							</a>
						</div>
						{/* post, following, followers list for medium screens */}
						<ul className='hidden md:flex space-x-8 mb-4'>
							<li>
								<span className='font-semibold'>{data.numberPost} </span>
								posts
							</li>
							<li>
								<span className='font-semibold'>{data.numberFollowers} </span>
								followers
							</li>
							<li>
								<span className='font-semibold'>{data.numberFollowing} </span>
								following
							</li>
						</ul>
						{/* user meta form medium screens */}
						<div className='hidden md:block'>
							{data.description.split('\n').map((paragraph) => (
								<p>{paragraph}</p>
							))}
						</div>
					</div>
					{/* user meta form small screens */}
					<div className='md:hidden text-sm my-2'>
						{data.description.split('\n').map((paragraph) => (
							<p>{paragraph}</p>
						))}
					</div>
				</header>
				{/* posts */}
				<div className='px-px md:px-3'>
					{/* user following for mobile only */}
					<ul className='flex md:hidden justify-around space-x-8 border-t text-center p-2 text-gray-600 leading-snug text-sm'>
						<li>
							<span className='font-semibold text-gray-800 block'>{data.numberPost} </span>
							posts
						</li>
						<li>
							<span className='font-semibold text-gray-800 block'>{data.numberFollowers} </span>
							followers
						</li>
						<li>
							<span className='font-semibold text-gray-800 block'>{data.numberFollowing} </span>
							following
						</li>
					</ul>
					{/* insta freatures */}
					<ul className='flex items-center justify-around md:justify-center space-x-12 uppercase tracking-widest font-semibold text-xs text-gray-600 border-t'>
						{/* posts tab is active */}
						<li className='md:border-t md:border-gray-700 md:-mt-px md:text-gray-700 flex-1  flex justify-center'>
							<a className='inline-block p-3' href='#'>
								<Posts className='size-6 m-auto' />
								<span className='hidden md:inline'>post</span>
							</a>
						</li>
						<li className='flex-1 flex justify-center'>
							<a className='inline-block p-3' href='#'>
								<Reels className='size-6 m-auto' />
								<span className='hidden md:inline'>reels</span>
							</a>
						</li>
						<li className='flex-1 flex justify-center'>
							<a className='inline-block p-3' href='#'>
								<Tagged className='size-6 m-auto' />
								<span className='hidden md:inline'>tagged</span>
							</a>
						</li>
					</ul>
					{/* flexbox grid */}
					<div className='flex flex-wrap -mx-px md:-mx-3'>
						{/* column */}
						<UserPost />
						<UserPost />
						<UserPost />
						<UserPost />
						<UserPost />
						<UserPost />
						<UserPost />
						<UserPost />
					</div>
				</div>
			</div>
		</main>
	);
}

export default Profile;

export function UserPost() {
	const data = {
		image: 'https://stackdiary.com/300x500.png',
		alt: 'image',
		likes: 50,
		comments: 30,
	};

	return (
		<div className='w-1/3 p-px md:px-3'>
			<a href='#'>
				<article className='post bg-gray-100 text-white relative pb-full md:mb-6'>
					<img className='w-full h-full absolute left-0 top-0 object-cover' src={data.image} alt={data.alt} />
					{/* overlay*/}
					<div className='overlay bg-gray-800 bg-opacity-25 w-full h-full absolute left-0 top-0 hidden'>
						<div className='flex justify-center items-center space-x-4 h-full'>
							<span className='p-2'>
								<Heart />
								{data.likes}
							</span>
							<span className='p-2'>
								<i className='fas fa-comment' />
								{data.comments}
							</span>
						</div>
					</div>
				</article>
			</a>
		</div>
	);
}
