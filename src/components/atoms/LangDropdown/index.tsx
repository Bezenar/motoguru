import {useCallback, useMemo, useState} from 'react';
import {LANGUAGES} from '../../../constants/common';
import {LS_LANG_KEY} from '../../../constants/localStorage';
import {useTranslation} from 'react-i18next';
import N_Common from '../../../types/common';
import cn from 'classnames';
import styles from './LangDropdown.module.scss';

export interface I_LangDropdown {}

const LangDropdown: React.FC<I_LangDropdown> = () => {
    const [isVisible, setIsVisible] = useState(false);
    const {i18n: {changeLanguage}} = useTranslation();

    const handleOpen = useCallback(() => {
        setIsVisible(prev => !prev);
    }, [setIsVisible]);

    const handleSelect = useCallback((langShort: N_Common.T_LangShort) => {
        setIsVisible(false);
        localStorage.setItem(LS_LANG_KEY, langShort);
        changeLanguage(langShort);
    }, [setIsVisible, changeLanguage]);

    const selected = useMemo(() => {
        return LANGUAGES.find(lang => lang.langShort === (localStorage.getItem(LS_LANG_KEY) ?? process.env.REACT_APP_DEFAULT_LANG))
    }, [isVisible === false]);

    return(
        <div className={styles.wrapper}>
            <div className="flex jc-sb ai-center pointer" onClick={handleOpen}>
                {selected?.value}
                <span className={cn([styles.arrow, {[styles.active]: isVisible}])}></span>
            </div>
            {isVisible ? (
                <ul className={cn([styles.list, 'pointer flex dir-col ai-center bg-counter-main-transparent'])}>
                    {LANGUAGES.map((lang) => {
                        return lang.langShort !== selected?.langShort ? (
                            <li
                                key={lang.id}
                                className={cn([styles.listItem, 'flex ai-center jc-center wid-100'])}
                                onClick={() => handleSelect(lang.langShort)}
                            >
                                {lang.value}
                            </li>
                        ) : null;
                    })}
                </ul>
            ): null}
        </div>
    );
}

export default LangDropdown;
