import React from 'react';
import { Route, Routes, useNavigate } from 'react-router-dom';
import NotFound from './components/NotFound';
import GlobalStyle from './config/styles';
import AppLayout from './layouts';
import { authRoutes, privateRoutes } from './routes';

function App() {
    const navigate = useNavigate();

    const [isLogged, setIsLogged] = React.useState(false);

    React.useEffect(() => {
        const logged = localStorage.getItem('isLogged');

        if (logged) {
            setIsLogged(true);
        } else {
            navigate('/login');
        }
    }, [navigate]);

    return (
        <>
            <Routes>
                {(isLogged ? privateRoutes : authRoutes).map((route, index) => {
                    let Page = route.component;
                    let Layout = React.Fragment;
                    if (isLogged) {
                        Layout = AppLayout;
                    }
                    return (
                        <Route
                            key={index}
                            path={route.path}
                            element={
                                <Layout>
                                    <Page />
                                </Layout>
                            }
                        />
                    );
                })}
                <Route path="*" element={<NotFound />} />
            </Routes>
            <GlobalStyle />
        </>
    );
}

export default App;
