import * as React from 'react';
import FullLogo from '../../../assets/logo/FullLogo';
import OverlayBackground from '../../atoms/OverlayBackground';
import Text from '../../atoms/Text';
import IntroText from '../../molecules/IntroText';
import FeatureCard, { I_FeatureCard } from '../../molecules/FeatureCard';
import {useTranslation} from 'react-i18next';
import {useMemo} from 'react';
import CategoryCard, { I_CategoryCard } from '../../molecules/CategoryCard';

interface I_HomePage {}

const HomePage: React.FC<Readonly<I_HomePage>> = ({}) => {
    const {t} = useTranslation();

    const features = useMemo(() => {
        const list: Array<Omit<I_FeatureCard, 'count' | 'text' | 'btnValue'>> = [
            {
                width: '25',
                bgSrc: './img/Banner.jpg',
                onClick: () => console.log(1)
            },
            {
                width: '25',
                bgSrc: './img/Banner.jpg',
                onClick: () => console.log(1)
            },
            {
                width: '25',
                bgSrc: './img/Banner.jpg',
                onClick: () => console.log(1)
            },
            {
                width: '25',
                bgSrc: './img/Banner.jpg',
                onClick: () => console.log(1)
            }
        ];
        return list;
    }, []);

    const categories = useMemo(() => {
        return [1, 2, 3, 4].map((num) => (
            <CategoryCard
                key={t(`homepage.categories.list.${num}.heading`)}
                category={t(`homepage.categories.list.${num}.heading`)}
                transport={t(`homepage.categories.list.${num}.text`)}
            />
        ));
    }, [t])

    return(
        <section>
            <OverlayBackground imgSrc="./img/Banner.jpg">
                <div className="flex dir-col jc-center ai-center h--full" style={{minHeight: 633}}>
                    <FullLogo />
                    <Text type={'paragraph'} text={t('homepage.banner.title')} textSize="title-xl" />
                    <Text type={'paragraph'} text={t('homepage.banner.subHeading')} textSize="heading-xl" />
                </div>
            </OverlayBackground>

            <IntroText heading={t('homepage.about.heading')}>
                <Text type="paragraph" text={t('homepage.about.paragraphOne')} textAlign="center" extraClasses="mb-6"/>
                <Text type="paragraph" text={t('homepage.about.paragraphTwo')} textAlign="center"/>
            </IntroText>

            <div className="flex nowrap">
                {features.map((f, i) => (
                    <FeatureCard
                        key={`feature-${i}`}
                        {...{
                            ...f,
                            count: i + 1,
                            text: t(`homepage.features.${i + 1}.text`),
                            btnValue: t(`homepage.features.${i + 1}.btnValue`)
                        }}
                    />
                ))}
            </div>

            <IntroText heading={t('homepage.categories.heading')}>
                <Text type="paragraph" text={t('homepage.categories.text')} textAlign="center" extraClasses="mb-6"/>
            </IntroText>

            <div className="flex nowrap pb-12">
                {categories}
            </div>
        </section>
    );
}

export default HomePage;
