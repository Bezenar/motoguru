import {Outlet} from 'react-router-dom';
import cn from '../../helpers/cn';
import routes from '../../routes';

import InputField from '../atoms/InputField';
import NavBtn from '../atoms/NavBtn';

interface I_Page {}

const Page: React.FC<Readonly<I_Page>> = ({}) => {
    return(
        <div className={cn(['pageBg'])}>
            <h1>
                {routes.map((route, i) => (
                    <NavBtn key={route.path} route={route} last={i + 1 === routes.length} />
                ))}
            </h1>
                <Outlet />
            <h1>footer</h1>

            <div className="pa-10">
                <InputField
                    value={''}
                    validators={[
                        (val) => val.includes('a'),
                        (val) => val.length > 5
                    ]}
                    errors={['a is included', 'length is more than 5']}
                    placeholder={'place'}
                    required
                    onChange={(e) => console.log(new Date(Date.now()).getSeconds(), e.target.value)}
                />
            </div>
        </div>
    );
}

export default Page;
