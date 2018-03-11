import React from 'react'
import ReactDOM from 'react-dom'
import createReactClass from 'create-react-class'

import './app.css'
import App from 'containers/App/App'
import 'font-awesome/css/font-awesome.css'

import {browserHistory} from 'react-router';

import makeRoutes from './routes'

const mountNode = document.querySelector("#root");

const routes = makeRoutes()

ReactDOM.render(<App history={browserHistory} routes={routes} />, mountNode);
