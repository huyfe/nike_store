import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { Route } from 'react-router-dom';
import Products from '../components/Products/index';
import { Link, useParams } from 'react-router-dom';
ProductPage.propTypes = {

};

function ProductPage(props) {

    let { param } = useParams();

    useEffect(() => {
        window.scrollTo(0, 0);
        return () => {
        };
    }, []);

    return (
        <Products />
    );
}

export default ProductPage;