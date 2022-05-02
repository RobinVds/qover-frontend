import * as React from 'react';
import { IndexRouteProps, LayoutRouteProps, PathRouteProps, Route, useNavigate } from 'react-router-dom';
import { useAuth } from '../../hooks/useAuth';

const ProtectedRoute: React.FC<PathRouteProps | LayoutRouteProps | IndexRouteProps> = (props) => {
    const { isAuthenticated } = useAuth();
    const navigate = useNavigate();

    React.useEffect(() => {
        if (!isAuthenticated) navigate('/login');
    }, [isAuthenticated]);

    return <Route {...props} />;
};

export default ProtectedRoute;
