import React from 'react';
import { Route, Switch } from 'react-router-dom';
import LoginPage from './pages/LoginPage';
import SignupPage from './pages/SignupPage';


UserFeature.propTypes = {

};

function UserFeature(props) {
    return (
        <Switch>
            <Route path="/login" exact component={LoginPage} />
            <Route path="/signup" exact component={SignupPage} />
        </Switch>
    );
}

export default UserFeature;