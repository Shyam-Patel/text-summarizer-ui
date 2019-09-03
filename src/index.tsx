import React from 'react';
import ReactDOM from 'react-dom';
import {Route, BrowserRouter as Router, Switch} from 'react-router-dom';

import './index.css';
import App from './App';
import About from './About';
import PageNotFound from './PageNotFound';

const routing = (
    <Router>
        <div>
            <Switch>
            <Route exact path="/" component={App}></Route>
            <Route path="/about" component={About}></Route>
            <Route component={PageNotFound}></Route>
            </Switch>
        </div>
    </Router>
)

ReactDOM.render(routing, document.getElementById('root'));
