import React from 'react';
import { Route, Switch } from 'react-router-dom';
import CartPage from './pages/CartPage';


CartFeature.propTypes = {

};

function CartFeature(props) {
    return (
        <Switch>
            <Route path="/cart" exact component={CartPage} />
        </Switch>
    );
}

export default CartFeature;