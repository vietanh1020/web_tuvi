import MainLayout from '../components/Layout/MainLayout';
import SvHome from '~/pages/Home';
import Login from '~/pages/Login';

const privateRoutes = [];

const publicRoutes = [
    { path: '/login', component: Login },
    { path: '/', component: SvHome, layout: MainLayout },
];

export { privateRoutes, publicRoutes };
