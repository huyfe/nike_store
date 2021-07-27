import { Col, Container, Row } from 'react-bootstrap';
import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import './styles.scss';
import { Link, Redirect } from 'react-router-dom';
import { withRouter } from "react-router-dom";

class Login extends Component {
    constructor(props) {
        super(props);
        this.state = {
            username: "",
            password: "",
            messageUsername: "",
            messagePassword: "",
            isLogin: false,
        }
    }

    componentDidMount() {
        window.scrollTo(0, 0);
    }

    getUserName = (e) => {
        this.state.username = e.target.value;
        this.setState({ messageUsername: "" });
    }

    getPassword = (e) => {
        this.state.password = e.target.value;
        this.setState({ messagePassword: "" });
    }

    onSubmit = (e) => {
        e.preventDefault();
        var username = this.state.username;
        var password = this.state.password;

        if (username == "") this.setState({ messageUsername: "Vui lòng điền tên đăng nhập!" });
        if (password == "") this.setState({ messagePassword: "Vui lòng điền mật khẩu!" });

        if (username !== "" && password !== "") {
            this.setState({ isLogin: true });
            setTimeout(() => {
                this.setState({ isLogin: false });
            })

        }
    }

    render() {
        console.log("Render");
        const kq =
            <>
                <Container>
                    <Row className="wrapFormLogin justify-content-center ">
                        <Col className="col-lg-4">
                            {/* <div id="message" className={!this.state ? 'slideUp' : ''}><p>Đăng nhập thành công</p></div> */}
                            <div className="form-login">
                                <h1 className="w-100 form-login__title text-center">
                                    Đăng nhập
                                </h1>
                                <p className="text-center">
                                    Vui lòng đăng nhập bên dưới - nếu bạn đã đăng ký trên trang web cũ của chúng tôi, vui lòng tạo một tài khoản mới và chúng tôi sẽ sao chép tất cả các đơn đặt hàng của bạn.
                                </p>
                                <form onSubmit={this.onSubmit}>

                                    <div className="mt-4">
                                        <input type="text" onChange={this.getUserName} className="form-control" placeHolder="Địa chỉ email" />
                                        <span>{this.state.messageUsername}</span>
                                    </div>
                                    <div className="mt-4">
                                        <input type="password" onChange={this.getPassword} className="form-control" placeHolder="Mật khẩu" />
                                        <span>{this.state.messagePassword}</span>
                                    </div>
                                    <div className="mt-4 text-right">
                                        <Link to="/forget">Quên mật khẩu?</Link>
                                    </div>
                                    <div className="mt-3">
                                        <button type="submit" onClick={this.onSubmit} value="Đăng nhập" className="btn py-2 btn-primary form-control" >Đăng nhập</button>
                                        {this.state.isLogin ? < Redirect to="/" /> : null}
                                    </div>
                                    <div className="mt-5 d-flex justify-content-between">
                                        <Link to="/signup">Bạn chưa có tài khoản?</Link>
                                        <Link to="/signup">Tạo tài khoản</Link>
                                    </div>
                                </form>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </>
            ;

        return (kq);
    }
}

export default Login;