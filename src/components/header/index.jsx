import React from "react";
import './index.scss';
import Logo from '../../asset/images/logo.png';
import Hotline from '../../asset/images/anahotline.gif'


export const Header = () => {
    return (
        <header className="app-header">
            <div className="top-header">
                <div className="container">
                    <div className="address">
                        <span>Trụ Sở: 320A Nguyễn Văn Cừ, Phu Phố 8, P.An Thới, TP. Phú Quốc, tỉnh Kiên Giang</span>
                    </div>
                    <nav>
                        <ul>
                            <li>Giới Thiệu Về Chúng Tôi</li>
                            <li>Liên hệ</li>
                        </ul>
                    </nav>
                </div>
            </div>
            <div className="content-header">
                <div className="container">
                    <div className="logo">
                        <a href="/">
                            <img src={Logo} alt="logo" />
                        </a>
                    </div>
                    <div className="content-banner">
                        <h1>
                            <span className="font-bold">CÁ CƠM SẤY </span>
                            <span className="font-bold name">THÀNH PHƯỚC</span>
                        </h1>
                        <p className="text-center">Chuyên cung cấp sỉ & lẻ cá cơm sấy</p>
                    </div>
                    <div className="hotline">
                        <img src={Hotline} alt="" />
                        <div>
                            <p className="text font-bold">Hotline</p>
                            <p className="phone font-bold">0915767665</p>
                        </div>
                    </div>
                </div>
            </div>
            {/* <h1 className="text-3xl font-bold underline">
                Hello world!
            </h1> */}
            <div className="header">
            <div className="container">
                <nav>
                    <ul>
                        <li>
                            <a href={`/`}>Trang Chủ</a>
                        </li>
                        <li>
                            <a href={`/`}>Sản Phẩm</a>
                        </li>
                        <li>
                            <a href={`/`}>Quy Trình</a>
                        </li>
                        <li>
                            <a href={`/`}>Bảng Giá</a>
                        </li>
                        <li>
                            <a href={`/contact`}>Liên Hệ</a>
                        </li>
                    </ul>
                </nav>
            </div>
            </div>
        </header>
    )
}