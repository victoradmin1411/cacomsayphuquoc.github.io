import React from "react";
import "./index.scss";

export const Product = ({ image, title , desc}) => {
    return (
        <div className="item-product">
            <img src={image} alt="img-product" />
            <div className="item-content">
                <p className="title text-center font-bold">{title}</p>
                <p className="info mt-4">{desc}</p>
                <div className="btn mt-4 mb-4">
                    <button> Xem thêm</button>
                </div>
            </div>
        </div>

    )
}