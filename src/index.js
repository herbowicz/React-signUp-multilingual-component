import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import './index.css';
import App from './components/App.jsx';
import * as serviceWorker from './serviceWorker';
import './i18n/i18n';

ReactDOM.render(
    <Router>
        <Route exact path="/:lng?" component={App}></Route>
    </Router>,
    document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
