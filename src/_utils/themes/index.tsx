import {light} from './light';
import {dark} from './dark';
import {LS_THEME_KEY} from '../../constants/localStorage';

export type T_ColorsKeys =
    'primary' | 'secondary' | 'gradient' | 'bg-main' | 'bg-counter-main' | 'bg-counter-main-transparent' |
    'bg-main-transparent' | 'text-main' | 'black' | 'white' | 'text-active' | 'text-active-secondary' |
    'text-main-transparent' | 'input-border'
export type T_ThemesKeys = 'dark' | 'light';

export interface I_Themes {
    isDark: boolean;
    themes: Record<T_ThemesKeys, Record<T_ColorsKeys, string>>;
    switchTheme: (isDark: boolean) => void;
}

export class Themes implements I_Themes{
    isDark;
    themes = {dark, light}
    constructor() {
        console.log(localStorage.getItem(LS_THEME_KEY));
        this.isDark = localStorage.getItem(LS_THEME_KEY) === 'dark' ;
    }

    switchTheme(isDark: boolean) {
        localStorage.setItem(LS_THEME_KEY, isDark ? 'dark' : 'light');
        Object.entries(this.themes[isDark ? 'dark' : 'light']).forEach(([key, value]) => {
            document.documentElement.style.setProperty(`--${key}`, value);
        });
        this.isDark = !this.isDark;
    }
}

window.themes = new Themes();
