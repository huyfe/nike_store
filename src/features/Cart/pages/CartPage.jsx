import React, { useEffect } from 'react';
import Cart from '../components/Cart/index';

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
            <Cart />
        </>
    );
}

export default CartPage;