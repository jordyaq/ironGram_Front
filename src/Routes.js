import React from 'react'
import {Switch, Route} from 'react-router-dom'
import Signup from './components/auth/Signup';
import Login from './components/auth/Login';
import Profile from './components/auth/Profile';
import PublicProfile from './components/users/PublicProfile';
import mezcalCard from './components/cards/card';

const Routes = () => {
    return(
        <Switch>
            <Route path="/signup" component={Signup} />
            <Route path="/login" component={Login} />
            <Route path="/profile" component={Profile} />
            <Route path="/users/:id" component={PublicProfile} />
            <Route path="/cards" component={mezcalCard} />
        </Switch>
    )
}

export default Routes