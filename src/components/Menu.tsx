import { Link } from 'react-router-dom';

import Home from './icons/Home';
import Search from './icons/Search';
import Explore from './icons/Explore';
import Reels from './icons/Reels';
import Message from './icons/Message';
import Heart from './icons/Heart';
import Create from './icons/Create';
import Config from './icons/Config';
import SkeletonProfile from './skeleton/Profile';

import InstagramText from './icons/InstagramText';
import Instagram from './icons/Instagram';

function Menu() {
	const links = [
		{
			to: '/',
			text: 'Inicio',
			icon: Home,
		},
		{
			to: '#',
			text: 'Buscar',
			icon: Search,
		},
		{
			to: '#',
			text: 'Explorar',
			icon: Explore,
		},
		{
			to: '#',
			text: 'Reels',
			icon: Reels,
		},
		{
			to: '#',
			text: 'Mensajes',
			icon: Message,
		},
		{
			to: '#',
			text: 'Notificaciones',
			icon: Heart,
		},
		{
			to: '#',
			text: 'Crear',
			icon: Create,
		},
		{
			to: '/profile',
			text: 'Perfil',
			icon: SkeletonProfile,
		},
		{
			to: '#',
			text: 'Mas',
			icon: Config,
		},
	];

	const linksMobile = [
		{
			to: '/',
			text: 'Inicio',
			icon: Home,
		},
		{
			to: '#',
			text: 'Explorar',
			icon: Explore,
		},
		{
			to: '#',
			text: 'Reels',
			icon: Reels,
		},
		{
			to: '#',
			text: 'Crear',
			icon: Create,
		},
		{
			to: '#',
			text: 'Mensajes',
			icon: Message,
		},
		{
			to: '/profile',
			text: 'Perfil',
			icon: SkeletonProfile,
		},
	];

	return (
		<header className='bg-zinc-50 fixed lg:p-4 z-10 bottom-0 sm:bottom-auto sm:top-0'>
			<div className='hidden sm:block p-5 mb-6'>
				<InstagramText className='hidden lg:block' />
				<Instagram className='lg:hidden' />
			</div>
			<ul className='hidden sm:block pl-1'>
				{links.map((link) => (
					<li key={link.text}>
						<Link to={link.to} className='flex p-4 lg:p-4'>
							<span className='size-6'>
								<link.icon className='size-full' />
							</span>{' '}
							<p className='hidden ml-4 lg:block'>{link.text}</p>
						</Link>
					</li>
				))}
			</ul>

			<ul className='flex justify-evenly sm:hidden w-screen'>
				{linksMobile.map((link) => (
					<li key={link.text}>
						<Link to={link.to} className='flex p-3'>
							<span className='size-6'>
								<link.icon className='size-full' />
							</span>{' '}
							<p className='hidden lg:block'>{link.text}</p>
						</Link>
					</li>
				))}
			</ul>
		</header>
	);
}

export default Menu;
