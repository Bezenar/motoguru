import {LS_LANG_KEY} from '../../constants/localStorage';
import eng from './eng';
import lv from './lv';
import rus from './rus';
import {T_Translations} from './types';
import N_Utility from '../../types/utility';

export default function tr(key: N_Utility.NestedKeyOf<T_Translations>, section: keyof typeof eng) {

    const languages = {
        eng,
        lv,
        rus,
    }

    const active: keyof typeof languages =
        localStorage.getItem(LS_LANG_KEY) as  keyof typeof languages ?? process.env.REACT_APP_DEFAULT_LANG;
    
    return languages[active][section][key];
}
