import React from 'react';
import Slider from "react-slick";
import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";
import Product from '../Product/index';
import './styles.scss';


ListProduct.propTypes = {

};

function ListProduct(props) {


    let listProduct = [];
    props.listProduct.forEach((product) => {
        listProduct.push(<Product key={product.id} product={product} />);
    });

    var settings = {
        dots: true,
        infinite: true,
        speed: 500,
        loop: false,
        slidesToShow: 4,
        slidesToScroll: 1,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 4,
                    slidesToScroll: 1,
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    };

    return (
        <Slider {...settings}>
            {listProduct}
        </Slider>
    );
}

export default ListProduct;