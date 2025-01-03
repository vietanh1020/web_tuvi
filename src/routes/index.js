import MainLayout from '../components/Layout/MainLayout';
import SvHome from '~/pages/Home';
import Login from '~/pages/Login';

const privateRoutes = [];

const publicRoutes = [
  { path: '/login', component: Login },
  { path: '/register', component: Login },
  { path: '/me', component: SvHome, layout: MainLayout },

  { path: '/', component: SvHome, layout: MainLayout },
];

export { privateRoutes, publicRoutes };
