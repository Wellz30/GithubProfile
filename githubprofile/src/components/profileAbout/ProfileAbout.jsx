import React from "react";
import {AboutContainer} from "../aboutContainer/"
import "./ProfileAbout.css"

export const ProfileAbout = props =>{

    const about = {
        bio: props.bio || "",
        amountRepos: props.amountRepos || "",
        amountFollowers: props.amountFollowers || "",
        amountFollowing: props.amountFollowing || "",
    }

    return(
        <div>
            <div className="bio-profile">
                {about.bio}
            </div>
            <div className="about-profile">
                <AboutContainer amount={about.amountRepos} text="Repositorios"/>
                <AboutContainer amount={about.amountFollowers} text="Seguidores"/>
                <AboutContainer amount={about.amountFollowing} text="Seguindo"/>
            </div>
        </div>
    );
}