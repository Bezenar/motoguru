import HomePage from '../components/pages/Homepage';
import Categories from '../components/pages/Categories';
import Bikes from '../components/pages/Bikes';
import FeedBacks from '../components/pages/Feedbacks';
import N_Common from '../types/common';

const routes: Array<N_Common.T_Route> = [
    {
        path: '/',
        element: <HomePage />,
        name: 'Homepage'
    },
    {
        path: '/categories',
        element: <Categories />,
        name: 'Categories',
    },
    {
        path: '/feedbacks',
        element: <FeedBacks />,
        name: 'Feedbacks',
    },
    {
        path: '/bikes',
        element: <Bikes />,
        name: 'Bikes',
    },
];

export default routes;
