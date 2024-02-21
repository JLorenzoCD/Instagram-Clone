import Menu from './components/Menu';

export default function Layout({ children }: { children: JSX.Element | JSX.Element[] }) {
	return (
		<div className='bg-zinc-50 sm:grid sm:grid-cols-[72px_1fr] lg:grid-cols-[300px_1fr]'>
			<div className='border-r-2'>
				<Menu />
			</div>
			<main>{children}</main>
		</div>
	);
}
