import './_utils/scss/main.scss';
import {BrowserRouter, Route, Routes} from 'react-router-dom';
import RootTemplate from './components/templates/Page';
import useRoutes from './hooks/useRoutes';
import {createContext, useMemo, useState} from 'react';
import {LS_LANG_KEY, LS_THEME_KEY} from './constants/localStorage';
import N_Common from './types/common';

export const AppContext = createContext<N_Common.T_AppContext>({} as N_Common.T_AppContext);

const App: React.FC<{}> = ({}) => {
    const [theme, setTheme] = useState<N_Common.T_AppContext['theme']>(
        localStorage.getItem(LS_THEME_KEY) as N_Common.T_AppContext['theme'] ?? process.env.REACT_APP_DEFAULT_THEME
    );
    const [lang, setLang] = useState<N_Common.T_AppContext['lang']>(
        localStorage.getItem(LS_LANG_KEY) as N_Common.T_AppContext['lang'] ?? process.env.REACT_APP_DEFAULT_LANG
    );

    const routes = useRoutes([theme]);


    const providerValue = useMemo<N_Common.T_AppContext>(() => {
        return {
            theme,
            lang,
            onChangeLang: () => setLang(
                localStorage.getItem(LS_LANG_KEY) as N_Common.T_AppContext['lang'] ??
                process.env.REACT_APP_DEFAULT_LANG
            ),
            onChangeTheme: () => setTheme(prev => prev === 'd' ? 'l' : 'd'),
        }
    }, [theme, lang, setTheme, setLang]);


    return (
        <AppContext.Provider value={providerValue}>
            <BrowserRouter>
                <Routes>
                    <Route path={'/'} element={<RootTemplate />}>
                        {routes.map((route) => (
                            <Route key={route.path} path={route.path} element={route.element} />
                        ))}
                    </Route>
                </Routes>
            </BrowserRouter>
        </AppContext.Provider>
    );
}

export default App;
