import classnames from 'classnames';
import {LS_THEME_KEY} from '../constants/localStorage';
import {DEFAULT_THEME} from '../constants/default';

export default function cn(args: Array<string | Record<string, boolean>>) {
    const theme = localStorage.getItem(LS_THEME_KEY) ?? DEFAULT_THEME;

    return classnames([theme, ...args]);
}
