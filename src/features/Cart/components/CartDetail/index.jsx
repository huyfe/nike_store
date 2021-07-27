import React from 'react';
import PropTypes from 'prop-types';
import { Col, Row } from 'react-bootstrap';
import './styles.scss';
CartDetail.propTypes = {

};

function CartDetail(props) {

    const deleteItemCart = (idProduct) => {
        console.log(idProduct);
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
                                    <select className="ml-1">
                                        <option selected value={props.product.amount}>{props.product.amount}</option>
                                        <option value={props.product.amount}>1</option>
                                        <option value="2">2</option>
                                        <option value="3">3</option>
                                        <option value="4">4</option>
                                        <option value="5">5</option>
                                        <option value="6">6</option>
                                        <option value="7">7</option>
                                        <option value="8">8</option>
                                        <option value="9">9</option>
                                        <option value="10">10</option>
                                    </select>
                                </span>
                            </p>
                            <button onClick={deleteItemCart(props.product.id)} className="card-cart__delProduct">
                                Xóa
                            </button>
                        </div>
                    </div >;
                </Col>
            </Row>
        </>
    );
}

export default CartDetail;