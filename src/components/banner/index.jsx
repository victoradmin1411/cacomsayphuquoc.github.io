import React from "react";
import './index.scss';

export const Banner = ({ className, image, children }) => {
    return (
        <div className={className} >
            <div className="container">
                <div className="grid grid-cols-2 gap-2">
                    <div className="image">
                        <img src={image} alt="banner" />
                    </div>
                    <div className="content font-bold">
                        {children}
                    </div>
                </div>
            </div>
        </div>
    )
}