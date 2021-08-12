import React from 'react';
import PropTypes from 'prop-types';
import './styles.scss';
import { Link, NavLink, Switch } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import { Col, Row } from "react-bootstrap";
import { connect } from "react-redux";
import { GoogleLogout } from 'react-google-login';
import { actRemoveUser } from '../../actions/actUser';

Header.propTypes = {
    amountProduct: PropTypes.number
};

function Header(props) {

    let amount = 0;
    props.carts.forEach((product) => {
        amount += Number(product.amount);
    })
    const logout = (res) => {
        alert("Đăng xuất thành công");
        props.logout();
    }

    return (
        <header className="header">
            <Container fluid={true} className="h-100 px-5">
                <Switch>
                    <Row className="align-items-center h-100 justify-content-between">
                        <Col lg={6} >
                            <ul className="header__menu text-left align-items-center">
                                <NavLink to="/" exact className="header__logo"> <img src="/images/logo.jpg" className="img-fluid" alt="Nike" /> </NavLink>
                                <NavLink to="/" exact> Trang chủ </NavLink>
                                <NavLink className="menu-item-has-children" to="/products" > Sản phẩm
                                    <ul className="sub-menu">
                                        {
                                            props.categories.map((category) => {
                                                return (<li key={category.id} className="sub-item">
                                                    <Link to={"/products/" + category.name}>{category.name}</Link>
                                                </li>)
                                            })
                                        }
                                    </ul>
                                </NavLink>
                                <NavLink to="/report" > Báo cáo </NavLink>
                                <NavLink to="/products/Sale" > Giảm giá </NavLink>
                                <NavLink to="/gallery" > Thư viện </NavLink>
                                <NavLink to="/contact" > Liên hệ </NavLink>
                            </ul>
                        </Col>

                        <Col className="col-auto">
                            <div className="header__icon text-right d-flex align-items-center">
                                <form className="header__icon--form mr-1">
                                    <input type="text" placeholder="Tìm kiếm..." />
                                    <button type="submit">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20"><g><g><g><path fill="#282827" d="M1.594 8.03a6.443 6.443 0 0 1 6.432-6.436c8.532.355 8.527 12.519 0 12.874A6.443 6.443 0 0 1 1.594 8.03zm12.4 5C18.239 8.098 14.589.176 8.026.23A7.8 7.8 0 0 0 .23 8.026c-.054 6.563 7.868 10.213 12.8 5.968l5.582 5.582a.682.682 0 0 0 .964-.964z"></path></g></g></g></svg>
                                    </button>
                                </form>
                                <NavLink to="/loved">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="16" viewBox="0 0 18 16"><g><g><path fill="#282827" d="M15.43 8.184L9.003 14.6 3.051 8.646l-.474-.462a3.915 3.915 0 0 1 0-5.518c1.787-1.76 4.442-1.4 5.997.478.12.106.273.168.433.176a.72.72 0 0 0 .434-.18c3.653-4.324 9.696.855 5.99 5.044zm.867-6.394a5.155 5.155 0 0 0-7.294.041A5.13 5.13 0 1 0 1.71 9.043L8.57 15.9a.61.61 0 0 0 .868 0l6.86-6.857a5.155 5.155 0 0 0 0-7.253z"></path></g></g></svg>
                                    <span>Lượt thích</span>
                                </NavLink>
                                <NavLink onMouseEnter={props.showMiniCart} onMouseLeave={props.showMiniCart} to="/cart">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="20" viewBox="0 0 16 20"><g><g><g><g><path fill="#282827" d="M1.73 18.41l.818-12.274h11.273l.818 12.273zM5.526 4.25c.258-3.86 5.69-3.35 5.308.54H5.526zm9.613 1.177a.682.682 0 0 0-.681-.636h-2.25c.29-6.055-8.337-6.055-8.046 0h-2.25a.682.682 0 0 0-.682.636L.321 19.064a.686.686 0 0 0 .682.727h14.364a.686.686 0 0 0 .681-.727z"></path></g></g></g></g></svg>
                                    <span>Giỏ hàng</span>
                                    <span className="total">{(amount > 9) ? "9+" : amount}</span>
                                </NavLink>

                                {props.user === null && <NavLink to="/login">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="19" height="20" viewBox="0 0 19 20"><g><g><g><path fill="#282827" d="M5.573 5.566a3.977 3.977 0 0 1 3.972-3.972c5.264.209 5.264 7.727 0 7.94a3.977 3.977 0 0 1-3.972-3.968zm6.922 4.437C16.841 7.126 14.832.253 9.545.23 4.26.207 2.273 7.126 6.595 10.003A9.573 9.573 0 0 0 0 19.093a.682.682 0 1 0 1.364 0 8.182 8.182 0 1 1 16.363 0 .682.682 0 1 0 1.364 0 9.573 9.573 0 0 0-6.596-9.09z"></path></g></g></g></svg>
                                    <span>Đăng nhập</span>
                                </NavLink>}

                                {props.user !== null &&
                                    <NavLink to="/user" className="header__icon--user">
                                        {props.user}
                                        <ul>
                                            <li><Link to="/admin">Quản lý sản phẩm</Link></li>
                                            <li>
                                                <NavLink to="/login">
                                                    <GoogleLogout
                                                        clientId="267514984177-9jmq7a1a45i4dug7b8snh11nqgtu34um.apps.googleusercontent.com"
                                                        buttonText="Đăng xuất"
                                                        onLogoutSuccess={logout}
                                                    >
                                                    </GoogleLogout>
                                                </NavLink>
                                            </li>

                                        </ul>
                                    </NavLink>
                                }

                            </div>
                        </Col>
                    </Row>
                </Switch>
            </Container>


        </header >
    );
}

const mapStateToProps = (state) => {
    return {
        categories: state.category,
        carts: state.cart,
        user: state.user,
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        logout: () => {
            dispatch(actRemoveUser());
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Header);