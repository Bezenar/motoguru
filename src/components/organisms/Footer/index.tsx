import styles from './Footer.module.scss';
import {useTranslation} from 'react-i18next';
import cn from 'classnames';
import OverlayBackground from '../../atoms/OverlayBackground';
import Text from '../../atoms/Text';
import InlineLogo from '../../../assets/logo/InlineLogo';
import SocialLink from '../../atoms/SocialLink';
import Location from '../../../assets/icons/UI/Location';
import Envelope from '../../../assets/icons/UI/Envelope';
import Phone from '../../../assets/icons/UI/Phone';
import FBIcon from '../../../assets/icons/social/Facebook';
import InstaIcon from '../../../assets/icons/social/Instagram';
import YTIcon from '../../../assets/icons/social/Youtube';

export interface I_Footer {}

const Footer: React.FC<Readonly<I_Footer>> = ({}) => {
    const {t} = useTranslation();

    return (
        <OverlayBackground imgSrc="./img/Banner.jpg">
            <div className="container flex ai-center jc-sb nowrap py-12">
                <div className="flex dir-col nowrap">
                    <Text type="paragraph" text={t('footer.contacts.heading')} textSize="heading-sm" />

                    <div className="flex pt-5">
                        <Location />
                        <Text type="line" text={t('footer.address')} textSize="sm" extraClasses="pl-5" />
                    </div>

                    <div className="flex py-5">
                        <Envelope />
                        <Text type="line" text={process.env.REACT_APP_EMAIL ?? ''} textSize="sm" extraClasses="pl-5" />
                    </div>

                    <div className="flex">
                        <Phone />
                        <Text type="line" text={process.env.REACT_APP_PHONE ?? ''} textSize="sm" extraClasses="pl-5" />
                    </div>

                    <div className={cn('flex nowrap py-12', styles.socialWrapper)}>
                        <SocialLink href={process.env.REACT_APP_FB_LINK as string ?? '#'}>
                            <FBIcon />
                        </SocialLink>

                        <SocialLink href={process.env.REACT_APP_YT_LINK as string ?? '#'}>
                            <InstaIcon />
                        </SocialLink>

                        <SocialLink href={process.env.REACT_APP_INSTA_LINK as string ?? '#'}>
                            <YTIcon />
                        </SocialLink>
                    </div>

                    <InlineLogo />
                </div>
                <div>b</div>
            </div>
        </OverlayBackground>
    );
}

export default Footer;
