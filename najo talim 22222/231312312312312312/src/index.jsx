import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

import { Provider } from './Context/Localization'
import { Provider as ThemeProvider } from './Context/Theme'

ReactDOM.render(
    <React.StrictMode>
        <ThemeProvider>
            <Provider>
                <App />
            </Provider>
        </ThemeProvider>
    </React.StrictMode>,
    document.getElementById('root'),
);
