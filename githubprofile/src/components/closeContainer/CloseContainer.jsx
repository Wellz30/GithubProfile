import React from "react";
import "./CloseContainer.css";

export const CloseContainer = props =>{
    
    return(
        <>
            <div className="button-close"><button className="button" onClick={props.closeContainer}>Close</button></div>
            <div className="title">
                {props.title}
            </div>
        </>
    );
}