import React from 'react';
import { Router, Route, IndexRoute, browserHistory } from 'react-router';
import App from './components/App';
import Home from './containers/Home';
import loginEmail from './components/loginEmail';
import NotFoundPage from './components/NotFoundPage';




export default (
    <Route path="/" component={App}>
       <IndexRoute component={Home}/>
       <Route path="/loginEmail" component={loginEmail}/>
       <Route path="*" component={NotFoundPage}/>
   </Route>
);
