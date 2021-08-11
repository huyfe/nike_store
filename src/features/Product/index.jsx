import React from 'react';
import Switch from 'react-bootstrap/esm/Switch';
import { Route } from 'react-router-dom';
import ProductDetailPage from './pages/ProductDetailPage';
import ProductPage from './pages/ProductPage';

ProductFeature.propTypes = {

};
function ProductFeature(props) {
    return (
        // <Route path="/product" exact/>
        <>
            <Switch>
                <Route path="/product/:id" children={<ProductDetailPage />} />
                <Route path="/products/:id" children={<ProductPage />} />
                <Route path="/products" exact children={<ProductPage />} />
            </Switch>
        </>
    );
}

export default ProductFeature;