import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './styles.scss';
function Footer() {
    return (
        <footer className="footer pt-5 px-lg-5 px-3">
            <Container fluid={true} className="px-lg-5 px-2">
                <Row className="footer__top border-bottom border-dark no-gutters pb-3">
                    <Col lg={4} className="col-md-12 col-12">
                        <form className="footer__contact">
                            <h1>Liên hệ với chúng tôi</h1>
                            <div className="form-group mt-3">
                                <input type="text" placeholder="Type your email address" className="form-control w-75" />
                                <button type="submit" className="btn btn-primary">Submit</button>
                            </div>
                        </form>
                    </Col>
                    <Col lg={2} className="col-6 mt-lg-0 mt-4">
                        <ul className="footer__menu pl-sm-0 p-0">
                            <li ><Link className="text-white font-weight-bold" to="/">Trang chủ</Link></li>
                            <li><Link to="/">Giày</Link></li>
                            <li><Link to="/">Quần & Áo</Link></li>
                            <li><Link to="/">Dịch vụ</Link></li>
                            <li><Link to="/">Giảm giá</Link></li>
                        </ul>
                    </Col>
                    <Col lg={2} className="col-6 mt-lg-0 mt-4">
                        <ul className="footer__menu">
                            <li><Link className="text-white font-weight-bold" to="/">Về chúng tôi</Link></li>
                            <li><Link to="/">Chính sách vận chuyển</Link></li>
                            <li><Link to="/">Chính sách bảo mật</Link></li>
                            <li><Link to="/">Chăm sóc khách hàng</Link></li>
                            <li><Link to="/">Hỏi và đáp</Link></li>
                        </ul>
                    </Col>
                    <Col lg={4} className="text-lg-right text-center mt-lg-0 mt-4">
                        <ul className="footer__social d-flex justify-content-lg-end justify-content-md-center">
                            <li><Link to="www.facebook.com/ybx1802"><i className="fab fa-facebook"></i></Link></li>
                            <li><Link to="www.facebook.com/ybx1802"><i className="fab fa-instagram-square"></i></Link></li>
                            <li><Link to="www.facebook.com/ybx1802"><i className="fab fa-twitter-square"></i></Link></li>
                            <li><Link to="www.facebook.com/ybx1802"><i className="fab fa-linkedin"></i></Link></li>
                        </ul>
                    </Col>
                </Row>

                <Row className="footer__bottom mt-3 pb-sm-3 pb-3">
                    <Col lg={6}>
                        <div className="footer__copyright text-lg-left text-center">
                            <i style={{ fontSize: '16px' }} className="fas fa-map-marker-alt"></i> Vietnam, <span>Developed by Trần Quốc Huy |  All Rights Reserved</span>
                        </div>
                    </Col>
                    <Col lg={6}>
                        <div className="footer__more"></div>
                    </Col>
                </Row>
            </Container>
        </footer>
    );
}

export default Footer;