import { useState } from 'react';

import { Link } from 'react-router-dom';

import { menuLinks } from '@/consts/menuLinks';

import InstagramText from './icons/InstagramText';
import Instagram from './icons/Instagram';

import ModalOptions from './ModalOptions';

export default function Menu() {
	const [show, setShow] = useState<boolean>(false);

	const openModal = () => setShow(true);
	const closeModal = () => setShow(false);

	return (
		<>
			{show && <ModalOptions closeModal={closeModal} show={show} />}

			<header className='bg-zinc-50 fixed sm:sticky lg:p-4 z-10 bottom-0 sm:bottom-auto sm:top-0'>
				<Link to='/' className='hidden sm:block p-5 mb-6'>
					<InstagramText className='hidden lg:block' />
					<Instagram className='lg:hidden' />
				</Link>

				<MenuLinksDesktop openModal={openModal} />
				<MenuLinksMobile />
			</header>
		</>
	);
}

function MenuLinksDesktop({ openModal }: { openModal: () => void }) {
	return (
		<ul className='hidden sm:block pl-1'>
			<MenuItem data={menuLinks.homeLink} />
			<MenuItem data={menuLinks.searchLink} />
			<MenuItem data={menuLinks.exploreLink} />
			<MenuItem data={menuLinks.reelsLink} />
			<MenuItem data={menuLinks.messageLink} />
			<MenuItem data={menuLinks.notificationLink} />
			<MenuItem data={menuLinks.createLink} />
			<MenuItem data={menuLinks.profileLink} />
			<MenuItem data={menuLinks.configLink} onClick={openModal} />
		</ul>
	);
}

function MenuLinksMobile() {
	return (
		<ul className='flex justify-evenly sm:hidden w-screen'>
			<MenuItem data={menuLinks.homeLink} isMobile />
			<MenuItem data={menuLinks.exploreLink} isMobile />
			<MenuItem data={menuLinks.reelsLink} isMobile />
			<MenuItem data={menuLinks.createLink} isMobile />
			<MenuItem data={menuLinks.messageLink} isMobile />
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
}
function MenuItem({ data, onClick, isMobile }: Props) {
	if (data.to !== undefined)
		return (
			<li className={isMobile ? 'flex-1' : ''}>
				<Link to={data.to} className={`flex hover:bg-zinc-200 ${isMobile ? 'justify-center py-3' : 'flex p-4 lg:p-4'}`}>
					<span className='size-6'>
						<data.icon className='size-full' />
					</span>
					{!isMobile && (
						<>
							{' '}
							<p className='hidden ml-4 lg:block'>{data.text}</p>
						</>
					)}
				</Link>
			</li>
		);

	return (
		<li className={isMobile ? 'flex-1' : ''}>
			<button
				onClick={onClick}
				className={`w-full flex hover:bg-zinc-200 ${isMobile ? 'justify-center py-3' : 'flex p-4 lg:p-4'}`}
			>
				<span className='size-6'>
					<data.icon className='size-full' />
				</span>
				{!isMobile && (
					<>
						{' '}
						<p className='hidden ml-4 lg:block'>{data.text}</p>
					</>
				)}
			</button>
		</li>
	);
}
