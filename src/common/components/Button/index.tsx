import styles from './Button.module.scss';
import cn from 'classnames';

export interface I_Button {
    innerText: string;
    onClick: (e: React.MouseEvent<HTMLButtonElement>) => void;
    extraClasses?: string;
}

const Button: React.FC<Readonly<I_Button>> = ({innerText, onClick, extraClasses = ''}) => {
    return (
        <button
            className={cn([styles.btn, 'text--sm text bg-primary bg-secondary--hover text-white', extraClasses])}
            onClick={onClick}
        >
            {innerText}
        </button>
    );
};

export default Button;
