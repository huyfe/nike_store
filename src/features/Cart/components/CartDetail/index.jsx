import React from 'react';
import PropTypes from 'prop-types';
import { Col, Row } from 'react-bootstrap';
import './styles.scss';

import { connect } from 'react-redux';

import { actRemoveCart, actEditCart } from '../../../../actions/actCart';

CartDetail.propTypes = {

};

function CartDetail(props) {

    const deleteItemCart = (idProduct) => {
        console.log(idProduct);
        props.removeCart(idProduct);
    }

    const updateQuantity = (idProduct) => e => {
        console.log(e.target.value);
        let productDetail = props.products.find(p => p.id === idProduct);
        if (productDetail !== undefined) {
            let newProductDetail = props.carts.find(p => p.id === idProduct);
            if (newProductDetail !== undefined) {
                newProductDetail.amount = e.target.value;
                newProductDetail.priceCart = Number(newProductDetail.amount * newProductDetail.price);
                props.editCart(idProduct, newProductDetail);
            }
            else {
                productDetail.priceCart = productDetail.price;
                props.addCart(productDetail);
            }
        }
    }

    return (
        <>
            <Row>
                <Col lg={12}>
                    <div className="card-cart">
                        <div className="card-cart__image"> <img src={props.product.imageURL[0]} /> </div>
                        <div className="card-cart__card">
                            <h4>
                                <span>{props.product.name}</span>
                                <span>{props.product.price.toLocaleString("vi")} VNĐ</span>
                            </h4>
                            <p > Color {props.product.color} <br />
                                {(props.product.color == 'White') ? <button style={{ backgroundColor: props.product.color }}> </button> : ''}
                                {(props.product.color == 'Red') ? <button style={{ backgroundColor: props.product.color }}> </button> : ''}
                                {(props.product.color == 'Blue') ? <button style={{ backgroundColor: props.product.color }}> </button> : ''}
                                {(props.product.color == 'Pink') ? <button style={{ backgroundColor: props.product.color }}> </button> : ''}
                                {(props.product.color == 'Cyan') ? <button style={{ backgroundColor: props.product.color }}> </button> : ''}
                                {(props.product.color == 'Green') ? <button style={{ backgroundColor: props.product.color }}> </button> : ''}
                                {(props.product.color == 'Gray') ? <button style={{ backgroundColor: props.product.color }}> </button> : ''}
                            </p>
                            <p>
                                <span>Size: {props.product.size[0]}</span>
                                <span>Số lượng:
                                    <select onChange={updateQuantity(props.product.id)} value={props.product.amount} className="ml-1">
                                        {/* <option selected value={props.product.amount}>{props.product.amount}</option> */}
                                        <option select={(props.product.amount == 1) ? "selected" : "false"} value="1">1</option>
                                        <option select={(props.product.amount == 1) ? "selected" : "false"} value="2">2</option>
                                        <option select={(props.product.amount == 1) ? "selected" : "false"} value="3">3</option>
                                        <option select={(props.product.amount == 1) ? "selected" : "false"} value="4">4</option>
                                        <option select={(props.product.amount == 1) ? "selected" : "false"} value="5">5</option>
                                        <option select={(props.product.amount == 1) ? "selected" : "false"} value="6">6</option>
                                        <option select={(props.product.amount == 1) ? "selected" : "false"} value="7">7</option>
                                        <option select={(props.product.amount == 1) ? "selected" : "false"} value="8">8</option>
                                        <option select={(props.product.amount == 1) ? "selected" : "false"} value="9">9</option>
                                        <option select={(props.product.amount == 1) ? "selected" : "false"} value="10">10</option>
                                    </select>
                                </span>
                            </p>
                            <button onClick={() => deleteItemCart(props.product.id)} className="card-cart__delProduct">
                                Xóa
                            </button>
                        </div>
                    </div >;
                </Col>
            </Row>
        </>
    );
}

const mapDispatchToProps = (dispatch) => {
    return {
        removeCart: (idProduct) => { dispatch(actRemoveCart(idProduct)); },
        editCart: (idProduct, product) => { dispatch(actEditCart(idProduct, product)) }
    }
}

const mapStateToProps = (state) => {
    return {
        products: state.product,
        carts: state.cart,
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(CartDetail);