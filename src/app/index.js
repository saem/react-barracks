import React                from 'react';
import ReactDOM             from 'react-dom';

import 'babel-polyfill';
import 'animate.css';
import 'jquery';
import 'font-awesome/css/font-awesome.min.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';
import './style/index.scss';

import AppContainer from './AppContainer'

const ELEMENT_TO_BOOTSTRAP  = 'root';
const BootstrapedElement    = document.getElementById(ELEMENT_TO_BOOTSTRAP);

ReactDOM.render(<AppContainer />, BootstrapedElement);
