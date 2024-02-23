import { Navigate, useLocation } from 'react-router-dom';

import { useUserStore } from '@/store/user';

interface Props {
	children: JSX.Element;
}

function GuestRoute({ children }: Props) {
	const isAuth = useUserStore((state) => !!state.currentUser);
	const location = useLocation();

	const routeDefaultUserLogged = '/';

	if (isAuth) {
		const from = location.state?.from?.pathname || routeDefaultUserLogged;
		return <Navigate to={from} replace />;
	}
	return children;
}

export default GuestRoute;
