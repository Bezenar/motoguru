import styles from './Button.module.scss';
import {useCallback} from 'react';
import cn from 'classnames';

export interface I_Button {
    innerText: string;
    onClick: (e: React.MouseEvent<HTMLButtonElement>) => void;
}

const Button: React.FC<Readonly<I_Button>> = ({innerText, onClick}) => {
    const handleClick = useCallback((e: React.MouseEvent<HTMLButtonElement>) => {onClick(e)}, [onClick]);

    return(
        <button
            className={cn([styles.btn, 'text--sm text bg-primary bg-secondary--hover text-white'])}
            onClick={handleClick}
        >
            {innerText}
        </button>
    );
}

export default Button;
