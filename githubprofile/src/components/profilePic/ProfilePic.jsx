import React from "react";
import "./ProfilePic.css";

export const ProfilePic = props => {

    return(
        <>
            <div className="pic-container">
                <img className="pic" src={props.profilePic} alt=""/>
            </div>        
            <div className="nickName">{props.nickName}</div>
        </>
    );
}