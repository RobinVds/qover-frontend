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
                <Route
                    path="/request-quote"
                    element={
                        <ProtectedRoute>
                            <RequestQuotePage />
                        </ProtectedRoute>
                    }
                />
                <Route
                    path="/display-quotes"
                    element={
                        <ProtectedRoute>
                            <DisplayQuotesPage />
                        </ProtectedRoute>
                    }
                />
                <Route
                    path="*"
                    element={
                        <ProtectedRoute>
                            <div>Page not found</div>
                        </ProtectedRoute>
                    }
                />
            </Routes>
        </BrowserRouter>
    );
};

export default App;
