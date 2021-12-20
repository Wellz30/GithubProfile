import React from "react";
import {Container} from "./components/container/index";
import {SearchContainer} from "./components/searchContainer/index"

export default function App() {
    return(
        <>
            <div>
                <SearchContainer/>
            </div>
            <div>
                <Container/>
            </div>
        </>
    );
}