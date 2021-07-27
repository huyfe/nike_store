import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { Route } from 'react-router-dom';
import ProductDetail from '../components/ProductDetail/index';
ProductDetailPage.propTypes = {

};
function ProductDetailPage(props) {
    useEffect(() => {
        window.scrollTo(0, 0);

        return () => {
        };
    }, []);
    return (
        <Route path="/product/:id" component={<ProductDetail />} />
    );
}

export default ProductDetail;