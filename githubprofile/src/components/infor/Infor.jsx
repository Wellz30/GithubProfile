import React from "react";
import "./Infor.css";

export const Infor = props =>{
    return (
        <div>
            {
                (props?.repos).map(repo => (
                    <div className="repos">
                        <div className="repos-div-link">
                            <h3>Name:</h3>
                            <a className="repos-link" href={repo?.html_url} target="_blank"><h2>{repo?.name}</h2></a>
                        </div>
                        <div className="repos-description">
                            <h3>Description:</h3>
                            <p>{repo?.description}</p>
                        </div>
                    </div>
                ))
            }
        </div>
    );
}