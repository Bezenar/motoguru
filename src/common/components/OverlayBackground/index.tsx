import {useEffect, useRef, useState} from 'react';
import cn from 'classnames';
import styles from './OverlayBackground.module.scss';

export interface I_OverlayBackground {
    imgSrc: string;
    children: React.ReactElement;
}

const OverlayBackground: React.FC<Readonly<I_OverlayBackground>> = ({imgSrc, children}) => {
    const [imageYOffset, setImageYOffset] = useState<number>(0);
    const image = useRef<HTMLImageElement>(null);

    useEffect(() => {
        if(image.current) {
            const height = image.current.getBoundingClientRect().height;
            if(height > 633) {
                setImageYOffset((height- 633) / 2);
            }
        }
    }, [image.current]);

    return(
        <div className={cn([styles.wrapper])}>
            <div className={cn(['flex ai-center jc-center bg--gradient h--full wid-100'])}>
                {children}
            </div>
            <div className={styles.overlay}></div>
            <div className={styles.imageWrapper}>
                <img ref={image} src={imgSrc} alt="banner" style={{marginTop: -1 * imageYOffset}} />
            </div>
        </div>
    );
}

export default OverlayBackground;
