import {NavLink} from 'react-router-dom';
import { LS_THEME_KEY } from '../../../constants/localStorage';
import cn from '../../../_utils/classnames/cn';
import N_Common from '../../../types/common';
import styles from './NavBtn.module.scss';

export interface I_NavBtn {
    route: N_Common.T_Route,
    last: boolean;
}

const NavBtn: React.FC<Readonly<I_NavBtn>> = ({route, last}) => {
    return(
        <NavLink to={route.path}>
            {
                ({ isActive }) => (
                    <span
                        className={cn([
                            'text--sm flex ai-center jc-center',
                            {'text--white': !isActive && localStorage.getItem(LS_THEME_KEY) === 'd'},
                            {'text--black': !isActive && localStorage.getItem(LS_THEME_KEY) === 'l'},
                            {'text--primary text--secondary--hover': isActive},
                            {[styles.last]: last},
                            {[styles.active]: isActive},
                            styles.navBtn,
                        ])}
                    >
                        {route.name}
                    </span>
                )
            }
        </NavLink>
    );
}

export default NavBtn;
