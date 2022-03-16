import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { GlobalStyles, Animations } from './global.styles';

ReactDOM.render(
    <React.StrictMode>
        <GlobalStyles />
        <Animations />
        <App />
    </React.StrictMode>,
    document.getElementById('root')
);
