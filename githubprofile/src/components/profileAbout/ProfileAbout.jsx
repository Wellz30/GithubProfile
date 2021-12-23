import React from "react";
import "./ProfileAbout.css";

export const ProfileAbout = props =>{

    return(
        <div>
            <div className="bio-profile">
                {props.bio}
            </div>
            <div className="about-profile">
                {props.children}
            </div>
        </div>
    );
}