import * as React from 'react';
import FullLogo from '../../../assets/logo/FullLogo';
import OverlayBackground from '../../atoms/OverlayBackground';
import Text from '../../atoms/Text';
import IntroText from '../../molecules/IntroText';
import FeatureCard from '../../molecules/FeatureCard';
import {useTranslation} from 'react-i18next';

interface I_HomePage {}

const HomePage: React.FC<Readonly<I_HomePage>> = ({}) => {
    const {t} = useTranslation();
    return(
        <>
            <section>
                <OverlayBackground imgSrc="./img/Banner.jpg">
                    <div className="flex dir-col jc-center ai-center h--full" style={{minHeight: 633}}>
                        <FullLogo />
                        <Text type={'paragraph'} text={t('banner.title')} textSize="title-xl" />
                        <Text type={'paragraph'} text={t('banner.subHeading')} textSize="heading-xl" />
                    </div>
                </OverlayBackground>

                <IntroText heading={t('about.heading')}>
                    <Text type="paragraph" text={t('about.paragraphOne')} textAlign="center" extraClasses="mb-6"/>
                    <Text type="paragraph" text={t('about.paragraphTwo')} textAlign="center"/>
                </IntroText>

                <div className="flex nowrap">
                    <FeatureCard
                        width="25"
                        count={1}
                        bgSrc="./img/Banner.jpg"
                        text={t('features.featureOne.text')}
                        btnValue={t('features.featureOne.btnValue')}
                        onClick={() => console.log(1)}
                    />

                    <FeatureCard
                        width="25"
                        count={1}
                        bgSrc="./img/Banner.jpg"
                        text={t('features.featureTwo.text')}
                        btnValue={t('features.featureTwo.btnValue')}
                        onClick={() => console.log(1)}
                    />

                    <FeatureCard
                        width="25"
                        count={1}
                        bgSrc="./img/Banner.jpg"
                        text={t('features.featureThree.text')}
                        btnValue={t('features.featureThree.btnValue')}
                        onClick={() => console.log(1)}
                    />

                    <FeatureCard
                        width="25"
                        count={1}
                        bgSrc="./img/Banner.jpg"
                        text={t('features.featureFour.text')}
                        btnValue={t('features.featureFour.btnValue')}
                        onClick={() => console.log(1)}
                    />
                </div>

                <IntroText heading={t('categories.heading')}>
                    <Text type="paragraph" text={t('categories.text')} textAlign="center" extraClasses="mb-6"/>
                </IntroText>

                <div className="my-12">
                    
                </div>

            </section>
        </>
    );
}

export default HomePage;
