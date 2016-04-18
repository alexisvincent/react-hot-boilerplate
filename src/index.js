import 'systemjs-hot-reloader/default-listener.js';
import 'react-hot-loader/patch'; // Need to do this?
import { AppContainer } from 'react-hot-loader';
import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import Layout from './Layout';

const rootEl = document.getElementById('root');

let render = () => 
    ReactDOM.render(
      <AppContainer component={App} />,
      rootEl
    );

export function __reload() {
    render();
}

render();
