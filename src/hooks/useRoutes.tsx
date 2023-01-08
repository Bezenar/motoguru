import HomePage from '../components/pages/Homepage';
import Categories from '../components/pages/Categories';
import Bikes from '../components/pages/Bikes';
import FeedBacks from '../components/pages/Feedbacks';
import N_Common from '../types/common';
import {useMemo} from 'react';
import {useTranslation} from 'react-i18next';

export default function useRoutes(dependency: Array<any> = []) {
    const {t} = useTranslation();
    const routes = useMemo<Array<N_Common.T_Route>>(() => {
        return [
            {
                path: '/',
                element: <HomePage />,
                name: t('navigation.home'),
            },
            {
                path: '/categories',
                element: <Categories />,
                name: t('navigation.categories'),
            },
            {
                path: '/feedbacks',
                element: <FeedBacks />,
                name: t('navigation.feedbacks'),
            },
            {
                path: '/bikes',
                element: <Bikes />,
                name: t('navigation.bikes'),
            },
        ];
    }, [t, ... dependency]);

    return routes;
}
