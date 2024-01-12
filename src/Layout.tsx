import Menu from './components/Menu';

interface Props {
	children: JSX.Element | JSX.Element[];
}

function Layout({ children }: Props) {
	// 72px
	return (
		<div className='bg-zinc-50 sm:grid grid-cols-[72px_1fr] lg:grid-cols-8'>
			<div className='lg:col-span-2 border-r-2'>
				<Menu />
			</div>
			<main className='lg:col-span-6'>{children}</main>
		</div>
	);
}

export default Layout;
