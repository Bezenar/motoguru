import styles from './Button.module.scss';
import cn from '../../../_utils/classnames/cn';
import {useCallback} from 'react';
import {LS_THEME_KEY} from '../../../constants/localStorage';

export interface I_Button {
    innerText: string;
    outlined?: boolean;
    onClick: (e: React.MouseEvent<HTMLButtonElement>) => void;
}

const Button: React.FC<Readonly<I_Button>> = ({innerText, outlined = false, onClick}) => {
    const handleClick = useCallback((e: React.MouseEvent<HTMLButtonElement>) => {onClick(e)}, [onClick]);

    return(
        <button
            className={cn([
                styles.btn,
                'text--sm',
                {'text bg--primary bg--secondary--hover text--white': !outlined},
                {[styles.bordered]: outlined},
                {'text--white border--white bg--grey--hover': outlined && localStorage.getItem(LS_THEME_KEY) === 'd'},
                {'text--black border--black bg--white--hover': outlined && localStorage.getItem(LS_THEME_KEY) === 'l'},
            ])}
            onClick={handleClick}
        >
            {innerText}
        </button>
    );
}

export default Button;
