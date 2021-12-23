import React from "react";
import "./SearchContainer.css";

export const SearchContainer = props =>{

    return(
        <div className="search-container">
            <div className="title"><strong>Github Profile Search</strong></div>
            <div className="search-input">
                <input className="input" placeholder="Nickname" value={props.searchedValue} onChange={e => props.setSearchedValue(e.target.value)}></input>
            </div>
            <div>
                <button className="button-search" onClick={props.searchButton}>Search</button>
            </div>
        </div>
    );
}