import React from 'react';
import { connect } from 'react-redux';
import { useParams } from 'react-router-dom';
import Product from '../../../../components/Product/index';
import './style.scss';

Products.propTypes = {

};


function Products(props) {

    let { id } = useParams();

    var count = 0;
    var countSneaker = 0;
    var countQuan = 0;
    var countAo = 0;
    var countSale = 0;

    console.log("list products", props.products);

    let listAll = props.products.map(product => {
        count++;
        product.imageURL[0] = "../" + product.imageURL[0];
        return (
            <div className="col-lg-3">
                <Product product={product} />
            </div>
        )
    })

    let listSneaker = props.products.map(product => {
        if (product.categoryId === 0) {
            countSneaker++;
            product.imageURL[0] = "../" + product.imageURL[0];
            return (
                <div className="col-lg-3">
                    <Product product={product} />
                </div>
            )
        }
    })

    let listQuan = props.products.map(product => {
        if (product.categoryId === 1) {
            countQuan++;
            product.imageURL[0] = "../" + product.imageURL[0];
            return (
                <div className="col-lg-3">
                    <Product product={product} />
                </div>
            )
        }
    })

    let listAo = props.products.map(product => {
        if (product.categoryId === 2) {
            countAo++;
            product.imageURL[0] = "../" + product.imageURL[0];
            return (
                <div className="col-lg-3">
                    <Product product={product} />
                </div>
            )
        }
    })

    let listSale = props.products.map(product => {
        if (product.isSale === 1) {
            countSale++;
            product.imageURL[0] = "../" + product.imageURL[0];
            return (
                <div className="col-lg-3">
                    <Product product={product} />
                </div>
            )
        }
    })

    return (
        <div className="sectionProducts container-fluid px-lg-5 px-3">
            <div className="row">
                <div className="col-12">
                    <div className="breadcrumbs">
                        <span>Trang chủ / sản phẩm / {id} ({id === "Giày" && countSneaker}
                            {id === "Quần" && countQuan}
                            {id === "Sale" && countSale}
                            {id == null && count}
                            {id === "Áo" && countAo})</span>
                        <h3>Tất cả {id} </h3>
                    </div>
                </div>
            </div>
            <div className="row">
                {id === "Giày" && listSneaker}
                {id === "Quần" && listQuan}
                {id === "Áo" && listAo}
                {id === "Sale" && listSale}
                {id == null && listAll}
            </div>
        </div>
    );
}

const mapStateToProps = (state) => {
    return {
        products: state.product
    }
}
export default connect(mapStateToProps, null)(Products);