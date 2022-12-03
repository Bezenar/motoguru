import {useCallback, useContext, useState} from 'react';
import {AppContext} from '../../../App';
import {LS_THEME_KEY} from '../../../constants/localStorage';
import cn from '../../../_utils/classnames/cn';
import styles from './ThemeSwitch.module.scss';

export interface I_ThemeSwitch {}

const ThemeSwitch: React.FC<Readonly<I_ThemeSwitch>> = () => {
    const {theme, onChangeTheme} = useContext(AppContext);
    const [checked, setChecked] = useState<boolean>(theme === 'd');

    const handleChange = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
        localStorage.setItem(LS_THEME_KEY, e.target.checked ? 'd' : 'l');
        setChecked(e.target.checked);
        onChangeTheme();
    }, [onChangeTheme, setChecked]);
    
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

export default ThemeSwitch;
