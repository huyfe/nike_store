import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import { actSetProToStore, removePro } from '../../actions/actPro';
import ReactDOM from 'react-dom';
import './style.scss';
Admin.propTypes = {

};
function Admin(props) {

    const [message, setMessage] = useState(false);
    useEffect(() => {
        const fetchProducts = () => {
            let url = "http://localhost:3500/product";
            return fetch(url, { method: "GET" }
            )
                .then(res => res.json())
                .then(data => {
                    props.setProToStore(data);
                });
        }
        fetchProducts();
        return () => { }
    }, [])

    const removeProduct = (id) => {
        setMessage({ message: true });
        let index = props.products.findIndex((ls) => { return ls.id === id })
        let loaisach = props.products[index];
        ReactDOM.render(
            <>
                <div className="box">
                    <h3>Xóa sản phẩm</h3>
                    <p>Bạn có chắc muốn xóa sản phẩm <span className="bold">{loaisach.name}</span>?</p>
                </div>
                <div className="control">
                    <button onClick={() => setMessage(false)} className="btn mr-2">Hủy bỏ</button>
                    <button onClick={(e) => chacChanXoa(id)} className='btn px-3 btn-sm btn-danger'>
                        Vẫn xóa
                    </button>
                </div>
            </>
            ,
            document.getElementById("warning"))
    }

    const chacChanXoa = (id) => {
        props.xoaProduct(id);
        setMessage(false);
    }

    let products = props.products.map(product => {
        return (<tr>
            <th>{product.id}</th>
            <td style={{ width: "20%" }}>{product.name}</td>
            <td style={{ width: "10%" }}><img style={{ width: '100%' }} src={product.imageURL[0]} alt="Images" /></td>
            <td>{product.price.toLocaleString("vi")} VNĐ</td>
            <td>{product.description}</td>
            <td><button onClick={() => removeProduct(product.id)} class="btn btn-danger mr-2">Xóa</button><button class="btn btn-primary">Sửa</button></td>
        </tr>)
    })

    return (
        <div className="container pt-5">
            <div id="warning" className={message ? "show delMessage" : "delMessage"}>

            </div>
            <h3>Quản lý sản phẩm</h3>
            <table class="table">
                <thead class="thead-light">
                    <tr>
                        <th>Mã</th>
                        <th>Tên sản phẩm</th>
                        <th>Hình</th>
                        <th>Giá</th>
                        <th>Mô tả</th>
                        <th>Xóa/Sửa</th>
                    </tr>
                </thead>
                <tbody>
                    {products}
                </tbody>
            </table>
        </div>
    );
}

const mapDispatch = (dispatch) => {
    return {
        setProToStore: (arrPro) => {
            dispatch(actSetProToStore(arrPro));
        },
        xoaProduct: (id) => {
            dispatch(removePro(id));
        }
    };
};

const mapStateToProps = (state) => {
    return {
        products: state.product,
        categories: state.category
    }
}
export default connect(mapStateToProps, mapDispatch)(Admin);
