import React, { useEffect } from 'react';
import Products from '../components/Products/index';
ProductPage.propTypes = {

};

function ProductPage(props) {


    useEffect(() => {
        window.scrollTo(0, 0);
        return () => {
        };
    }, []);

    return (
        <Products />
    );
}

export default ProductPage;