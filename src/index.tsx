import React from 'react';
import ReactDOM from 'react-dom';
import {Route, Router, Switch} from 'react-router';
import createBrowserHistory from 'history/createBrowserHistory';

import './styles/Index.css';

import App from './components/App';
import About from './components/About';
import SharedLayout from './components/SharedLayout';
import PageNotFound from './components/PageNotFound';

let browserHistory = createBrowserHistory();

const routing = (
    <Router history={browserHistory}>
        <SharedLayout>
            <Switch>
            <Route exact path="/" component={App}></Route>
            <Route path="/about" component={About}></Route>
            <Route component={PageNotFound}></Route>
            </Switch>
        </SharedLayout>
    </Router>
)

ReactDOM.render(routing, document.getElementById('root'));
