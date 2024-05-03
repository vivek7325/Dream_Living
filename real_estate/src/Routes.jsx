import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import SignUp from './Pages/SignUp';
import Login from './Pages/Login';

const Routes = () => {
    return (
        <BrowserRouter>
            <Switch>
                <Route path='/Login' Component={Login} exact/>
                <Route path='/SignUp' Component={SignUp} exact/>
            </Switch>
        </BrowserRouter>
    )
}

export default Routes;