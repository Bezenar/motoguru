import './_utils/scss/main.scss';
import {BrowserRouter, Route, Routes} from 'react-router-dom';
import RootTemplate from './pages/PageTemplate';
import useRoutes from './hooks/useRoutes';
import {createContext, useEffect, useReducer} from 'react';
import useBreakPoints from './hooks/useBreakPoints';
import calculateBreakPoint from './helpers/calculateBreakPoint';
import {LS_LANG_KEY, LS_THEME_KEY} from './constants/localStorage';
import themes from './_utils/themes';
import type {T_AppContext, T_LangShort, T_AppContextReducer, T_BreakPointsKeys} from './types';

//@ts-ignore
export const AppContext = createContext<T_Context>({});

const INITIAL_CONTEXT: T_AppContext = {
    isDark: localStorage.getItem(LS_THEME_KEY) !== 'light',
    themes: themes,
    language: (localStorage.getItem(LS_LANG_KEY) ?? import.meta.env.VITE_DEFAULT_LANG) as T_LangShort,
    breakPoint: calculateBreakPoint(),
};

const App: React.FC<{}> = ({}) => {
    const [state, dispatch] = useReducer<T_AppContextReducer, T_AppContext>(
        (prev, next) => ({...prev, ...next}),
        INITIAL_CONTEXT,
        (state) => state
    );

    const routes = useRoutes();

    const switchTheme = () => {
        localStorage.setItem(LS_THEME_KEY, state.isDark ? 'dark' : 'light');

        Object.entries(state.themes[state.isDark ? 'dark' : 'light']).forEach(([key, value]) => {
            document.documentElement.style.setProperty(`--${key}`, value);
        });
    };

    useEffect(() => {
        switchTheme();
    }, [state.isDark]);

    useBreakPoints((payload: T_BreakPointsKeys) => dispatch({breakPoint: payload}));

    return (
        <AppContext.Provider value={{...state, dispatch} as T_AppContext}>
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
