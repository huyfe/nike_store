import React from 'react';
import PropTypes from 'prop-types';
import { Route } from 'react-router-dom';
import ProductDetailPage from './pages/ProductDetailPage';

ProductFeature.propTypes = {

};
function ProductFeature(props) {
    return (
        // <Route path="/product" exact/>
        <Route path="/product/:id" children={<ProductDetailPage />} />
    );
}

export default ProductFeature;