import { Navigate, useLocation } from 'react-router-dom';

import { useUserStore } from '@/store/user';

interface Props {
	children: JSX.Element;
}

function PrivateRoute({ children }: Props) {
	const isAuth = useUserStore((state) => !!state.currentUser);
	const location = useLocation();

	const pathLogin = '/user/login';

	if (!isAuth) {
		return <Navigate to={pathLogin} state={{ from: location }} replace />;
	}
	return children;
}

export default PrivateRoute;
