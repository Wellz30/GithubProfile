import React from "react";
import "./Container.css";
import img from "../../image/pg.png"

export const Container = (props) => {

    return(
        <>
            <div className="container">
                <div className="pic-container">
                    <img className="pic" src={img} alt="" />
                </div>
                <div className="name"><strong>Wellington Bezerra</strong></div>
            </div>
            <div className="footer"></div>
        </>
    );
}