import React from 'react';
import {Route, IndexRoute} from 'react-router';

import App from './components/app';
import BlogIndex from './components/blog/blog';
import MainPage from './components/main_page';
import menuItems from './components/header/menu_item_list';

export default (
    <Route component={App} >
        <Route path="/" component={ MainPage } >
            <Route path="/blog" component={ BlogIndex } />
        </Route>
    </Route >
);