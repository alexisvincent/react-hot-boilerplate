import 'systemjs-hot-reloader/default-listener.js';
import 'react-hot-loader/patch';
import { AppContainer } from 'react-hot-loader';
import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

ReactDOM.render(
    <AppContainer><App /></AppContainer>,
    document.getElementById('root')
);
