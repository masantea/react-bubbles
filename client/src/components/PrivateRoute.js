import React from 'react';
import {Route, Redirect} from 'react-router-dom';

const PrivateRoute = ({Component}) => {

    return <Route render={() => {

        return localStorage.getItem('token') ?
            <Component />:
            <Redirect to='/'/>
    
    } } />
}

export default PrivateRoute; 