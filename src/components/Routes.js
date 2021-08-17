import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import Home from "./home/Home";

import ReactGA from "react-ga";

const routes = [
    {
        name: "Home",
        path: "/",
        component: Home,
    },
];

const Routes = () => {
    const logPageView = () => {
        ReactGA.set({
            page: window.location.pathname + window.location.search,
        });
        ReactGA.pageview(window.location.pathname + window.location.search);
    };
    logPageView();

    return (
        <Router>
            <Switch>
                {routes.map((route) => (
                    <Route
                        key={route.name}
                        exact={route.exact}
                        path={route.path}
                        component={route.component}
                    />
                ))}
            </Switch>
        </Router>
    );
};

export default Routes;
