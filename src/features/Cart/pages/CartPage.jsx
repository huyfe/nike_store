import React from 'react';
import PropTypes from 'prop-types';
import Cart from '../components/Cart/index';
import { useEffect } from 'react';

CartPage.propTypes = {

};

function CartPage(props) {
    useEffect(() => {
        window.scrollTo(0, 0);

        return () => {
        };
    }, []);
    return (
        <>
            <Cart selectedProducts={props.selectedProducts} />
        </>
    );
}

export default CartPage;