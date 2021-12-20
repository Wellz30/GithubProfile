import React from "react";
import "./SearchContainer.css"
import img from "../../image/pesquisa.png"

export const SearchContainer = () =>{
    return(
        <div className="search-container">
            <div className="title"><strong>Github Profile Search</strong></div>
            <div className="search-input">
                <input className="input" value="" placeholder="Nickname"></input>
            </div>
        </div>
    );
}