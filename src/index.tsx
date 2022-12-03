import React from 'react';
import {createRoot} from 'react-dom/client';
import {Provider} from 'react-redux';
import {store} from './_examples/store';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {LS_LANG_KEY, LS_THEME_KEY} from './constants/localStorage';

if(!localStorage.getItem(LS_THEME_KEY)) {
    localStorage.setItem(LS_THEME_KEY, process.env.REACT_APP_DEFAULT_THEME as string);
}
if(!localStorage.getItem(LS_LANG_KEY)) localStorage.setItem(LS_LANG_KEY, process.env.REACT_APP_DEFAULT_LANG as string);

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
