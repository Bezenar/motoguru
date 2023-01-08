import {NavLink} from 'react-router-dom';
import FBIcon from '../../../assets/icons/social/Facebook';
import InstaIcon from '../../../assets/icons/social/Instagram';
import YTIcon from '../../../assets/icons/social/Youtube';
import InlineLogo from '../../../assets/logo/InlineLogo';
import useRoutes from '../../../hooks/useRoutes';
import LangDropdown from '../../atoms/LangDropdown';
import SocialLink from '../../atoms/SocialLink';
import ThemeSwitch from '../../atoms/ThemeSwitch';
import Nav from '../../molecules/Nav';
import cn from 'classnames';
import btnStyles from '../../atoms/Button/Button.module.scss';

interface I_Header {}

const Header: React.FC<Readonly<I_Header>> = ({}) => {
    const routes = useRoutes();

    return(
        <div className="container">
            <header className="flex nowrap ai-center jc-sb py-3">
                <NavLink to={'/'}>
                    <InlineLogo />
                </NavLink>

                <Nav routes={routes} />

                <SocialLink href={process.env.REACT_APP_FB_LINK as string}>
                    <FBIcon />
                </SocialLink>

                <SocialLink href={process.env.REACT_APP_YT_LINK as string}>
                    <InstaIcon />
                </SocialLink>

                <SocialLink href={process.env.REACT_APP_INSTA_LINK as string}>
                    <YTIcon />
                </SocialLink>
                
                <a
                    href={`tel:${process.env.REACT_APP_PHONE}`}
                    className={cn([btnStyles.btn, 'text--sm bg-primary bg-secondary--hover text-white'])}
                >
                    {process.env.REACT_APP_PHONE}
                </a>

                <ThemeSwitch />

                <LangDropdown />
            </header>
        </div>
    );
}

export default Header;
