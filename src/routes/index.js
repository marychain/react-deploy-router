import { HomePage } from '../pages/home';
import { PublicPage } from '../pages/public';
import { PhotoPage } from '../pages/photo';
import { ContactPage } from '../pages/contact';

export const appRoutes = [
    {
        path: '/react-deploy-router',
        exact: true,
        component: HomePage
    },
    {
        path: '/photo',
        component: PhotoPage
    },
    {
        path: '/public',
        component: PublicPage
    },
    {
        path: '/contact',
        component: ContactPage
    }
];