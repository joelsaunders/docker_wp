import React from 'react';
import {Route, IndexRoute} from 'react-router';

import App from './components/app';
import AboutMe from './components/about/about';
import BlogIndex from './components/blog/blog';
import Contact from './components/contact/contact';
import MainPage from './components/main_page';
import Misc from './components/misc/misc';
import Music from './components/music/music';
import menuItems from './components/header/menu_item_list';

export default (
    <Route component={App} >
        <Route path="/" component={ MainPage } >
            <Route path="/blog" component={ BlogIndex } />
            <Route path="/about" component={ AboutMe } />
            <Route path="/music" component={ Music } />
            <Route path="/misc" component={ Misc } />            
            <Route path="/contact" component={ Contact } />                                    
        </Route>
    </Route >
);