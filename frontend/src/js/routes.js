import React from 'react';
import {Route, IndexRoute} from 'react-router';

import App from './components/app';
import AboutMe from './components/about/about';
import BlogIndex from './components/blog/blog';
import PostDetail from './components/blog/post_detail'
import Contact from './components/contact/contact';
import MainPage from './components/main_page';
import Team from './components/team/team';
import Site from './components/site/site';
import menuItems from './components/header/menu_item_list';

export default (
    <Route component={App} >
        <Route path="" component={ MainPage } >
            <Route path="/" component= { BlogIndex } />
            <Route path="blog" component={ BlogIndex } />
            <Route path="blog/:id" component={ PostDetail } />
            <Route path="about" component={ AboutMe } />
            <Route path="site" component={ Site } />
            <Route path="team" component={ Team } />            
            <Route path="contact" component={ Contact } />                                    
        </Route>
    </Route >
);