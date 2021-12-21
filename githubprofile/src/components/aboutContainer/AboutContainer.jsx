import React from "react";
import "./AboutContainer.css";

export const AboutContainer = props =>{

    const amount = props.amount || "";
    const text = props.text || "";

    return(
        <div className="about-container">
            <div className="amount">
                {amount}
            </div>
            <div className="text">
                {text}
            </div>
        </div>
    );
}