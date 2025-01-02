import SidebarLayout from '~/Layout/SidebarLayout';
import SvHome from '~/pages/Home';
import Login from '~/pages/Login';

const privateRoutes = [{ path: '/', component: SvHome, layout: SidebarLayout }];

const publicRoutes = [{ path: '/login', component: Login }];

export { privateRoutes, publicRoutes };
