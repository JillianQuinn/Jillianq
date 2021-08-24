import React from "react";

import { Provider } from "react-redux";
import store from "../redux/store";

import Routes from "./Routes";

import ReactGA from "react-ga";
// ReactGA.initialize("G-HCVRBPMW6H");
ReactGA.initialize("205715074");

const Root = () => {
    return (
        <Provider store={store}>
            <Routes />
        </Provider>
    );
};

export default Root;
