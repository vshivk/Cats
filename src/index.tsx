import React from 'react';
import {createRoot} from 'react-dom/client';
import App from './App';
import {BrowserRouter} from "react-router-dom";
import {Provider} from "react-redux";
import {setupStore} from "./store/store";

const container = document.getElementById('root')!;
const root = createRoot(container);
const store = setupStore();

root.render(
    <React.StrictMode>
        <BrowserRouter>
            <Provider store={store}>
                <App/>
            </Provider>
        </BrowserRouter>
    </React.StrictMode>
);
