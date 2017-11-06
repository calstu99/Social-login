import React from 'react';
import {  Route, IndexRoute } from 'react-router';
import App from './components/App';
import Home from './containers/Home';
import LoginEmail from './containers/LoginEmail';
import SingUp from './containers/SingUp';
import NotFoundPage from './components/NotFoundPage';




export default (
    <Route path="/" component={App}>
       <IndexRoute component={Home}/>
       <Route path="/loginEmail" component={LoginEmail}/>
       <Route path="/singUp" component={SingUp}/>
       <Route path="*" component={NotFoundPage}/>
   </Route>
);
