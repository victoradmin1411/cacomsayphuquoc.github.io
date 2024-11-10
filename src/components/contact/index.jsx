import "./index.scss";
import ContactImg from '../../asset/images/request-a-call.png';

export const Contact = () => {
    return (
            <div className="contact-content">
            <div className="container">
                <div className="grid grid-cols-2 gap-8">
                    <div>
                        <img src={ContactImg} alt="contact" />
                    </div>
                    <div className="contact-info">
                    <p className="mb-2">Công Ty TNHH Xuất Nhập Khẩu Cá Cơm Sấy Thành Phước</p>
                        <p className="mb-2">Trụ Sở: 320 A Nguyễn Văn Cừ, Phu Phố 8, P.An Thới, TP. Phú Quốc, tỉnh Kiên Giang</p>
                        <p className="mb-2">Điện Thoại: 0915767665 {`(Tú Mai)`}</p>
                        <p className="mb-2">Điện Thoại: 0913828811 {`(Thành Phước)`}</p>
                        <p className="mb-2">Email: cacomsaythanhphuoc@gmail.com</p>
                        <p className="mb-2">Website: https://cacomsayphuquoc.vn</p>
                        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14907.478291906116!2d103.99691204070874!3d10.245351546677734!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31a7896c239004e1%3A0xd51d5751797a6846!2sDuong%20Dong%20Lake!5e0!3m2!1svi!2s!4v1731157570155!5m2!1svi!2s"
                            style={{ width: "100%", height: "150px" }}
                            loading="lazy"
                            title="map">
                        </iframe>
                    </div>
                </div>
            </div>
        </div>
    )
}