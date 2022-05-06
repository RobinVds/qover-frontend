import * as React from 'react';
import Header from '../components/layout/Header';
import Login from '../components/Login';

type LoginPageProps = {};

const LoginPage: React.FC<LoginPageProps> = () => {
    return (
        <div className="bg-login-pattern h-full">
            <Header />
            <div className="container mx-auto h-full flex flex-col">
                <div className="flex justify-center flex-grow flex-col">
                    <Login />
                </div>
            </div>
        </div>
    );
};

export default LoginPage;
