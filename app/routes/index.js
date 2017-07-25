import {Route, IndexRoute} from 'react-router';
import React from 'react'

import Homepage from '../containers/homepage';
import Wrapper from '../containers/wrapper';

export default (
    <Route path='/' component={Wrapper}>
        <IndexRoute component={Homepage}/>
        <Route path='home' component={Homepage}/>
    </Route>
)