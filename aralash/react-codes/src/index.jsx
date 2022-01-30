import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

import { Provider as ThemeProvider } from './Context/Theme';
import { Provider as AuthProvider } from './Context/Authentication';
import { BrowserRouter } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

ReactDOM.render(
	<React.StrictMode>
		<BrowserRouter>
			<AuthProvider>
				<ThemeProvider>
					<App />
				</ThemeProvider>
			</AuthProvider>
		</BrowserRouter>
	</React.StrictMode>,
	document.getElementById('root'),
);
