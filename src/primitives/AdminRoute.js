import React from 'react';
import { Route, Redirect } from 'react-router-dom';

const privateRoute = ({ component: Component, path, ...props }) => {
    const auth = localStorage.getItem('e-majs-auth');
    const { state } = props.location;
    let allowed = auth && !!state && state.code === 'Aut0bu5';
    let to = auth ? '/overview' : '/login'
    return (
            <Route 
                path={path}
                render={() => allowed ? <Component /> : <Redirect to={to} />}
            />
        );
};

export default privateRoute;