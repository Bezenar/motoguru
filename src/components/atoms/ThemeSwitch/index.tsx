import {useCallback, useEffect, useState} from 'react';
import {LS_THEME_KEY} from '../../../constants/localStorage';
import styles from './ThemeSwitch.module.scss';
import cn from 'classnames';

export interface I_ThemeSwitch {}

const ThemeSwitch: React.FC<Readonly<I_ThemeSwitch>> = () => {
    const [checked, setChecked] = useState<boolean>(localStorage.getItem(LS_THEME_KEY) === 'dark');

    const handleChange = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
        window.themes.switchTheme(e.target.checked);
        setChecked(e.target.checked);
    }, [setChecked]);
    
    return(
        <label
            className={cn([
                styles.switch,
                {'bg-primary': checked},
                {[styles.bordered]: !checked},
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
                    {'bg-primary': !checked},
                    {'bg-main': checked},
                ])}
            ></span>
        </label>
    );
}

export default ThemeSwitch;
