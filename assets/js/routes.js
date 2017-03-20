import React from 'react';
import {Route, IndexRoute} from 'react-router';

import App from './components/app';
import MainPage from './components/main_page';

export default (
    <Route childRoutes={lad} component={App} >
        <Route path="/" component={MainPage}>
            <Route  path="/posts" component={post} />
        </Route>
    </Route>
);