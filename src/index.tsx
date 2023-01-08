import React from 'react';
import {createRoot} from 'react-dom/client';
import {Provider} from 'react-redux';
import {store} from './_examples/store';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {LS_THEME_KEY} from './constants/localStorage';
import './i18n';
import './_utils/themes';

/**
 * TODO
 * Fix inline logo themes color
 * Fix UI icons themes color
 */

if(!localStorage.getItem(LS_THEME_KEY)) {
    localStorage.setItem(LS_THEME_KEY, process.env.REACT_APP_DEFAULT_THEME as string);
    window.themes.switchTheme(true);
} else {
    window.themes.switchTheme(localStorage.getItem(LS_THEME_KEY) === 'dark');
}

const container = document.getElementById('root')!;
const root = createRoot(container);

root.render(
    <React.StrictMode>
        <Provider store={store}>
            <App />
        </Provider>
    </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
