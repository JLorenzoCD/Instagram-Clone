import Menu from './components/Menu';

interface Props {
	children: JSX.Element | JSX.Element[];
}

function Layout({ children }: Props) {
	// 72px
	return (
		<div className='bg-zinc-50 sm:grid sm:grid-cols-[72px_1fr] lg:grid-cols-[300px_1fr]'>
			<div className='border-r-2'>
				<Menu />
			</div>
			<main>{children}</main>
		</div>
	);
}

export default Layout;
