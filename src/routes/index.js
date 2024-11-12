import { Fragment } from 'react';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "../Pages/Home";
import Signin from "../Pages/Signin";
import Signup from "../Pages/Signup";


const RoutesApp = () => {
    return (
        <BrowserRouter>
        <Fragment>
            <Routes>
            </Routes>
        </Fragment>
        </BrowserRouter>
    );
};

export default RoutesApp;