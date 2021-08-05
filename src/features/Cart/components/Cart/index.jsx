import React from 'react';
import PropTypes from 'prop-types';
import CartList from '../CartList/index';
import { Col, Container, Row } from 'react-bootstrap';
import './styles.scss';
import { connect } from 'react-redux';

Cart.propTypes = {

};

function Cart(props) {
    console.log(props.carts);

    let amount = 0;
    let price = 0;
    let fee = 30000;
    props.carts.forEach((product) => {
        amount += Number(product.amount);
        price += product.amount * product.price;
    })

    let total = price + 30000;

    return (
        <div className="cardSection border-bottom pb-5">
            <Container>
                <Row>
                    <Col lg={8}>
                        <div className="cardSection__title mt-5 mb-3 border-bottom">
                            <h4>Giỏ hàng</h4>
                        </div>
                        <CartList />
                    </Col>
                    <Col lg={4} >
                        <div className="cardSection__summary mt-5 border-bottom">
                            <h4>Sơ lược</h4>
                            <p><span>Tổng số lượng:</span> <span>{amount}</span></p>
                            <p><span>Tổng giá:</span> <span>{price.toLocaleString("vi")} VNĐ</span></p>
                            <p><span>Phí vận chuyển:</span> <span>{fee.toLocaleString("vi")} VNĐ</span></p>
                        </div>
                        <div className="cardSection__checkout mt-4">
                            <p><span>Tổng cộng:</span> <span>{total.toLocaleString("vi")} VNĐ</span></p>
                            <button className="form-control">Thanh toán</button>
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
    );
}

const mapStateToProps = (state, ownProps) => {
    return {
        carts: state.cart
    }
}

export default connect(mapStateToProps, null)(Cart);