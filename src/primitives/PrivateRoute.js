import React from 'react';
import { Route, Redirect } from 'react-router-dom';

const privateRoute = ({ component: Component, path }) => {
    const auth = localStorage.getItem('e-majs-auth');
    return (
            <Route 
                path={path} 
                render={() => auth ? <Component /> : <Redirect to="/login" />} 
            />
        );
};

export default privateRoute;