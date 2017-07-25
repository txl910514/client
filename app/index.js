import 'babel-polyfill'
import React from 'react';
import ReactDom from 'react-dom';
import { Router,hashHistory} from 'react-router'
import {Provider} from 'react-redux'
import "./styles/app.scss"

import routes from './routes'
import storeConfig from './redux'
 const store = storeConfig();

ReactDom.render(
    (
        <Provider store={store.store}>
            <Router history={hashHistory} routes={routes}/>
        </Provider>
    ),
    document.getElementById('root')
);