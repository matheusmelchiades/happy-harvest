import React from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Redirect,
} from 'react-router-dom';

/**
 * PAGES COMPONENTS
 */
import Home from '../pages/Home';

export default () => {
    return (
        <Router>
            <Switch>
                <Route path="/home" component={Home} />
                <Redirect from="*" to="/home" />
            </Switch>
        </Router>
    );
};
