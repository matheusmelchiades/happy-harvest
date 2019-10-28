import React from 'react';
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom';

/**
 * PAGES COMPONENTS
 */
import Home from '../pages/Home';
import Listing from '../pages/Listing';
import Map from '../pages/Map';

export default () => {
    return (
        <Router>
            <Switch>
                <Route path="/home" component={Home} />
                <Route path="/map" component={Map} />
                <Route path="/listing" component={Listing} />
                <Redirect from="*" to="/listing" />
            </Switch>
        </Router>
    );
};
