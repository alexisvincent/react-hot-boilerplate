import 'systemjs-hot-reloader/default-listener.js';
import 'react-hot-loader/patch';
import { AppContainer } from 'react-hot-loader';
import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import Layout from './Layout';

const rootEl = document.getElementById('root');

let render = () =>
    ReactDOM.render(
      <AppContainer><App /></AppContainer>,
      rootEl
    );

export function __reload() {
    render();
}

render();
