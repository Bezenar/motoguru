import {useCallback } from 'react';
import {LS_THEME_KEY} from '../../../constants/localStorage';
import cn from '../../../helpers/cn';
import styles from './Switch.module.scss';

export interface I_Switch {
    checked: boolean;
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const Switch: React.FC<Readonly<I_Switch>> = ({checked, onChange}) => {
    const handleChange = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
        localStorage.setItem(LS_THEME_KEY, e.target.checked ? 'd': 'l');
        onChange(e);
    }, [onChange]);
    
    return(
        <label
            className={cn([
                styles.switch,
                {'bg--primary': checked},
                {[styles.bordered]: !checked},
                {'border--white': !checked && localStorage.getItem(LS_THEME_KEY) === 'd'},
                {'border--black': !checked && localStorage.getItem(LS_THEME_KEY) === 'l'}
            ])}
            htmlFor="switch"
        >
            <input
                id="switch"
                type="checkbox"
                style={{display: 'none'}}
                checked={checked}
                onChange={(e) => handleChange(e)}
            />
            <span
                className={cn([
                    styles.slider,
                    {'bg--primary': !checked},
                    {'bg--black': checked && localStorage.getItem(LS_THEME_KEY) === 'd'},
                    {'bg--white': checked && localStorage.getItem(LS_THEME_KEY) === 'l'},
                ])
            }></span>
        </label>
    );
}

export default Switch;
