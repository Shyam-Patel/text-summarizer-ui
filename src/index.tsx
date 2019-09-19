import React from 'react';
import ReactDOM from 'react-dom';
import {Route, Router, Switch} from 'react-router';
import createBrowserHistory from 'history/createBrowserHistory';

import 'primereact/resources/themes/nova-light/theme.css';
import 'primereact/resources/primereact.min.css';
import 'primeicons/primeicons.css';

import Home from './components/Home';
import About from './components/About';
import Background from './components/Background';
import SharedLayout from './components/SharedLayout';
import PageNotFound from './components/PageNotFound';

let browserHistory = createBrowserHistory();

const routing = (
    <Router history={browserHistory}>
        <SharedLayout>
            <Switch>
            <Route exact path="/" component={Home}></Route>
            <Route path="/background" component={Background}></Route>
            <Route path="/about" component={About}></Route>
            <Route component={PageNotFound}></Route>
            </Switch>
        </SharedLayout>
    </Router>
)

ReactDOM.render(routing, document.getElementById('root'));
