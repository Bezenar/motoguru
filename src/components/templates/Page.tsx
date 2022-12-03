import {Outlet} from 'react-router-dom';
import cn from '../../_utils/classnames/cn';
import NavBtn from '../atoms/NavBtn';
import useRoutes from '../../hooks/useRoutes';
import StarsRate from '../atoms/StarsRate';
import {useContext} from 'react';
import {AppContext} from '../../App';
import LangDropdown from '../atoms/LangDropdown';
import Text from '../atoms/Text';

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

            <div className="pa-10">
                <div className="wid-25">
                    <Text
                        text={'asd'}
                        type={'line'}
                        textSize={'heading-md'}
                    />
                </div>
            </div>
        </div>
    );
}

export default Page;
