import cn from 'classnames';
import {Outlet} from 'react-router-dom';
import Button from '../atoms/Button';
import Header from '../organisms/Header';

interface I_Page {}

const Page: React.FC<Readonly<I_Page>> = ({}) => {

    return(
        <div className="bg-main">
            <Header />
            <Outlet />
            <h1>footer</h1>
        </div>
    );
}

export default Page;
