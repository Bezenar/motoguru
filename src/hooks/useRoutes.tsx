import HomePage from '../components/pages/Homepage';
import Categories from '../components/pages/Categories';
import Bikes from '../components/pages/Bikes';
import FeedBacks from '../components/pages/Feedbacks';
import N_Common from '../types/common';
import tr from '../_utils/i18n';
import { useMemo } from 'react';
import { LS_LANG_KEY } from '../constants/localStorage';

export default function useRoutes(dependency: Array<any> = []) {
    const routes = useMemo<Array<N_Common.T_Route>>(() => {
        return [
            {
                path: '/',
                element: <HomePage />,
                name: tr('home', 'navigation'),
            },
            {
                path: '/categories',
                element: <Categories />,
                name: tr('categories', 'navigation'),
            },
            {
                path: '/feedbacks',
                element: <FeedBacks />,
                name: tr('feedbacks', 'navigation'),
            },
            {
                path: '/bikes',
                element: <Bikes />,
                name: tr('bikes', 'navigation'),
            },
        ];
    }, dependency);

    return routes;
}
