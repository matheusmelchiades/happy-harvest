import React from 'react';
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom';

/**
 * PAGES COMPONENTS
 */
import Listing from '../pages/Listing';
import Register from '../pages/Register';
import Map from '../pages/Map';

export default () => {
    return (
        <Router>
            <Switch>
                <Route path="/map" component={Map} />
                <Route path="/register" component={Register} />
                <Route path="/listing" component={Listing} />
                <Redirect from="*" to="/listing" />
            </Switch>
        </Router>
    );
};
