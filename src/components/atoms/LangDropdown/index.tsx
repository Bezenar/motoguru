import {useContext, useCallback, useState, useMemo} from 'react';
import {AppContext} from '../../../App';
import {LANGUAGES} from '../../../constants/common';
import {LS_LANG_KEY} from '../../../constants/localStorage';
import cn from '../../../_utils/classnames/cn';
import styles from './LangDropdown.module.scss';

export interface I_LangDropdown {}

const LangDropdown: React.FC<I_LangDropdown> = () => {
    const appProvider = useContext(AppContext);
    const [isVisible, setIsVisible] = useState(false);

    const handleOpen = useCallback(() => {
        setIsVisible(prev => !prev);
    }, [setIsVisible]);

    const handleSelect = useCallback((langShort: string) => {
        setIsVisible(false);
        localStorage.setItem(LS_LANG_KEY, langShort);
        appProvider?.onChangeLang();
    }, [appProvider?.lang, setIsVisible]);

    const selectedValue = useMemo<React.ReactElement>(() => {
        return LANGUAGES.find((item) => item.langShort === appProvider?.lang)!.value;
    }, [appProvider?.lang]);

    return(
        <div className={styles.wrapper}>
            <div className="flex jc-sb ai-center pointer" onClick={handleOpen}>
                {selectedValue}
                <span className={cn(['border--primary', styles.arrow, {[styles.active]: isVisible}])}></span>
            </div>
            {isVisible ? (
                <ul className={cn([styles.list, 'pointer bg--lang-dd flex dir-col ai-center'])}>
                    {LANGUAGES.map((lang) => {
                        return lang.langShort !== appProvider?.lang && (
                            <li
                                key={lang.id}
                                className={cn(['bg--primary--hover flex ai-center jc-center wid-100'])}
                                onClick={() => handleSelect(lang.langShort)}
                            >
                                {lang.value}
                            </li>);
                        }
                    )}
                </ul>
            ): null}
        </div>
    );
}

export default LangDropdown;
