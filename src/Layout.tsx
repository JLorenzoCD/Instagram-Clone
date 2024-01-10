import Menu from './components/Menu';

interface Props {
	children: JSX.Element | JSX.Element[];
}

function Layout({ children }: Props) {
	return (
		<div className='bg-zinc-50 grid grid-cols-8'>
			<div className='col-span-2 border-r-2'>
				<Menu className='fixed p-4' />
			</div>
			<main className='col-span-6'>{children}</main>
		</div>
	);
}

export default Layout;
