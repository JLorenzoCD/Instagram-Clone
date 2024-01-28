import Home from './../components/icons/Home';
import Search from './../components/icons/Search';
import Explore from './../components/icons/Explore';
import Reels from './../components/icons/Reels';
import Message from './../components/icons/Message';
import Heart from './../components/icons/Heart';
import Create from './../components/icons/Create';
import Config from './../components/icons/Config';
import SkeletonProfile from './../components/skeleton/Profile';

const lks = {
	homeLink: {
		to: '/',
		text: 'Inicio',
		icon: Home,
	},
	searchLink: {
		to: '#',
		text: 'Buscar',
		icon: Search,
	},
	exploreLink: {
		to: '/explore',
		text: 'Explorar',
		icon: Explore,
	},
	reelsLink: {
		to: '#',
		text: 'Reels',
		icon: Reels,
	},
	messageLink: {
		to: '#',
		text: 'Mensajes',
		icon: Message,
	},
	notificationLink: {
		to: '#',
		text: 'Notificaciones',
		icon: Heart,
	},
	createLink: {
		to: '#',
		text: 'Crear',
		icon: Create,
	},
	profileLink: {
		to: '/profile',
		text: 'Perfil',
		icon: SkeletonProfile,
	},
	configLink: {
		to: '#',
		text: 'Mas',
		icon: Config,
	},
};

export const allLinks = [
	lks.homeLink,
	lks.searchLink,
	lks.exploreLink,
	lks.reelsLink,
	lks.messageLink,
	lks.notificationLink,
	lks.createLink,
	lks.profileLink,
	lks.configLink,
];

export const mobileLinks = [
	lks.homeLink,
	lks.exploreLink,
	lks.reelsLink,
	lks.createLink,
	lks.messageLink,
	lks.profileLink,
];
