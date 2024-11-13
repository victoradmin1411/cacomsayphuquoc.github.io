import "./index.scss";
import ContactImg from '../../asset/images/request-a-call.png';

export const Contact = () => {
    return (
            <div className="contact-content">
            <div className="container">
                <div className="grid md:grid-cols-2 md:gap-8 sm:grid-cols-1 sm:gap-8">
                    <div className="image">
                        <img src={ContactImg} alt="contact" />
                    </div>
                    <div className="contact-info">
                    <p className="mb-2">Công Ty TNHH Thủy Hải Sản Đông Nguyễn</p>
                        <p className="mb-2">Trụ Sở: 320 A Nguyễn Văn Cừ, Phu Phố 8, P.An Thới, TP. Phú Quốc, tỉnh Kiên Giang</p>
                        <p className="mb-2">Điện Thoại: 0915767665 {`(Tú Mai)`}</p>
                        <p className="mb-2">Điện Thoại: 0913828811 {`(Thành Phước)`}</p>
                        <p className="mb-2">Email: thanhphuocpq90@gmail.com</p>
                        <p className="mb-2">Website: https://cacomsayphuquoc.vn</p>
                        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3928.832650416266!2d104.01455567529258!3d10.030664872505778!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31a796a3696a4dc1%3A0xe5974a84efa6d316!2zMzIwYSDEkC4gTmd1eeG7hW4gVsSDbiBD4burLCBLaHUgUGjhu5EgMywgUGjDuiBRdeG7kWMsIEtpw6puIEdpYW5nLCBWaeG7h3QgTmFt!5e0!3m2!1svi!2s!4v1731503558396!5m2!1svi!2s"
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