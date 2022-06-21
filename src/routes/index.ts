import routes from '~/config/router';
import LoginPage from '~/features/auth/pages/Login';
import EmployeePage from '~features/employee/page';
import HomePage from '~features/home/page';

// Public routes
const privateRoutes = [
    {
        path: routes.home,
        component: HomePage,
    },
    {
        path: routes.employee,
        component: EmployeePage,
    },
];

// auth routes
const authRoutes = [
    {
        path: routes.login,
        component: LoginPage,
    },
];

export { privateRoutes, authRoutes };
