import { useState } from 'react';

import { Link } from 'react-router-dom';

import InstagramText from '../../components/icons/InstagramText';
import InputSession from '../../components/InputSession';

export default function Login() {
	const [formData, setFormData] = useState({ email: '', password: '' });
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
						placeholder='Phone number, username, or email'
						type='text'
						value={formData.email}
						onChange={handleChange}
					/>

					<InputSession
						name='password'
						placeholder='Password'
						type='password'
						value={formData.password}
						onChange={handleChange}
					/>

					<button type='submit' className='text-sm text-center bg-blue-300 text-white py-1 rounded font-medium'>
						Log In
					</button>
				</form>

				<div className={`text-sm text-center text-red-500 absolute bottom-20 px-8 ${error ? '' : 'hidden'}`}>
					Sorry, your email/password was incorrect. Please double-check and try again.
				</div>
			</div>

			<div className='bg-white border border-gray-300 text-center w-80 py-4'>
				<span className='text-sm'>Don't have an account?</span>
				<Link to='/user/singup' className='text-blue-500 text-sm font-semibold ml-1 cursor-pointer'>
					Sign up
				</Link>
			</div>
		</>
	);
}
