import { Route, Routes } from 'react-router-dom';
import GlobalStyle from './config/styles';
import AppLayout from './layouts';
import { authRoutes } from './routes';

function App() {
    return (
        <AppLayout>
            <Routes>
                {authRoutes.map((route, index) => {
                    let Page = route.component;

                    return <Route key={index} path={route.path} element={<Page />} />;
                })}
                {/* <Route path="*" element={<ErrorPage />} /> */}
            </Routes>
            <GlobalStyle />
        </AppLayout>
    );
}

export default App;
