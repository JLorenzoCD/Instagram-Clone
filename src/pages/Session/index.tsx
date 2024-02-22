import { Outlet } from 'react-router-dom';

export default function Session() {
	return (
		<div className='h-screen bg-gray-50 flex flex-col justify-center items-center'>
			<div className='flex flex-column'>
				<div className='pr-10 hidden md:block'>
					<img src='/images/phone-instagram.png' className='w-full max-w-80' />
				</div>
				<div className='h-full flex flex-col'>
					<Outlet />
				</div>
			</div>
		</div>
	);
}
