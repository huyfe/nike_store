import React from 'react';
import { Link } from 'react-router-dom';
import './styles.scss';

import { connect } from 'react-redux';
import { actRemoveCart } from '../../actions/actCart';

MiniCart.propTypes = {

};

function MiniCart(props) {

    const deleteItemCart = (idProduct) => {
        props.removeCart(idProduct);
    }

    let products = props.carts.map(product => {
        return (
            <div key={product.id} className="miniCartProduct">
                <div className="miniCartProduct__image"> <img src={product.imageURL[0]} /> </div>
                <div className="miniCartProduct__card">
                    <h4>{product.name}</h4>
                    <p>Giá: {product.priceCart.toLocaleString("vi") || ""} VNĐ</p>
                    <span>Số lượng: {product.amount || ""}</span>

                    <button onClick={() => deleteItemCart(product.id)} className="miniCartProduct__delProduct">
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-x" viewBox="0 0 16 16">
                            <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z" />
                        </svg>
                    </button>
                </div>
            </div >
        )
    });

    const totalAmount = () => {
        let total = 0;
        if (props.carts.length > 0) {
            props.carts.forEach(p => total += p.amount);
        }
        return total;
    }

    const totalPrice = () => {
        let price = 0;
        if (props.carts.length > 0) {
            props.carts.forEach(p => price += p.price * p.amount);
        }
        return price;
    }

    console.log("Render lại");

    return (
        <div className="miniCart">
            <h2 className="miniCart__title">Giỏ hàng</h2>

            <div className="miniCart__listProduct">
                {products}
            </div>

            <div className="miniCart__total">
                <p>Tổng số lượng: {totalAmount()}</p>
                <p>Thành tiền: <span>{totalPrice().toLocaleString("vi")}</span> VNĐ</p>
            </div>

            <div className="miniCart__checkout">
                <Link to="/cart">
                    Thanh toán
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-bag-check" viewBox="0 0 16 16">
                        <path fillRule="evenodd" d="M10.854 8.146a.5.5 0 0 1 0 .708l-3 3a.5.5 0 0 1-.708 0l-1.5-1.5a.5.5 0 0 1 .708-.708L7.5 10.793l2.646-2.647a.5.5 0 0 1 .708 0z" />
                        <path d="M8 1a2.5 2.5 0 0 1 2.5 2.5V4h-5v-.5A2.5 2.5 0 0 1 8 1zm3.5 3v-.5a3.5 3.5 0 1 0-7 0V4H1v10a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V4h-3.5zM2 5h12v9a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V5z" />
                    </svg>
                </Link>
            </div>
        </div>
    );
}

const mapStateToProps = (state, ownProps) => {
    return {
        carts: state.cart,
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        removeCart: (id) => { dispatch(actRemoveCart(id)); },
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(MiniCart);