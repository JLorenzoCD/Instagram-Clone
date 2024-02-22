import { useState } from 'react';

import { Link } from 'react-router-dom';

import InputSession from '../../components/InputSession';
import InstagramText from '../../components/icons/InstagramText';

export default function Singup() {
	const [formData, setFormData] = useState({ email: '', username: '', password: '', passwordConfirm: '' });
	// TODO: Mejorar error
	const [error, setError] = useState(false);

	// const navigate = useNavigate();

	const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault();
		setError(false);

		try {
			// navigate('/');
			console.log(formData);
		} catch (e) {
			setError(true);
		}
	};

	const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		setFormData((prev) => ({
			...prev,
			[e.target.name]: e.target.value,
		}));
	};

	return (
		<>
			<div className='bg-white border border-gray-300 w-80 py-10 flex items-center flex-col mb-3 relative flex-1'>
				<InstagramText />
				<form className='mt-8 w-64 flex flex-col' onSubmit={handleSubmit}>
					<InputSession
						autoFocus
						name='email'
						placeholder='Email'
						type='text'
						value={formData.email}
						onChange={handleChange}
					/>
					<InputSession
						name='email'
						placeholder='Username'
						type='text'
						value={formData.username}
						onChange={handleChange}
					/>

					<InputSession
						name='password'
						placeholder='Password'
						type='password'
						value={formData.password}
						onChange={handleChange}
					/>
					<InputSession
						name='passwordConfirm'
						placeholder='Confirm password'
						type='password'
						value={formData.passwordConfirm}
						onChange={handleChange}
					/>

					<button type='submit' className='text-sm text-center bg-blue-300 text-white py-1 rounded font-medium'>
						Sign up
					</button>
				</form>

				<div className={`text-sm text-center text-red-500 absolute bottom-20 px-8 ${error ? '' : 'hidden'}`}>
					Sorry, your email/password was incorrect. Please double-check and try again.
				</div>
			</div>

			<div className='bg-white border border-gray-300 text-center w-80 py-4'>
				<span className='text-sm'>Do have an account?</span>
				<Link to='/user/login' className='text-blue-500 text-sm font-semibold ml-1 cursor-pointer'>
					Log In
				</Link>
			</div>
		</>
	);
}
