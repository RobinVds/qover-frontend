import * as React from 'react';
import { FiChevronLeft } from 'react-icons/fi';
import Login from '../components/Login';

type LoginPageProps = {};

const Header: React.FC = () => (
    <div className="absolute w-screen h-8 top-0 left-0 z-10">
        <div className="bg-white bg-opacity-10 flex h-full z-10">
            <div className="container mx-auto text-white h-8 flex items-center text-xs">
                <FiChevronLeft /> QOVER.ME
            </div>
        </div>
    </div>
);

const LoginPage: React.FC<LoginPageProps> = () => {
    return (
        <div className="bg-login-pattern w-full h-full">
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
