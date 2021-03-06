import * as React from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../../hooks/useAuth';
import { useLogin } from '../../hooks/useLogin';
import LoginButton from './components/LoginButton';
import ErrorBox from './components/ErrorBox';
import CheckBox from './components/CheckBox';
import LoginInput from './components/LoginInput';
import Logo from './components/Logo';
import { AxiosError } from 'axios';
import { formatErrorMessage } from './utils';

type LoginProps = {};

const Login: React.FC<LoginProps> = (props) => {
    const [remember, setRemember] = React.useState(false);
    const { loading, errors, request } = useLogin();
    const { isAuthenticated } = useAuth();
    const navigate = useNavigate();

    React.useEffect(() => {
        if (isAuthenticated) {
            navigate('/request-quote');
        }
    }, [isAuthenticated, navigate]);

    const onSubmit = async (event: React.SyntheticEvent<HTMLFormElement>) => {
        event.preventDefault();
        const form = event.currentTarget;
        const formElements = form.elements as typeof form.elements & {
            username: { value: string };
            password: { value: string };
        };
        const username = formElements.username.value;
        const password = formElements.password.value;

        await request({ username, password });
    };

    const hasErrors = errors.length > 0;
    const errorMessages = errors.map((err: AxiosError) => formatErrorMessage(err));

    return (
        <div className="flex justify-center relative items-center h-4/5 md:h-2/5">
            <Logo />
            <form onSubmit={onSubmit} className="bg-white flex flex-col rounded w-full lg:w-4/12 px-8 py-4">
                <div className="flex justify-center items-center text-gray-500 text-2xl mt-10 mb-8">Welcome at Qover</div>

                <LoginInput id="username" label="Email" type="text" />
                <LoginInput id="password" label="Password" type="password" containerClassName="mt-6" />
                <div className="flex justify-between items-center mt-12 text-xs text-blue-500 font-semibold">
                    <CheckBox selected={remember} onSelect={() => setRemember(!remember)} label="Remember me" />
                    <div>Forgot your password?</div>
                </div>
                <div className="mt-12 mb-4 flex flex-col">
                    {hasErrors && <ErrorBox message={errorMessages.join(', ')} className="mb-2" />}
                    <LoginButton loading={loading} type="submit">
                        Sign in to your account
                    </LoginButton>
                </div>
            </form>
            <LoginButton className="absolute bottom-0 w-full lg:w-4/12 md:-mb-32 lg:-mb-24 xl:-mb-12" secondary>
                Don't have an account? <u>Ask access</u>
            </LoginButton>
        </div>
    );
};

export default Login;
