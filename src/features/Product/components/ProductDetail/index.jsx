import React, { useEffect, useState } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { connect } from 'react-redux';
import { Link, useParams } from 'react-router-dom';
import { actAddReview, actGetReviewByIdProduct } from '../../../../actions/actReview';
import ListProduct from '../../../../components/ListProduct';
import './styles.scss';
import { actAddCart, actEditCart } from '../../../../actions/actCart';


ProductDetail.propTypes = {

};
function ProductDetail(props) {
    const [isReview, setIsReview] = useState(false);
    const [sao, setSao] = useState(0);
    const [noidung, setNoidung] = useState("");
    let { id } = useParams();
    useEffect(() => {
        window.scrollTo(0, 0);
        return () => {
        };
    }, []);

    const hamSetSao = (value) => {
        if (sao === 1 && value === 1) {
            console.log(sao);
            setSao(0);
        }
        else {
            setSao(value);
        }
    }
    const showReview = () => {
        if (isReview == false) {
            window.scrollTo({
                top: 600,
                left: 0,
                behavior: 'smooth'
            });
        }
        setIsReview(!isReview);
    }

    const changeNoidung = (e) => {
        setNoidung(e.target.value);
    }

    const submitReview = (e) => {
        e.preventDefault();
        const review = {
            id: new Date().getTime(),
            ten: props.user,
            noidung: noidung,
            sao: sao,
            ngay: new Date().toLocaleString("vi-VN"),
            productId: id
        }

        let url = "http://localhost:3500/review";
        fetch(url, {
            method: "POST",
            body: JSON.stringify(review),
            headers: { 'Content-Type': 'application/json' }
        })
            .then(response => response.json())
            .then(data => {
                props.addReview(review);
                setSao(0);
                setNoidung("");
                setIsReview(true);
            })

    }

    const addToCart = (idProduct) => {
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

    let product = props.products.find((product, index) => (product.id === Number(id)));
    let reviews = props.reviews.map((review, index) => {
        if (review.productId === id) {
            return (
                <li className="border-bottom mt-3">
                    <div className="user">
                        <span className="time">{review.ngay}</span>
                        <p className="d-flex">
                            <span className="d-block">{review.ten}</span>
                            <div className="ml-3 star">
                                {review.sao > 0 && <i class="far fa-star"></i>}
                                {review.sao > 1 && <i class="far fa-star"></i>}
                                {review.sao > 2 && <i class="far fa-star"></i>}
                                {review.sao > 3 && <i class="far fa-star"></i>}
                                {review.sao > 4 && <i class="far fa-star"></i>}
                            </div>
                        </p>
                        <p>{review.noidung}</p>
                    </div>
                </li>
            )
        }
    });
    let amountReview = 0;
    props.reviews.forEach((review, index) => {
        if (review.productId === id) {
            amountReview++;
        };
    });
    console.log("Amount", amountReview);
    return (
        <>
            <Container className="productDetail">
                <Row>
                    <Col lg={12}>
                        <div className="wrapProductDetail mt-5">
                            <Row>
                                <Col lg={7}>
                                    <div className="wrapProductDetail__image">
                                        <img className="img-fluid" src={"../" + product.imageURL[0]} alt={product.name} />
                                    </div>
                                </Col>
                                <Col lg={5}>
                                    <div className="wrapProductDetail__info">
                                        <h5 className="d-flex justify-content-between">
                                            <span>{product.name}</span>
                                            <span>{product.price.toLocaleString("vi")} VNĐ</span>
                                        </h5>
                                        <p>{product.description}</p>
                                        <p className="color"> Color {product.color} <br />
                                            {(product.color === 'White') ? <button style={{ backgroundColor: product.color }}> </button> : ''}
                                            {(product.color === 'Red') ? <button style={{ backgroundColor: product.color }}> </button> : ''}
                                            {(product.color === 'Blue') ? <button style={{ backgroundColor: product.color }}> </button> : ''}
                                            {(product.color === 'Pink') ? <button style={{ backgroundColor: product.color }}> </button> : ''}
                                            {(product.color === 'Cyan') ? <button style={{ backgroundColor: product.color }}> </button> : ''}
                                            {(product.color === 'Green') ? <button style={{ backgroundColor: product.color }}> </button> : ''}
                                            {(product.color === 'Gray') ? <button style={{ backgroundColor: product.color }}> </button> : ''}
                                        </p>
                                        <p>
                                            Size <br />
                                            {product.size.map((size, index) => {
                                                return <button key={size[index]} className="btn">{size}</button>
                                            })}
                                        </p>
                                    </div>
                                    <div className="wrapProductDetail__checkout mb-5">
                                        <Link onClick={() => addToCart(product.id)} to="/cart">Thêm vào giỏ hàng <i class="fas fa-long-arrow-alt-right" aria-hidden="true"></i></Link>
                                    </div>
                                    <div className="wrapProductDetail__other border-top">
                                        <ul className="pt-3 m-0 pl-0">
                                            <li className="border-bottom py-3"><h4>Miễn phí đổi trả</h4></li>
                                            <li className="border-bottom py-3"><h4>Chính sách vận chuyển</h4></li>
                                            <li className="border-bottom py-3">
                                                <button onClick={showReview} className="w-100 bg-transparent border-0 d-flex justify-content-between">
                                                    <h4>Đánh giá ({amountReview !== 0 ? amountReview : "0"}) </h4>
                                                    <i className="fas fa-chevron-down"></i>
                                                </button>
                                                <div className="write-review mt-4">
                                                    <form>
                                                        <div className="form-group d-flex">
                                                            <div onClick={() => hamSetSao(1)} className={sao > 0 ? "sao checked" : "sao"}> <i class="far fa-star"></i> </div>
                                                            <div onClick={() => hamSetSao(2)} className={sao > 1 ? "sao checked" : "sao"}> <i class="far fa-star"></i> </div>
                                                            <div onClick={() => hamSetSao(3)} className={sao > 2 ? "sao checked" : "sao"}> <i class="far fa-star"></i> </div>
                                                            <div onClick={() => hamSetSao(4)} className={sao > 3 ? "sao checked" : "sao"}> <i class="far fa-star"></i> </div>
                                                            <div onClick={() => hamSetSao(5)} className={sao > 4 ? "sao checked" : "sao"}> <i class="far fa-star"></i> </div>
                                                        </div>
                                                        <div className="form-group">
                                                            <textarea onChange={(e) => changeNoidung(e)} value={noidung} placeHolder="Viết đánh giá" className="form-control" rows="3"></textarea>
                                                        </div>
                                                        <div className="form-group">
                                                            <button onClick={(e) => submitReview(e)} className="border-0 p-2 bg-dark text-light">Gửi đánh giá</button>
                                                        </div>
                                                    </form>
                                                </div>
                                                <ul className={isReview ? "list-review mt-2" : "d-none"}>
                                                    {reviews}
                                                </ul>
                                            </li>
                                        </ul>
                                    </div>
                                </Col>
                            </Row>
                        </div>
                    </Col>
                </Row>

            </Container>

            <Container className="relatedProduct pb-3 overflow-hidden mb-5" fluid={true}>
                <h3 className="mt-5 text-center mb-3">Sản phẩm liên quan</h3>
                <ListProduct listProduct={props.products} />
            </Container>
        </>
    );
}

const mapDispatchToProps = (dispatch) => {
    return {
        addReview: (review) => {
            dispatch(actAddReview(review));
        },
        getReview: (arrReview) => {
            dispatch(actGetReviewByIdProduct(arrReview));
        },
        addCart: (product) => { dispatch(actAddCart(product)); },
        editCart: (id, product) => { dispatch(actEditCart(id, product)); },
    }
}

const mapStateToProps = (state) => {
    return {
        products: state.product,
        reviews: state.review,
        user: state.user,
        carts: state.cart,
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ProductDetail);