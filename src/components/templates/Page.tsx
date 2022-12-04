import {Outlet} from 'react-router-dom';
import cn from '../../_utils/classnames/cn';
import NavBtn from '../atoms/NavBtn';
import useRoutes from '../../hooks/useRoutes';
import {useContext} from 'react';
import {AppContext} from '../../App';
import WorkRow from '../atoms/ExerciseRow';
import {EXERCISES_HEAD} from '../atoms/ExerciseRow/constants';

interface I_Page {}

const Page: React.FC<Readonly<I_Page>> = ({}) => {
    const appContext = useContext(AppContext);
    const routes = useRoutes([appContext?.lang]);


    return(
        <div className={cn(['pageBg'])}>
            <h1 className='flex'>
                {routes.map((route, i) => (
                    <NavBtn key={route.path} route={route} last={i + 1 === routes.length} />
                ))}
            </h1>
                <Outlet />
            <h1>footer</h1>

            <div className="pt-10">
                
            </div>
        </div>
    );
}

export default Page;
