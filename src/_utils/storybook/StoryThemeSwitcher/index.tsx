import {useState, useMemo} from 'react';
import {AppContext} from '../../../App';
import Switch from '../../../components/atoms/ThemeSwitch';
import {LS_LANG_KEY, LS_THEME_KEY} from '../../../constants/localStorage';
import N_Common from '../../../types/common';

interface I_StoryThemeSwitcher {
    Story: any;
    applyBg?: boolean;
    height?: number;
}

const StoryThemeSwitcher: React.FC<Readonly<I_StoryThemeSwitcher>> = ({Story, applyBg = false, height = 'auto'}) => {
    const [theme, setTheme] = useState<N_Common.T_AppContext['theme']>(
        localStorage.getItem(LS_THEME_KEY) as N_Common.T_AppContext['theme'] ?? process.env.REACT_APP_DEFAULT_THEME
    );
    const [lang, setLang] = useState<N_Common.T_AppContext['lang']>(
        localStorage.getItem(LS_LANG_KEY) as N_Common.T_AppContext['lang'] ?? process.env.REACT_APP_DEFAULT_LANG
    );

    const providerValue = useMemo<N_Common.T_AppContext>(() => {
        return {
            theme,
            lang,
            onChangeLang: () => setLang(localStorage.getItem(LS_LANG_KEY) as N_Common.T_AppContext['lang'] ?? process.env.REACT_APP_DEFAULT_LANG),
            onChangeTheme: () => setTheme(prev => prev === 'd' ? 'l' : 'd'),
        }
    }, [theme, lang, setTheme, setLang]);

    const bgClass = useMemo(() => {
        return applyBg && localStorage.getItem(LS_THEME_KEY) === 'd' ? 'bg--black' : 'bg--white'
    }, [localStorage.getItem(LS_THEME_KEY)]);

    return(
        <AppContext.Provider value={providerValue}>
            <div className={bgClass} style={{height}}>
                <div className="flex ai-center px-2 py-3 bg--grey wid-100" style={{cursor: 'pointer'}}>
                    <span className='mr-2'>Dark theme </span><Switch />
                </div>
                <div className="pa-10">
                    <Story />
                </div>
            </div>
        </AppContext.Provider>
    );
}

export default StoryThemeSwitcher;
