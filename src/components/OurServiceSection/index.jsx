import React from 'react';
import PropTypes from 'prop-types';
import { Container, Row, Col } from 'react-bootstrap';
import './styles.scss';
import { Link } from 'react-router-dom';

OurServiceSection.propTypes = {

};

function OurServiceSection(props) {
    return (
        <div className="OurServiceSection">
            <Container fluid={true} className="p-5">
                <Row>
                    <Col lg={12}>
                        {/* <div className="OurServiceSection__title">
                            <h2 className="text-center">Sản phẩm</h2>
                        </div> */}
                        <div className="OurServiceSection__content mt-5">
                            <Row>
                                <Col lg={6}>
                                    <div style={{ backgroundImage: `url("./images/pants.jpg")` }} className="content OurServiceSection__content--shoes">
                                        <div className="content__text px-5 py-3">
                                            <h3>Quần</h3>
                                            <Link to="/product">Xem thêm</Link>
                                        </div>
                                    </div>
                                </Col>
                                <Col lg={6}>
                                    <div style={{ backgroundImage: `url("./images/hoodies.jpg")` }} className="content OurServiceSection__content--shirts ">
                                        <div className="content__text px-5 py-3">
                                            <h3>Áo</h3>
                                            <Link to="/product">Xem thêm</Link>
                                        </div>
                                    </div>
                                    <div style={{ backgroundImage: `url("./images/shoes.jpg")` }} className="content OurServiceSection__content--pants ">
                                        <div className="content__text px-5 py-3">
                                            <h3>Giày</h3>
                                            <Link to="/product">Xem thêm</Link>
                                        </div>
                                    </div>
                                </Col>
                            </Row>
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>

    );
}

export default OurServiceSection;