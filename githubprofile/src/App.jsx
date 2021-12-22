import React, { useState } from "react";
import {Container} from "./components/container";
import {SearchContainer} from "./components/searchContainer"
import {ProfilePic} from "./components/profilePic"
import {ProfileAbout} from "./components/profileAbout/index"
import {AboutContainer} from "./components/aboutContainer/"
import {CloseRepos} from "./components/closeRepos/"
import {Repository} from "./components/repository"
import client from "./services/client"


export default function App() {

    const [showRepos, setShowRepos] = useState(false);

    const [repos, setRepos] = useState({});

    const [userData, setUserData] = useState({});

    const [searchedValue, setSearchedValue] = useState("");

    async function searchButton(){
        try{
            const response = await client.get(`/${searchedValue}`);
            const repos = await client.get(`/${searchedValue}/repos`);
            setUserData(response.data)
            setRepos(repos.data)
        } 
        catch (err){
            alert("Perfil não encontrado");
        }
    }

    return(
        <>
            <SearchContainer searchButton={searchButton} searchedValue={searchedValue} setSearchedValue={setSearchedValue}/>
            {showRepos ? 
                <Container>
                    <div>
                        <CloseRepos closeRepos={() => {setShowRepos(false)}}/>
                    </div>
                    <div>
                        <Repository repos={repos}/>
                    </div>
                </Container> 
            :
                <Container>
                    <ProfilePic profilePic={userData?.avatar_url} nickName={userData?.name}/>
                    <ProfileAbout bio={userData?.bio}>
                        <AboutContainer amount={userData?.public_repos} text="Repositorios" onClick={()=>{setShowRepos(true)}}/>
                        <AboutContainer amount={userData?.followers} text="Seguidores"/>
                        <AboutContainer amount={userData?.following} text="Seguindo"/>
                    </ProfileAbout>
                </Container>
            }
        </>
    );
}