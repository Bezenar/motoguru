import {createRoot} from 'react-dom/client';
import App from './App.tsx';
import {LS_LANG_KEY, LS_THEME_KEY} from './constants/localStorage.ts';
import './i18n';

if (!localStorage.getItem(LS_THEME_KEY)) {
    localStorage.setItem(LS_THEME_KEY, (import.meta.env.VITE_DEFAULT_THEME as string) ?? 'dark');
}

if (!localStorage.getItem(LS_LANG_KEY)) {
    localStorage.setItem(LS_LANG_KEY, (import.meta.env.VITE_DEFAULT_LANG as string) ?? 'en');
}

const container = document.getElementById('root')!;
const root = createRoot(container);

root.render(<App />);
