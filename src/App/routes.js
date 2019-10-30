import React from 'react';
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom';

/**
 * PAGES COMPONENTS
 */
import Loader from '../pages/Loader';
import Map from '../pages/Map';
import Listing from '../pages/Listing';
import Register from '../pages/Register';

export default () => {
    return (
        <Router>
            <Switch>
                <Route path="/" exact component={Loader} />
                <Route path="/map" component={Map} />
                <Route path="/listing" component={Listing} />
                <Route path="/register" component={Register} />
                <Redirect from="*" to="/" />
            </Switch>
        </Router>
    );
};
