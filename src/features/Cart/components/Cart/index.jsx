import React, { useState } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { connect } from 'react-redux';
import CartList from '../CartList/index';
import './styles.scss';
import { actEditCart, actRemoveCart, actClearCart } from '../../../../actions/actCart';

Cart.propTypes = {

};


function Cart(props) {
    console.log(props.carts);

    const [message, setMessage] = useState(false);

    let amount = 0;
    let price = 0;
    let fee = 30000;
    props.carts.forEach((product) => {
        amount += Number(product.amount);
        price += product.amount * product.price;
    })

    let total = price + 30000;

    const checkout = () => {
        setMessage(true);
        setTimeout(() => {
            props.clearCart();
            setMessage(false);
        }, 2000)
    }

    return (
        <div className="cardSection border-bottom pb-5">
            <div className={message ? "message show" : "message"}>
                <p>Cảm ơn bạn đã mua hàng</p>
                <img src="https://icon-library.com/images/load-icon-gif/load-icon-gif-26.jpg" alt="" />
            </div>
            <Container>
                <Row>
                    <Col lg={8}>
                        <div className="cardSection__title mt-5 mb-3 border-bottom">
                            <h4>Giỏ hàng</h4>
                        </div>
                        {amount == 0 && <div className="text-center mt-5">Giỏ hàng trống... <div className="mt-2"><img src="https://cdn.dribbble.com/users/204955/screenshots/4930541/emptycart.png"></img></div></div>}
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
                            <button onClick={() => checkout()} className="form-control">Thanh toán</button>
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
    );
}


const mapDispatchToProps = (dispatch) => {
    return {
        clearCart: () => { dispatch(actClearCart()); }
    }
}
const mapStateToProps = (state, ownProps) => {
    return {
        carts: state.cart
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Cart);