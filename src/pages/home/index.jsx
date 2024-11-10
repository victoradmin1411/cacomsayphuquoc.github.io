import React from "react";
import './index.scss';
import { Banner } from "../../components/banner";
import BannerImage from "../../asset/images/img-banner-1.png";
import ImgProduct from "../../asset/images/kho-ca-com-2.jpg";
import { Product } from "../../components/product";
import { Procedure } from "../../components/procedure";
import ImgProcedure from "../../asset/images/chon_va_thu_hoach.jpg";
import { Contact } from "../../components/contact";



export const HomePage = () => {
    const products = [
        {
            id: 1,
            title: "Cá Cơm Rim Nước Mắm",
            img: ImgProduct,
            desc: "Cá Cơm Rim Nước Mắm – cá cơm tươi rim cùng nước mắm Phú Quốc đậm đà, giòn ngọt hài hòa, giàu dinh dưỡng với protein và Omega-3. Món ăn lý tưởng, mang hương vị biển cả vào bữa cơm gia đình."
        },
        {
            id: 2,
            title: "Cá Cơm Khô Sấy Lạnh",
            img: ImgProduct,
            desc: "Cá Cơm Khô Sấy Lạnh – cá cơm tươi Phú Quốc được sấy lạnh giữ trọn hương vị ngọt tự nhiên và dinh dưỡng. Sản phẩm giòn, thơm, giàu protein và Omega-3, không chất bảo quản, thích hợp để chế biến thành nhiều món ngon như chiên, nướng hay xào, mang lại hương vị biển cả tinh khiết cho mọi bữa ăn."
        },
        {
            id: 3,
            title: "Cá Cơm Khô - Sỉ",
            img: ImgProduct,
             desc: "cung cấp sỉ cá cơm tươi ngon từ vùng biển Phú Quốc, được sấy khô tự nhiên, giữ trọn vị ngọt và độ giòn. Sản phẩm giàu dinh dưỡng, không chất bảo quản, phù hợp làm nguyên liệu chế biến đa dạng món ăn như chiên, nướng, xào. Lựa chọn lý tưởng cho các nhà hàng, quán ăn và cơ sở kinh doanh thực phẩm."
        }
    ]
    const procedures = [
        {
            id: 1,
            title: "Thu gom nguyên liệu:",
            img: ImgProcedure,
            desc: "Cá cơm được đánh bắt từ biển Phú Quốc bằng tàu tư nhân của chúng tôi, đảm bảo cá luôn tươi sống khi vừa lên bờ. Với đội ngũ chuyên nghiệp và hệ thống bảo quản tiên tiến ngay trên tàu, cá cơm giữ được chất lượng tươi ngon, mang lại nguồn nguyên liệu tốt nhất cho sản phẩm."
        },
        {
            id: 2,
            title: "Xử lí thô",
            img: ImgProcedure,
            desc: "Sau khi đánh bắt, cá cơm sẽ được hấp chín trực tiếp ngay trên tàu. Phương pháp này giúp giữ lại hương vị tự nhiên và độ ngọt của cá mà không cần dùng chất bảo quản. Việc hấp chín còn đảm bảo vệ sinh và làm cho cá dễ tiêu hóa hơn, giữ nguyên giá trị dinh dưỡng và độ tươi mới của sản phẩm"
        },
        {
            id: 3,
            title: "Phơi nắng - Sấy khô - Đóng gói",
            img: ImgProcedure,
            desc: "Cá cơm sau khi hấp sẽ được phơi qua một nắng nhẹ để đạt độ săn chắc. Sau đó, cá được sấy khô bằng phương pháp thủ công, đảm bảo đạt độ giòn tự nhiên, không làm mất đi vị ngọt của cá. Cuối cùng, sản phẩm được đóng gói kỹ lưỡng trong bao bì sạch sẽ, an toàn, mang đến cho khách hàng món cá cơm sấy vừa thơm ngon, vừa giàu dinh dưỡng."
        },
    ]
    return (
        <div className="home">
            <Banner image={BannerImage} className={"banner"}>
                <div>
                    <h2>cá cơm sấy</h2>
                    <h3>món ngon của biển</h3>
                    <div className="line"></div>
                    <p>"Từ vùng biển trong lành của Phú Quốc, cá cơm tươi được tuyển chọn kỹ lưỡng và sấy khô theo phương pháp truyền thống, giữ trọn vẹn hương vị tự nhiên và giá trị dinh dưỡng. Mỗi miếng cá cơm sấy là sự hòa quyện giữa vị mặn mòi của biển cả và công phu chế biến, mang đến nguồn protein tinh khiết và Omega-3 dồi dào. Không chất bảo quản, không phẩm màu. Cá cơm sấy Phú Quốc là lựa chọn lý tưởng cho sức khỏe và trải nghiệm ẩm thực đầy tinh tế."</p>
                    <button>Liên Hệ Ngay</button>
                </div>
            </Banner>
            <div className="product mt-16 mb-16">
                <h2 className="text-center mb-6">Sản Phẩm</h2>
                <div className="container">
                    <div className="grid grid-cols-3 gap-5">
                        {products.map((p) => (<Product key={p.id} image={p.img} title={p.title} desc={p.desc} />))}

                    </div>
                </div>
            </div>
            <div className="procedure mb-16">
                <h2 className="text-center mb-6">Quy Trình</h2>
                <div className="container">
                    <div className="grid grid-cols-3 gap-5">
                        {procedures.map((p) => (<Procedure key={p.id} img={p.img} title={p.title} content={p.desc} />))}
                    </div>
                </div>
            </div>
            <div className="contact">
                <h2 className="text-center mb-6">Liên Hệ</h2>
                <Contact/>
            </div>
        </div>
    )
}