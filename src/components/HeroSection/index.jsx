import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './styles.scss';
HeroSection.propTypes = {

};

function HeroSection(props) {
    return (
        <Container fluid={true} className="p-0 overflow-hidden">
            <Row>
                <Col lg={12}>
                    <div className="heroSection">
                        <div className="embed-responsive embed-responsive-16by9">
                            <iframe title="Nike" className="embed-responsive-item" src="https://player.vimeo.com/video/183832746?badge=0&autopause=0&player_id=0&app_id=58479&background=1&loop=1" ></iframe>
                        </div>

                        <div className="heroSection__content">
                            <h1>Mang đến trải nghiệm tuyệt vời dành cho bạn</h1>
                            <p>Những sản phẩm chất lượng và mới nhất của chúng tôi đang chờ bạn khám phá!</p>
                            <div className="heroSection__content--link">
                                <Link to="/product">Shop Now <i className="fas fa-long-arrow-alt-right"></i></Link>
                            </div>
                        </div>
                    </div>
                </Col>
            </Row>
        </Container>
    );
}

export default HeroSection;