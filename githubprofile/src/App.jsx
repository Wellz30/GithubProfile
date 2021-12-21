import React, { useState } from "react";
import {Container} from "./components/container";
import {SearchContainer} from "./components/searchContainer"
import {ProfilePic} from "./components/profilePic"
import {ProfileAbout} from "./components/profileAbout/index"
import client from "./services/client"


export default function App() {

    const [userData, setUserData] = useState({});

    const [searchedValue, setSearchedValue] = useState("");

    async function searchButton(){
        try{
            const response = await client.get(`/${searchedValue}`);
            console.log(response)
            setUserData(response.data)
        } 
        catch (err){
            alert("Perfil não encontrado");
        }
    }

    return(
        <>
            <SearchContainer searchButton={searchButton} searchedValue={searchedValue} setSearchedValue={setSearchedValue}/>
            <Container>
                <ProfilePic profilePic={userData?.avatar_url} nickName={userData?.name}/>
                <ProfileAbout bio={userData?.bio} amountRepos={"10"} amountFollowers={"10"} amountFollowing={"10"}/>
            </Container>
        </>
    );
}