import FBIcon from '../../../../common/assets/icons/social/Facebook';
import InstaIcon from '../../../../common/assets/icons/social/Instagram';
import YTIcon from '../../../../common/assets/icons/social/Youtube';
import useRoutes from '../../../../hooks/useRoutes';
import LangDropdown from '../LangDropdown';
import SocialLink from '../../../../common/components/SocialLink';
import ThemeSwitch from '../ThemeSwitch';
import Nav from '../Nav';
import cn from 'classnames';
import btnStyles from '../../../../common/components/Button/Button.module.scss';
import { useContext, useMemo } from 'react';
import { T_AppContext, T_Route } from '../../../../types';
import { AppContext } from '../../../../App';
import MobileMenu from './MobileMenu';
import NavBtn from '../NavBtn';

interface I_Header {}

const Header: React.FC<Readonly<I_Header>> = ({}) => {
    const routes = useRoutes();
    const {breakPoint} = useContext<T_AppContext>(AppContext);

    const burgerView = useMemo<boolean>(() => {
        return breakPoint === 'xs' || breakPoint === 'sm' || breakPoint === 'md'
    }, [breakPoint])

    const renderNavItem = (route: T_Route) => (
        <li key={route.path}>
            <NavBtn route={route} />
        </li>
    );

    return(
        <div className="container">
            <header className="flex nowrap ai-center jc-sb py-3">
                {burgerView ? (
                    <>
                        <div className="flex ai-center" style={{gap: 12}}>
                            <ThemeSwitch />

                            <LangDropdown />
                        </div>

                        <MobileMenu routes={routes} />
                    </>
                ) : (
                    <>
                        <div className="flex ai-center" style={{gap: 12}}>
                            <SocialLink href={import.meta.env.VITE_FB_LINK as string}>
                                <FBIcon />
                            </SocialLink>

                            <SocialLink href={import.meta.env.VITE_INSTA_LINK as string}>
                                <InstaIcon />
                            </SocialLink>

                            <SocialLink href={import.meta.env.VITE_YT_LINK as string}>
                                <YTIcon />
                            </SocialLink>
                        </div>

                        <Nav
                            routes={routes}
                            renderItem={renderNavItem}
                        />
                        
                        <a
                            href={`tel:${import.meta.env.VITE_PHONE}`}
                            className={cn([btnStyles.btn, 'text--sm bg-primary bg-secondary--hover text-white'])}
                        >
                            {import.meta.env.VITE_PHONE}
                        </a>

                        <div className="flex ai-center" style={{gap: 12}}>
                            <ThemeSwitch />

                            <LangDropdown />
                        </div>
                    </>
                )}
            </header>
        </div>
    );
}

export default Header;
