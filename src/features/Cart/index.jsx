import React from 'react';
import PropTypes from 'prop-types';

import CartPage from './pages/CartPage';
import { Route, Switch } from 'react-router-dom';

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