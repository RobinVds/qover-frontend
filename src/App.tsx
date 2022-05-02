import * as React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import ProtectedRoute from './components/routes/ProtectedRoute';
import DisplayQuotesPage from './pages/DisplayQuotes';
import LoginPage from './pages/Login';
import RequestQuotePage from './pages/RequestQuote';

type AppProps = {};

const App: React.FC<AppProps> = (props) => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<LoginPage />} />
                <Route path="/login" element={<LoginPage />} />
                <ProtectedRoute path="/request-quote" element={<RequestQuotePage />} />
                <ProtectedRoute path="/display-quotes" element={<DisplayQuotesPage />} />
                <ProtectedRoute path="*" element={<div>Page not found</div>} />
            </Routes>
        </BrowserRouter>
    );
};

export default App;
