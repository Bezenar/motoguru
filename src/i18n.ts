import i18n from 'i18next';
import {initReactI18next} from 'react-i18next';
import en from './_utils/i18n/en';
import rus from './_utils/i18n/rus';
import lv from './_utils/i18n/lv';
import { LS_LANG_KEY } from './constants/localStorage';

const resources = {
    en: {
        translation: en
    },
    rus: {
        translation: rus
    },
    lv: {
        translation: lv
    }
};

i18n
    .use(initReactI18next)
    .init({
        resources,
        lng: localStorage.getItem(LS_LANG_KEY) ?? process.env.REACT_APP_DEFAULT_LANG, 
        returnObjects: false,
        interpolation: {
        escapeValue: false
    }
    })
    .catch((err) => console.log(err))

  export default i18n;