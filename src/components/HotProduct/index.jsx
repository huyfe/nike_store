import React from 'react';
import { Container } from 'react-bootstrap';
import ListProduct from '../ListProduct/index';
import './styles.scss';


HotProduct.propTypes = {

};

function HotProduct(props) {


    return (
        <div className="hotProduct">
            <Container fluid={true} className="px-5 mt-5">
                <h2 className="mb-4 text-bold">Giày Nổi Bật</h2>
                <ListProduct listProduct={props.hotProduct} />
            </Container>
        </div>
    );
}

export default HotProduct;