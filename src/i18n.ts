/**
 * Modules
 */
import i18n from 'i18next';
import {initReactI18next} from 'react-i18next';

/**
 * Constants
 */
import { LS_LANG_KEY } from './constants/localStorage';

i18n
    .use(initReactI18next)
    .init({
        partialBundledLanguages: true,
        ns: [],
        resources: {},
        lng: localStorage.getItem(LS_LANG_KEY) ?? import.meta.env.VITE_DEFAULT_LANG, 
        returnObjects: false,
        interpolation: {
            escapeValue: false
        },
        react: {
            useSuspense: false,
        }
    })
    .catch((err) => console.log(err))

export default i18n;
