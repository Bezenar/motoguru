import {Outlet} from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';

const Page: React.FC = () => {

    return(
        <div className="bg-main">
            <Header />
            <Outlet />
            <Footer />
        </div>
    );
}

export default Page;