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

interface Props extends React.HTMLAttributes<HTMLElement> {}

function Menu(props: Props) {
	const links = [
		{
			to: '#',
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
			to: '#',
			text: 'Perfil',
			icon: SkeletonProfile,
		},
		{
			to: '#',
			text: 'Mas',
			icon: Config,
		},
	];

	return (
		<header {...props}>
			<div className='p-5 mb-6'>
				<InstagramText className='hidden lg:block' />
				<Instagram className='lg:hidden' />
			</div>
			<ul>
				{links.map((link) => (
					<li key={link.text} className='py-4 pl-5 lg:p-4'>
						<a href={link.to} className='flex'>
							<span className='size-6 mr-5'>
								<link.icon className='size-full' />
							</span>{' '}
							<p className='hidden lg:block'>{link.text}</p>
						</a>
					</li>
				))}
			</ul>
		</header>
	);
}

export default Menu;
