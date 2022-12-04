import {LS_LANG_KEY} from '../../constants/localStorage';
import eng from './eng';
import lv from './lv';
import rus from './rus';
import {T_Translations} from './types';
import N_Utility from '../../types/utility';
import N_Common from '../../types/common';

export default function tr(key: N_Utility.NestedKeyOf<T_Translations>, section: keyof T_Translations): string {

    const languages = {
        eng,
        lv,
        rus,
    }

    const active: N_Common.T_LangShort =
        localStorage.getItem(LS_LANG_KEY) as N_Common.T_LangShort ?? process.env.REACT_APP_DEFAULT_LANG;
    
        //@ts-ignore
    return languages[active][section][key];
}
