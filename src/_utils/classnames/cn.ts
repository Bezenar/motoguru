import classnames from 'classnames';
import {LS_THEME_KEY} from '../../constants/localStorage';

export default function cn(args: Array<string | Record<string, boolean>>) {
    const theme = localStorage.getItem(LS_THEME_KEY) ?? process.env.REACT_APP_DEFAULT_THEME;

    return classnames([theme, ...args]);
}
