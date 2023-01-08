import styles from './FeatureCard.module.scss';
import cn from 'classnames';
import OverlayBackground from '../../atoms/OverlayBackground';
import Text from '../../atoms/Text';
import Button from '../../atoms/Button';
import Counter from '../../atoms/Counter';
import {useCallback} from 'react';

export interface I_FeatureCard {
    width: '25' | '50' | '75' | '100' | '33' | '66';
    count: number;
    bgSrc: string;
    text: string;
    btnValue: string;
    onClick: (...args: any) => void;
}

const FeatureCard: React.FC<Readonly<I_FeatureCard>> = ({width, count, bgSrc, text, btnValue, onClick}) => {
    const handleClick = useCallback(onClick, [onClick]);

    return (
        <div className={cn(`wid-${width}`, styles.card)}>
            <OverlayBackground imgSrc={bgSrc}>
                <div className={cn('flex dir-col ai-center jc-sa', styles.cardContent)}>
                    <Counter value={count} />
                    <Text
                        type="paragraph"
                        textColor="white"
                        text={text}
                        textSize="heading-md"
                        textAlign="center"
                    />
                    <div style={{width: 188}} className="text--center">
                        <Button innerText={btnValue} onClick={handleClick} />
                    </div>
                </div>
            </OverlayBackground>
        </div>
    );
}

export default FeatureCard;
