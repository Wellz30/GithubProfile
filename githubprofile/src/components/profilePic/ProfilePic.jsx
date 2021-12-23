import React from "react";
import img from "../../_assets/image/pg.png";
import "./ProfilePic.css";

export const ProfilePic = props => {

    const profilePic = props.profilePic || img;

    const nickName = props.nickName || "NickName";

    return(
        <>
            <div className="pic-container">
                <img className="pic" src={profilePic} alt=""/>
            </div>        
            <div className="nickName">{nickName}</div>
        </>
    );
}