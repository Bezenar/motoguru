import N_Common from '../../../types/common';
import cn from '../../../_utils/classnames/cn';
import NavBtn from '../../atoms/NavBtn';
import styles from './Nav.module.scss';

export interface I_Nav {
    routes: Array<N_Common.T_Route>
}

const Nav: React.FC<Readonly<I_Nav>> = ({routes}) => {
    return (
        <ul className={cn(['flex jc-sa ai-center', styles.nav])}>
            {routes.map((route) => (
                <li key={route.path}><NavBtn route={route} /></li>
            ))}
        </ul>
    );
}

export default Nav;
