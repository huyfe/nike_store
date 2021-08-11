import React, { Component } from 'react';
import './style.scss';
import { Col, Container, Row } from 'react-bootstrap';
import ReactDOM from 'react-dom';
class Gallery extends Component {
    constructor() {
        super();
        this.state = { images: [], page: 1, height: 100 };
        this.tukhoa = React.createRef();
    }

    componentDidMount() {
        let tk = "Nike";
        let page = 1;
        let per_page = 6;
        let yourKey = "BSyi4wz7UULppGk1vWa4HX_FoqVzp0il-9pyow1ehac";
        let url = "https://api.unsplash.com/search/photos";
        let fullUrl = `${url}?query=${tk}&page=${page}&per_page=${per_page}&client_id=${yourKey}`;

        fetch(fullUrl)
            .then(res => {
                if (!res.ok) throw Error(res.statusText);
                return res.json();
            })
            .then((data) => {
                this.xuly(data.results);
            })
    }

    xuly = (data) => {
        let pictures = data;
        let listPic = [];
        pictures.forEach((picture, index) => {
            listPic.push(<div className="wrap-item"><img className="image-item" key={index} src={picture.urls.regular} /></div>)
        })

        let box_image = <div className="grid-image">{listPic}</div>
        this.state.images = box_image;

        ReactDOM.render(box_image, document.getElementById("ketQua"));
    }

    phanTrang = () => {
        let tk = "Nike";
        let page = this.state.page + 1;
        let per_page = 6;
        let yourKey = "BSyi4wz7UULppGk1vWa4HX_FoqVzp0il-9pyow1ehac";
        let url = "https://api.unsplash.com/search/photos";
        let fullUrl = `${url}?query=${tk}&page=${page}&per_page=${per_page}&client_id=${yourKey}`;

        fetch(fullUrl)
            .then(res => {
                if (!res.ok) throw Error(res.statusText);
                return res.json();
            })
            .then((data) => {
                let listPic = [];
                data.results.forEach((picture, index) => {
                    listPic.push(<div className="wrap-item"><img className="image-item" key={index} src={picture.urls.regular} /></div>)
                })

                let box_image = <> {this.state.images} <div className="grid-image">{listPic}</div> </>;
                this.state.images = box_image;

                ReactDOM.render(box_image, document.getElementById("ketQua"));
                this.state.page = this.state.page + 1;
                this.state.height += 1000;
                window.scrollTo({
                    top: this.state.height,
                    left: 100,
                    behavior: 'smooth'
                });
                this.state.height -= 200;
            })
    }

    render() {
        const kq =
            <>
                <Container fluid={true} className="gallery">
                    <Row >
                        <Col lg={12}>
                            <div className="title">
                                <p className="mb-0">Hình ảnh</p>
                                <h3>Thư viện ảnh</h3>
                            </div>
                        </Col>
                    </Row>
                    <Row>
                        <Col lg={12}>
                            <div id="ketQua"></div>
                        </Col>
                        <Col lg={12}>
                            <div className="load-more">
                                <button className="load-more" onClick={this.phanTrang}>Tải thêm</button>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </>
        return (kq);
    }
}

export default Gallery;