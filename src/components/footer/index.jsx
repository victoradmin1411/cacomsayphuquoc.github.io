import "./index.scss";
import Logo from '../../asset/images/logo.png';
import IconFacebook from '../../asset/images/facebook.jpg';
import IconZalo from '../../asset/images/zalo.jpg';
import IconMap from '../../asset/images/map.png';
import IconTiktok from '../../asset/images/tiktok.png';


export const Footer = () => {
    return (
        <div className="footer">
            <div className="container">
                <div className="grid xl:grid-cols-4 xl:gap-4 lg:grid-cols-3 lg:gap-3 md:grid-cols-3 md:gap-3 sm:grid-cols-2 sm:gap-6">
                    <div className="logo">
                        <img src={Logo} alt="logo" />
                        <h2 className="text-center">cá cơm sấy</h2>
                    </div>
                    <div>
                        <h3 className="mb-3">chính sách hỗ trợ</h3>
                        <div className="line mb-3"></div>
                        <p><a href="/">Giao Hàng Tận Nơi</a></p>
                        <p><a href="/">Hỗ Trợ Khách Hàng</a></p>
                    </div>
                    <div>
                        <h3 className="mb-3">danh mục</h3>
                        <div className="line mb-3"></div>
                        <p><a href="/">Sản Phẩm</a></p>
                        <p><a href="/">Quy Trình</a></p>
                        <p><a href="/">Bảng Giá</a></p>
                    </div>
                    <div>
                        <h3 className="mb-3">kết nối với chúng tôi</h3>
                        <div className="line mb-3"></div>
                        <div className="grid grid-cols-2 gap-2 connect-with-us">
                            <div>
                                <a href="/">
                                    <img src={IconFacebook} alt="facebook"></img>
                                    <span>Facebook</span>
                                </a>
                            </div>
                            <div>
                                <a href="/">
                                    <img src={IconZalo} alt="zalo"></img>
                                    <span>Zalo</span>
                                </a>
                            </div>
                            <div>
                                <a href="/">
                                    <img src={IconMap} alt="map"></img>
                                    <span>Chỉ đường</span>
                                </a>
                            </div>
                            <div>
                                <a href="/">
                                    <img src={IconTiktok} alt="tiktok"></img>
                                    <span>Tiktok</span>
                                </a>
                            </div>
                        </div>


                    </div>
                </div>
                <div className="footer-bottom mt-4">
                    Công Ty TNHH Thủy Hải Sản Đông Nguyễn.
                    Trụ Sở: 320 A Nguyễn Văn Cừ, Phu Phố 8, P.An Thới, TP. Phú Quốc, tỉnh Kiên Giang
                    <br />Website: https://cacomsaythanhphuoc.vn
                    <br />
                    Điện Thoại: 0915.767.665
                </div>
            </div>
        </div>
    )
}