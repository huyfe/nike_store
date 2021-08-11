import React, { useState } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { actAddCart, actEditCart, actRemoveCart } from '../../actions/actCart';
import './styles.scss';

Product.propTypes = {

};

function Product(props) {
    const [like, setLike] = useState(false);
    const [cart, setCart] = useState(false);

    const onLike = () => {
        setLike(!like);
    }
    const onCart = () => {
        setCart(!cart);
    }

    const addToCart = (idProduct) => {
        onCart();
        let productDetail = props.products.find(p => p.id === idProduct);
        if (productDetail !== undefined) {
            let newProductDetail = props.carts.find(p => p.id === idProduct);
            if (newProductDetail !== undefined) {
                newProductDetail.amount += 1;
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
        <div className="card-product">
            <div className="card-product__image">
                <img src={props.product.imageURL[0]} alt="" />
                <img src={props.product.imageURL[1]} alt="" />
            </div>
            <h4 className="card-product__name mt-3"><Link to={"../product/" + props.product.id}>{props.product.name}</Link></h4>
            <p className="card-product__price">Giá: {props.product.price.toLocaleString("vi")} VNĐ</p>

            <div className="card-product__action">
                <button onClick={onLike}>
                    <div className={like ? "actionMessage actionMessage--like action" : "actionMessage actionMessage--like"}>Đã thích</div>
                    <svg className={like ? 'liked' : ''} xmlns="http://www.w3.org/2000/svg" width="18" height="16" viewBox="0 0 18 16"><g><g><path fill="#282827" d="M15.43 8.184L9.003 14.6 3.051 8.646l-.474-.462a3.915 3.915 0 0 1 0-5.518c1.787-1.76 4.442-1.4 5.997.478.12.106.273.168.433.176a.72.72 0 0 0 .434-.18c3.653-4.324 9.696.855 5.99 5.044zm.867-6.394a5.155 5.155 0 0 0-7.294.041A5.13 5.13 0 1 0 1.71 9.043L8.57 15.9a.61.61 0 0 0 .868 0l6.86-6.857a5.155 5.155 0 0 0 0-7.253z"></path></g></g></svg>
                </button>
                <button onClick={() => addToCart(props.product.id)}>
                    <div className={cart ? "actionMessage actionMessage--cart action" : "actionMessage actionMessage--like"}>Đã thêm vào giỏ hàng</div>
                    <svg className={cart ? 'liked' : ''} xmlns="http://www.w3.org/2000/svg" width="16" height="20" viewBox="0 0 16 20"><g><g><g><g><path fill="#282827" d="M1.73 18.41l.818-12.274h11.273l.818 12.273zM5.526 4.25c.258-3.86 5.69-3.35 5.308.54H5.526zm9.613 1.177a.682.682 0 0 0-.681-.636h-2.25c.29-6.055-8.337-6.055-8.046 0h-2.25a.682.682 0 0 0-.682.636L.321 19.064a.686.686 0 0 0 .682.727h14.364a.686.686 0 0 0 .681-.727z"></path></g></g></g></g></svg>
                </button>
            </div>
        </div>
    );
}

const mapDispatchToProps = (dispatch) => {
    return {
        editCart: (id, product) => { dispatch(actEditCart(id, product)); },
        addCart: (product) => { dispatch(actAddCart(product)); },
        removeCart: (id) => { dispatch(actRemoveCart(id)); },
    };
}

const mapStateToProps = (state) => {
    return {
        carts: state.cart,
        products: state.product
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Product);
