import React from "react";
import "./Infor.css";

import {ProfilePic} from "../profilePic"

export const Infor = props =>{
    return (
        <div>
            {props.type ==="followers" ?
                (props?.objects).map(object => (
                    <div className="follow">
                        <a className="follow-link" href={object?.html_url} target="_blank"><ProfilePic nickName={object?.login} profilePic={object?.avatar_url}/></a>
                    </div>
                ))
            :
                (props?.objects).map(object => (
                    <div className="repos">
                        <div className="repos-div-link">
                            <h3>Name:</h3>
                            <a className="repos-link" href={object?.html_url} target="_blank"><h2>{object?.name}</h2></a>
                        </div>
                        <div className="repos-description">
                            <h3>Description:</h3>
                            <p>{object?.description}</p>
                        </div>
                    </div>
                ))
            }
        </div>
    );
}