import {Outlet} from 'react-router-dom';
import cn from '../../_utils/classnames/cn';
import Header from '../organisms/Header';

interface I_Page {}

const Page: React.FC<Readonly<I_Page>> = ({}) => {

    return(
        <div className={cn(['pageBg'])}>
            <Header />
                <Outlet />
            <h1>footer</h1>
        </div>
    );
}

export default Page;
