import React from 'react';
import PropTypes from 'prop-types';
import CartDetail from '../CartDetail/index';

CartList.propTypes = {

};

function CartList(props) {

    console.log(props.listProduct);
    let listProduct = [];
    props.listProduct.map((product) => {
        console.log("Product detail ", product);
        listProduct.push(<CartDetail key={product.id} product={product} />);
    });
    console.log("List product", listProduct);
    return (
        <div className="cart-list">
            {listProduct}
        </div>
    );
}

export default CartList;