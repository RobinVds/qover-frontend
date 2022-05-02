import * as React from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../../hooks/useAuth';

type ProtectedRouteProps = {
    children: React.ReactNode;
};
const ProtectedRoute: React.FC<ProtectedRouteProps> = ({ children }) => {
    const { isAuthenticated } = useAuth();
    const navigate = useNavigate();

    React.useEffect(() => {
        if (!isAuthenticated) navigate('/login');
    }, [isAuthenticated, navigate]);

    return <>{children}</>;
};

export default ProtectedRoute;
