import Home from '@/components/icons/Home';
import Search from '@/components/icons/Search';
import Explore from '@/components/icons/Explore';
import Reels from '@/components/icons/Reels';
import Message from '@/components/icons/Message';
import Heart from '@/components/icons/Heart';
import Create from '@/components/icons/Create';
import Config from '@/components/icons/Config';
import SkeletonProfile from '@/components/skeleton/Profile';

export const menuLinks = {
	homeLink: {
		to: '/',
		text: 'Inicio',
		icon: Home,
	},
	searchLink: {
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
		text: 'Notificaciones',
		icon: Heart,
	},
	createLink: {
		text: 'Crear',
		icon: Create,
	},
	profileLink: {
		to: '/profile',
		text: 'Perfil',
		icon: SkeletonProfile,
	},
	configLink: {
		text: 'Mas',
		icon: Config,
	},
};

export const allLinks = [
	menuLinks.homeLink,
	menuLinks.searchLink,
	menuLinks.exploreLink,
	menuLinks.reelsLink,
	menuLinks.messageLink,
	menuLinks.notificationLink,
	menuLinks.createLink,
	menuLinks.profileLink,
	menuLinks.configLink,
];

export const mobileLinks = [
	menuLinks.homeLink,
	menuLinks.exploreLink,
	menuLinks.reelsLink,
	menuLinks.createLink,
	menuLinks.messageLink,
	menuLinks.profileLink,
];
