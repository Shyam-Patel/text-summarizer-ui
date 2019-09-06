import React from 'react';
import ReactDOM from 'react-dom';
import {Route, BrowserRouter as Router, Switch} from 'react-router-dom';

import './styles/Index.css';
import App from './components/App';
import About from './components/About';
import PageNotFound from './components/PageNotFound';

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
