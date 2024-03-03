import { useModalOption } from '@/hooks/useModalOption';
import { useModalCreatePost } from '@/hooks/useModalCreatePost';

import ModalOptionProvider from '@/context/ModalOptionProvider';
import ModalCreatePostProvider from '@/context/ModalCreatePostProvider';

import { Link } from 'react-router-dom';

import InstagramText from './icons/InstagramText';
import Instagram from './icons/Instagram';

import { menuLinks } from '@/consts/menuLinks';

export default function Menu() {
	return (
		<ModalOptionProvider>
			<ModalCreatePostProvider>
				<header className='bg-zinc-50 fixed sm:sticky lg:p-4 z-10 bottom-0 sm:bottom-auto sm:top-0'>
					<Link to='/' className='hidden sm:block p-5 mb-6'>
						<InstagramText className='hidden lg:block' />
						<Instagram className='lg:hidden' />
					</Link>

					<MenuLinksDesktop />
					<MenuLinksMobile />
				</header>
			</ModalCreatePostProvider>
		</ModalOptionProvider>
	);
}

function MenuLinksDesktop() {
	const { openModal: openModalOption } = useModalOption();
	const { openModal: openModalCreatePost } = useModalCreatePost();

	return (
		<ul className='hidden sm:block pl-1'>
			<MenuItem data={menuLinks.homeLink} />
			<MenuItem data={menuLinks.searchLink} disabled />
			<MenuItem data={menuLinks.exploreLink} />
			<MenuItem data={menuLinks.reelsLink} disabled />
			<MenuItem data={menuLinks.messageLink} disabled />
			<MenuItem data={menuLinks.notificationLink} disabled />
			<MenuItem data={menuLinks.createLink} onClick={openModalCreatePost} />
			<MenuItem data={menuLinks.profileLink} />
			<MenuItem data={menuLinks.configLink} onClick={openModalOption} />
		</ul>
	);
}

function MenuLinksMobile() {
	const { openModal: openModalCreatePost } = useModalCreatePost();

	return (
		<ul className='flex justify-evenly sm:hidden w-screen'>
			<MenuItem data={menuLinks.homeLink} isMobile />
			<MenuItem data={menuLinks.exploreLink} isMobile />
			<MenuItem data={menuLinks.reelsLink} isMobile disabled />
			<MenuItem
				data={menuLinks.createLink}
				isMobile
				onClick={() => {
					console.log('ModalCreatePost');
					openModalCreatePost();
				}}
			/>
			<MenuItem data={menuLinks.messageLink} isMobile disabled />
			<MenuItem data={menuLinks.profileLink} isMobile />
		</ul>
	);
}

interface Props {
	data: {
		icon: (props: React.SVGProps<SVGSVGElement>) => JSX.Element;
		text: string;
		to?: string;
	};
	onClick?: (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
	isMobile?: boolean;
	disabled?: boolean;
}
function MenuItem({ data, onClick, disabled, isMobile }: Props) {
	const className = `w-full flex ${isMobile ? 'justify-center py-3' : 'flex p-4 lg:p-4'} ${
		disabled ? 'text-slate-400 pointer-events-none' : 'hover:bg-zinc-200'
	}`;

	function InternalElement() {
		return (
			<>
				<span className='size-6'>
					<data.icon className='size-full' stroke='gray' />
				</span>
				{!isMobile && (
					<>
						{' '}
						<p className='hidden ml-4 lg:block'>{data.text}</p>
					</>
				)}
			</>
		);
	}

	if (data.to !== undefined)
		return (
			<li className={isMobile ? 'flex-1' : ''}>
				<Link to={data.to} className={className} onClick={(e) => (disabled ? e.preventDefault() : null)}>
					<InternalElement />
				</Link>
			</li>
		);

	return (
		<li className={isMobile ? 'flex-1' : ''}>
			<button disabled={disabled} onClick={onClick} className={className}>
				<InternalElement />
			</button>
		</li>
	);
}
