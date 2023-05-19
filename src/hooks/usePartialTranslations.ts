import {useMemo} from 'react';
import {useTranslation} from 'react-i18next';

export default function usePartialTranslations(keys: Array<string>) {
    const {i18n} = useTranslation();

    const partialTranslations = useMemo(() => {
        let translations = i18n?.store?.data[i18n.language]?.translation;
        if(translations){
            keys.forEach((key) => {
                //@ts-ignore
                translations = translations[key];
            });
            return translations;
        } else {
            return {};
        }
    }, [keys, i18n.language, i18n.store.data, i18n.store.data.en.translation]);

    return partialTranslations;
}
