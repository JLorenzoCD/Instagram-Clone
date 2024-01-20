import { Link } from 'react-router-dom';

import { allLinks, mobileLinks } from '../consts/menuLinks';

import InstagramText from './icons/InstagramText';
import Instagram from './icons/Instagram';

function Menu() {
	return (
		<header className='bg-zinc-50 fixed sm:sticky lg:p-4 z-10 bottom-0 sm:bottom-auto sm:top-0'>
			<Link to='/' className='hidden sm:block p-5 mb-6'>
				<InstagramText className='hidden lg:block' />
				<Instagram className='lg:hidden' />
			</Link>
			<ul className='hidden sm:block pl-1'>
				{allLinks.map((link) => (
					<li key={link.text}>
						<Link to={link.to} className='flex p-4 lg:p-4 hover:bg-zinc-200'>
							<span className='size-6'>
								<link.icon className='size-full' />
							</span>{' '}
							<p className='hidden ml-4 lg:block'>{link.text}</p>
						</Link>
					</li>
				))}
			</ul>

			<ul className='flex justify-evenly sm:hidden w-screen'>
				{mobileLinks.map((link) => (
					<li key={link.text} className='flex-1'>
						<Link to={link.to} className='flex justify-center py-3 hover:bg-zinc-200'>
							<span className='size-6'>
								<link.icon className='size-full' />
							</span>
						</Link>
					</li>
				))}
			</ul>
		</header>
	);
}

export default Menu;
