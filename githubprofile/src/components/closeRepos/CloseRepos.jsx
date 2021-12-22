import React from "react";
import "./CloseRepos.css";

export const CloseRepos = props =>{
    return(
        <>
            <div className="button-close"><button className="button" onClick={props.closeRepos}>Close</button></div>
            <div className="title">
                Repositorios
            </div>
        </>
    );
}