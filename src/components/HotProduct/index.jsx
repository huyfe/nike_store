import React, { useState } from 'react';
import { Container } from 'react-bootstrap';
import ListProduct from '../ListProduct/index';
import './styles.scss';


HotProduct.propTypes = {

};

function HotProduct(props) {

    const updateCart = (idProduct) => {
        props.updateCart(idProduct);
    }

    return (
        <div className="hotProduct">
            <Container fluid={true} className="px-5 mt-5">
                <h2 className="mb-4 text-bold">Giày Nổi Bật</h2>
                <ListProduct updateCart={updateCart} listProduct={props.hotProduct} />
            </Container>
        </div>
    );
}

export default HotProduct;