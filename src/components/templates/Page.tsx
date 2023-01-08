import {Outlet} from 'react-router-dom';
import Header from '../organisms/Header';
import Footer from '../organisms/Footer';

interface I_Page {}

const Page: React.FC<Readonly<I_Page>> = ({}) => {

    return(
        <div className="bg-main">
            <Header />
            <Outlet />
            <Footer />
        </div>
    );
}

export default Page;
