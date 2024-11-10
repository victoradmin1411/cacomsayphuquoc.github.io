import React from "react";
import "./index.scss";

export const Procedure = ({img, title, content}) => {
    return (
       <div className="item-procedure">
       <img src={img} alt="img"/>
        <div className="item-container">
            <p className="item-content-title text-center">{title}</p>
            <p className="item-content mt-4 text-center">{content}</p>
        </div>
       </div>
    )
}