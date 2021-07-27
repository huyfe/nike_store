import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Link, useParams } from 'react-router-dom';
import { Col, Container, Row } from 'react-bootstrap';
import './styles.scss';
import { useEffect } from 'react';
import ListProduct from '../../../../components/ListProduct';

ProductDetail.propTypes = {

};
function ProductDetail(props) {

    useEffect(() => {
        window.scrollTo(0, 0);

        return () => {
        };
    }, []);

    const products = [
        { id: 0, name: 'Nike Air Max 2021', amount: 0, price: 200000, salePrice: 1, imageURL: ['../images/shoes-1.jpg', '1', '2', '3', '4'], description: 'Giày thể thao dành cho tất cả mọi người, kiểu dáng đẹp, mẫu mã đa dạng, hàng chính hãng', category: 0, style: 'Lifestyle', createdDate: new Date(), views: 1, likes: 1, color: 'White', size: [39, 40, 41, 42], isSale: 0 },
        { id: 1, name: 'Nike Air Force 1', amount: 0, price: 350000, salePrice: 1, imageURL: ['../images/shoes-2.jpg', '1', '2', '3', '4'], description: 'Giày thể thao dành cho tất cả mọi người, kiểu dáng đẹp, mẫu mã đa dạng, hàng chính hãng', category: 0, style: 'Air Force 1', createdDate: new Date(), views: 1, likes: 1, color: 'Pink', size: [39, 40, 41, 42], isSale: 1 },
        { id: 2, name: 'Nike Jordan 1 x Dior', amount: 0, price: 545000, salePrice: 1, imageURL: ['../images/shoes-3.jpg', '1', '2', '3', '4'], description: 'Giày thể thao dành cho tất cả mọi người, kiểu dáng đẹp, mẫu mã đa dạng, hàng chính hãng', category: 0, style: 'Jordan', createdDate: new Date(), views: 1, likes: 1, color: 'Cyan', size: [39, 40, 41, 42], isSale: 0 },
        { id: 3, name: 'Nike Phantom GT2 Elite FG', amount: 0, price: 299000, salePrice: 1, imageURL: ['../images/shoes-4.jpg', '1', '2', '3', '4'], description: 'Giày thể thao dành cho tất cả mọi người, kiểu dáng đẹp, mẫu mã đa dạng, hàng chính hãng', category: 0, style: 'Soccer', createdDate: new Date(), views: 1, likes: 1, color: 'Blue', size: [39, 40, 41, 42], isSale: 1 },
        { id: 4, name: 'Nike Sportwear', amount: 0, price: 499000, salePrice: 1, imageURL: ['../images/shoes-5.jpg', '1', '2', '3', '4'], description: 'Giày thể thao dành cho tất cả mọi người, kiểu dáng đẹp, mẫu mã đa dạng, hàng chính hãng', category: 1, style: 'Shorts', createdDate: new Date(), views: 1, likes: 1, color: 'Gray', size: [39, 40, 41, 42], isSale: 1 },
        { id: 5, name: 'Nike Sportwear Alumni', amount: 0, price: 299000, salePrice: 1, imageURL: ['../images/shoes-6.jpg', '1', '2', '3', '4'], description: 'Giày thể thao dành cho tất cả mọi người, kiểu dáng đẹp, mẫu mã đa dạng, hàng chính hãng', category: 1, style: 'Shorts', createdDate: new Date(), views: 1, likes: 1, color: 'White', size: [39, 40, 41, 42], isSale: 1 },
        { id: 6, name: 'Nike Team USA', amount: 0, price: 199000, salePrice: 1, imageURL: ['../images/shoes-7.jpg', '1', '2', '3', '4'], description: 'Giày thể thao dành cho tất cả mọi người, kiểu dáng đẹp, mẫu mã đa dạng, hàng chính hãng', category: 1, style: 'Pants', createdDate: new Date(), views: 1, likes: 1, color: 'Gray', size: [39, 40, 41, 42], isSale: 1 },
        { id: 7, name: 'Nike Sportwear Club Fleece', amount: 1, price: 199000, salePrice: 1, imageURL: ['../images/shoes-8.jpg', '1', '2', '3', '4'], description: 'Giày thể thao dành cho tất cả mọi người, kiểu dáng đẹp, mẫu mã đa dạng, hàng chính hãng', category: 1, style: 'Shorts', createdDate: new Date(), views: 1, likes: 1, color: 'Gray', size: [39, 40, 41, 42], isSale: 1 },
        { id: 8, name: 'Nike Sportwear Club Fleece', amount: 1, price: 899000, salePrice: 1, imageURL: ['0', '1', '2', '3', '4'], description: 'Giày thể thao dành cho tất cả mọi người, kiểu dáng đẹp, mẫu mã đa dạng, hàng chính hãng', category: 2, style: 'Hoodies', createdDate: new Date(), views: 1, likes: 1, color: 'Gray', size: [39, 40, 41, 42], isSale: 1 },
        { id: 9, name: 'Nike Sportwear Tech Fleece', amount: 1, price: 459000, salePrice: 1, imageURL: ['0', '1', '2', '3', '4'], description: 'Giày thể thao dành cho tất cả mọi người, kiểu dáng đẹp, mẫu mã đa dạng, hàng chính hãng', category: 2, style: 'Hoodies', createdDate: new Date(), views: 1, likes: 1, color: 'Gray', size: [39, 40, 41, 42], isSale: 1 },
        { id: 10, name: 'Nike Sportwear Club', amount: 0, price: 499000, salePrice: 1, imageURL: ['0', '1', '2', '3', '4'], description: 'Giày thể thao dành cho tất cả mọi người, kiểu dáng đẹp, mẫu mã đa dạng, hàng chính hãng', category: 2, style: 'T-shirts', createdDate: new Date(), views: 1, likes: 1, color: 'Gray', size: [39, 40, 41, 42], isSale: 1 },
        { id: 11, name: 'Nike x Space Jam', amount: 0, price: 399000, salePrice: 1, imageURL: ['0', '1', '2', '3', '4'], description: 'Giày thể thao dành cho tất cả mọi người, kiểu dáng đẹp, mẫu mã đa dạng, hàng chính hãng', category: 2, style: 'T-shirts', createdDate: new Date(), views: 1, likes: 1, color: 'Gray', size: [39, 40, 41, 42], isSale: 1 },
    ];

    let { id } = useParams();

    let product = products.find((product, index) => { if (product.id === Number(id)) return true; });

    const [isReview, setIsReview] = useState(false);

    const showReview = () => {
        setIsReview(!isReview);
    }

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
                                            {(product.color == 'White') ? <button style={{ backgroundColor: product.color }}> </button> : ''}
                                            {(product.color == 'Red') ? <button style={{ backgroundColor: product.color }}> </button> : ''}
                                            {(product.color == 'Blue') ? <button style={{ backgroundColor: product.color }}> </button> : ''}
                                            {(product.color == 'Pink') ? <button style={{ backgroundColor: product.color }}> </button> : ''}
                                            {(product.color == 'Cyan') ? <button style={{ backgroundColor: product.color }}> </button> : ''}
                                            {(product.color == 'Green') ? <button style={{ backgroundColor: product.color }}> </button> : ''}
                                            {(product.color == 'Gray') ? <button style={{ backgroundColor: product.color }}> </button> : ''}
                                        </p>
                                        <p>
                                            Size <br />
                                            {product.size.map(size => {
                                                return <button className="btn">{size}</button>
                                            })}
                                        </p>
                                    </div>
                                    <div className="wrapProductDetail__checkout mb-5">
                                        <Link to="/cart">Thêm vào giỏ hàng <i class="fas fa-long-arrow-alt-right" aria-hidden="true"></i></Link>
                                    </div>
                                    <div className="wrapProductDetail__other border-top">
                                        <ul className="pt-3 m-0 pl-0">
                                            <li className="border-bottom py-3"><h4>Miễn phí đổi trả</h4></li>
                                            <li className="border-bottom py-3"><h4>Chính sách vận chuyển</h4></li>
                                            <li className="border-bottom py-3">
                                                <button onClick={showReview} className="w-100 bg-transparent border-0 d-flex justify-content-between">
                                                    <h4>Đánh giá (1) </h4>
                                                    <i className="fas fa-chevron-down"></i>
                                                </button>
                                                <div className="write-review mt-4">
                                                    <form>
                                                        <div className="form-group">
                                                            <i class="far fa-star"></i>
                                                            <i class="far fa-star"></i>
                                                            <i class="far fa-star"></i>
                                                            <i class="far fa-star"></i>
                                                            <i class="far fa-star"></i>
                                                        </div>
                                                        <div className="form-group">
                                                            <textarea placeHolder="Viết đánh giá" className="form-control" rows="3"></textarea>
                                                        </div>
                                                        <div className="form-group">
                                                            <button className="border-0 p-2 bg-dark text-light">Gửi đánh giá</button>
                                                        </div>
                                                    </form>
                                                </div>
                                                <ul className={isReview ? "list-review mt-2" : "d-none"}>
                                                    <li className="border-bottom mt-3">
                                                        <div className="user">
                                                            <span className="time">Jul 23, 2021</span>
                                                            <p className="d-flex">
                                                                <span className="d-block">Trần Quốc Huy</span>
                                                                <div className="ml-3 star">
                                                                    <i class="far fa-star"></i>
                                                                    <i class="far fa-star"></i>
                                                                    <i class="far fa-star"></i>
                                                                    <i class="far fa-star"></i>
                                                                    <i class="far fa-star"></i>
                                                                </div>
                                                            </p>
                                                            <p>Giày rất đẹp!</p>
                                                        </div>
                                                    </li>
                                                    <li className="border-bottom mt-3">
                                                        <div className="user">
                                                            <span className="time">Jul 23, 2021</span>
                                                            <p className="d-flex">
                                                                <span className="d-block">Thầy Long</span>
                                                                <div className="ml-3 star">
                                                                    <i class="far fa-star"></i>
                                                                    <i class="far fa-star"></i>
                                                                    <i class="far fa-star"></i>
                                                                    <i class="far fa-star"></i>
                                                                    <i class="far fa-star"></i>
                                                                </div>
                                                            </p>
                                                            <p>Tôi sẽ mua một đôi!</p>
                                                        </div>
                                                    </li>
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
                <ListProduct listProduct={products} />
            </Container>
        </>
    );
}

export default ProductDetail;