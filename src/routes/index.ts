import routes from '../config/router';
import EmployeePage from '~features/employee/page';
import HomePage from '~features/home/page';

// Public routes
const publicRoutes: [] = [];

// auth routes
const authRoutes = [
    {
        path: routes.home,
        component: HomePage,
    },
    {
        path: routes.employee,
        component: EmployeePage,
    },
];

export { publicRoutes, authRoutes };
