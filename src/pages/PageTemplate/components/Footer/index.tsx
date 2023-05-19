import s from './Footer.module.scss';
import {useTranslation} from 'react-i18next';
import cn from 'classnames';
import OverlayBackground from '../../../../common/components/OverlayBackground';
import Text from '../../../../common/components/Text';
import SocialLink from '../../../../common/components/SocialLink';
import Location from '../../../../common/assets/icons/UI/Location';
import Envelope from '../../../../common/assets/icons/UI/Envelope';
import Phone from '../../../../common/assets/icons/UI/Phone';
import FBIcon from '../../../../common/assets/icons/social/Facebook';
import InstaIcon from '../../../../common/assets/icons/social/Instagram';
import YTIcon from '../../../../common/assets/icons/social/Youtube';
import {Form} from '../../../../common/components/Form';
import {emailRegex} from '../../../../constants/regex';
import footerBackground from '../../../../common/assets/img/footerBackground.jpg';
import {useMemo} from 'react';

type T_FormData = {name: string; email: string; phone: string; message: string};
const FORM_DATA: T_FormData = {
    name: '',
    email: '',
    phone: '',
    message: '',
};

const Footer: React.FC = ({}) => {
    const {t} = useTranslation();

    const handleSubmit = async (data: T_FormData): Promise<boolean> => {
        console.log(data);
        //TODO COMPLETE
        return true;
        // const serviceId = process.env.REACT_APP_SERVICE_ID;
        // const templateId = process.env.REACT_APP_CONTACT_TEMPLATE_ID;
        // const key = process.env.REACT_APP_EMAIL_KEY;
        // if (serviceId && templateId && key) {
        //     const res = await emailjs.send(
        //         serviceId,
        //         templateId,
        //         {
        //             ...data,
        //         },
        //         key
        //     );
        //     return res.status === 200;
        // } else {
        //     console.error(new Error('Missed email configuration'));
        //     return false;
        // }
    };

    const validators = useMemo(() => {
        return {
            name: [(val: string) => val.length > 0],
            email: [(val: string) => !emailRegex.test(val)],
            message: [(val: string) => val.length > 0],
        };
    }, []);

    return (
        <OverlayBackground imgSrc={footerBackground}>
            <div className="container flex dir-row md-dir-colrev sm-dir-colrev xs-dir-colrev ai-center jc-sb nowrap py-12">
                <div className="flex dir-col nowrap md-wrap sm-wrap xs-wrap md-dir-row sm-dir-row xs-dir-row md-ai-center sm-ai-center xs-ai-center sm-jc-center md-mt-4 sm-mt-4 xs-mt-4">
                    <Text
                        type="paragraph"
                        text={t('footer.contacts.heading')}
                        textSize="heading-sm"
                        extraClasses="md-wid-100 md-text--center sm-wid-100 sm-text--center xs-wid-100 xs-text--center md-hide sm-hide xs-hide"
                    />

                    <div className="flex ai-center nowrap mt-5 xs-wid-100 xs-jc-center sm-wid-50 sm-jc-center md-wid-33 md-jc-center">
                        <Location />
                        <Text type="line" text={t('footer.contacts.address')} textSize="sm" extraClasses="pl-5" />
                    </div>

                    <div className="flex ai-center nowrap mt-5 xs-wid-100 xs-jc-center sm-wid-50 sm-jc-center md-wid-33 md-jc-center">
                        <Envelope />
                        <Text type="line" text={import.meta.env.VITE_EMAIL ?? ''} textSize="sm" extraClasses="pl-5" />
                    </div>

                    <div className="flex ai-center nowrap mt-5 xs-wid-100 xs-jc-center sm-wid-50 sm-jc-center md-wid-33 md-jc-center">
                        <Phone />
                        <Text type="line" text={import.meta.env.VITE_PHONE ?? ''} textSize="sm" extraClasses="pl-5" />
                    </div>

                    <div
                        className={cn(
                            'flex nowrap py-12 md-wid-100 md-pt-5 md-py-0 md-jc-center sm-wid-100 sm-pt-5 sm-py-0 sm-jc-center xs-wid-100 xs-pt-5 xs-py-0 xs-jc-center',
                            s.socialWrapper
                        )}
                    >
                        <SocialLink href={(import.meta.env.VITE_FB_LINK as string) ?? '#'}>
                            <FBIcon />
                        </SocialLink>

                        <SocialLink href={(import.meta.env.VITE_YT_LINK as string) ?? '#'}>
                            <InstaIcon />
                        </SocialLink>

                        <SocialLink href={(import.meta.env.VITE_INSTA_LINK as string) ?? '#'}>
                            <YTIcon />
                        </SocialLink>
                    </div>
                </div>
                <div>
                    <Form<T_FormData> width={760} data={FORM_DATA}>
                        <Text
                            type="paragraph"
                            text={t('common.contactUs')}
                            textAlign="center"
                            textSize="heading-sm"
                            extraClasses="xl-hide lg-hide pb-4"
                        />
                        <div className="flex nowrap sm-wrap xs-wrap jc-sb pb-7">
                            <div className="wid-33 sm-wid-100 sm-mt-8 xs-wid-100 xs-mt-8">
                                <Form.InputField dataKey="name" placeholder={t('common.name') as string} required />
                            </div>
                            <div className="wid-33 mx-8 sm-wid-100 sm-mx-0 xs-mx-0 sm-mt-8 sm-mt-8 xs-wid-100 xs-mt-8">
                                <Form.InputField
                                    dataKey="email"
                                    validators={[(val: string) => !emailRegex.test(val)]}
                                    errors={[t('errors.wrongEmail')]}
                                    placeholder={t('common.email') as string}
                                    required
                                />
                            </div>
                            <div className="wid-33 sm-wid-100 sm-mt-8 xs-wid-100 xs-mt-8">
                                <Form.InputField dataKey="phone" placeholder={t('common.phoneNumber') as string} />
                            </div>
                        </div>
                        <div className="mb-3 sm-mb-8 xs-mb-8">
                            <Form.Textarea dataKey="message" required placeholder={t('common.message') as string} />
                        </div>

                        <Form.Submit
                            validators={validators}
                            onSubmit={handleSubmit}
                            extraClasses="sm-wid-100 xs-wid-100"
                        />
                    </Form>
                </div>
            </div>
        </OverlayBackground>
    );
};

export default Footer;
