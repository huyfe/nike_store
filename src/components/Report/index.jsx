import React from 'react';
import './style.scss';

index.propTypes = {

};

function index(props) {

    return (
        <div className="sectionReport container">
            <h1>Những thứ đã làm</h1>
            <ul className="pt-5">
                <li>
                    <span className="dot"></span>
                    <h3>Trang chủ</h3>
                    <p>Nhúng video từ iframe, header dùng router có dropdown loại sản phẩm lấy từ json-server,
                        gọi component sản phẩm hot.
                    </p>
                </li>
                <li>
                    <span className="dot"></span>
                    <h3>Sản phẩm</h3>
                    <p>
                        Viết ý kiến, hiển thị ý kiến theo id sản phẩm <br />
                        Phân loại sản phẩm, lấy sản phẩm nào đang giảm giá, thêm xóa sửa giỏ hàng, giỏ hàng mini,
                        thích sản phẩm, thêm sản phẩm vào giỏ hàng, chi tiết sản phẩm. Dùng slideer cho sản phẩm liên quan
                    </p>
                </li>
                <li>
                    <span className="dot"></span>
                    <h3>Tài khoản</h3>
                    <p>
                        Hiển thị màn hình đăng nhập, đăng nhập đăng xuất với google
                    </p>
                </li>
                <li>
                    <span className="dot"></span>
                    <h3>Giỏ hàng</h3>
                    <p>
                        Sử dụng redux để lưu dữ liệu giỏ hàng, comment. <br />
                        Thêm vào giỏ hàng khi đang ở chi tiết, thanh toán và xóa giỏ hàng, Làm giỏ hàng trống
                    </p>
                </li>
                <li>
                    <span className="dot"></span>
                    <h3>Chức năng chat</h3>
                    <p>
                        Tích hợp tiện ích chat của Facebook
                    </p>
                </li>
                <li>
                    <span className="dot"></span>
                    <h3>API</h3>
                    <p>
                        Sử dụng API unplash để làm trang thư viện
                    </p>
                </li>
            </ul>
        </div>
    );
}

export default index;