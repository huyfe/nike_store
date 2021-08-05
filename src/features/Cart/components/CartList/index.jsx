import React from 'react';
import PropTypes from 'prop-types';
import CartDetail from '../CartDetail/index';
import { connect } from 'react-redux';

CartList.propTypes = {

};

function CartList(props) {

    console.log(props.carts);
    let listProduct = [];
    props.carts.map((product) => {
        console.log("Product detail ", product);
        listProduct.push(<CartDetail key={product.id} product={product} />);
    });
    console.log(listProduct);
    return (
        <div className="cart-list">
            {listProduct}
        </div>
    );
}

const mapStateToProps = (state) => {
    return {
        carts: state.cart
    }
}

export default connect(mapStateToProps, null)(CartList);