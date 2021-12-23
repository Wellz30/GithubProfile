import React, { useState } from "react";
import {Container} from "./components/container";
import {SearchContainer} from "./components/searchContainer"
import {ProfilePic} from "./components/profilePic"
import {ProfileAbout} from "./components/profileAbout/index"
import {AboutContainer} from "./components/aboutContainer/"
import {CloseContainer} from "./components/closeContainer"
import {Infor} from "./components/infor"
import client from "./services/client"


export default function App() {

    const [showRepos, setShowRepos] = useState(false);

    const [showStarred, setShowStarred] = useState(false);

    const [showFollowers, setShowFollowers] = useState(false);

    const [repos, setRepos] = useState({});

    const [starred, setStarred] = useState({});

    const [followers, setFollowers] = useState({});

    const [userData, setUserData] = useState({});

    const [searchedValue, setSearchedValue] = useState("");

    async function searchButton(){
        try{
            const response = await client.get(`/${searchedValue}`);
            const repos = await client.get(`/${searchedValue}/repos`);
            const starred = await client.get(`/${searchedValue}/starred`);
            const followers = await client.get(`/${searchedValue}/followers`);
            setUserData(response.data);
            setRepos(repos.data);
            setStarred(starred.data);
            setFollowers(followers.data);
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
                <ProfileAbout bio={userData?.bio}>
                    <AboutContainer amount={userData?.public_repos} text="Repositories" onClick={_ => {setShowRepos(true)}}/>
                    <AboutContainer amount={userData?.followers} text="Followers" onClick={_ => {setShowFollowers(true)}}/>
                    <AboutContainer amount={starred.length} text="Starred"  onClick={_ => {setShowStarred(true)}}/>
                </ProfileAbout>
            </Container>
            {showRepos ? 
                <Container>
                    <div>
                        <CloseContainer title="Repositories" closeContainer={() => {setShowRepos(false)}}/>
                    </div>
                    <div>
                        <Infor objects={repos}/>
                    </div>
                </Container> 
            :
                undefined
            }
            {showStarred ? 
                <Container>
                    <div>
                        <CloseContainer title="Starred" closeContainer={() => {setShowStarred(false)}}/>
                    </div>
                    <div>
                        <Infor objects={starred}/>
                    </div>
                </Container> 
            :
                undefined
            }
            {showFollowers ? 
                <Container>
                    <div>
                        <CloseContainer title="Followers" closeContainer={() => {setShowFollowers(false)}}/>
                    </div>
                    <div>
                        <Infor type="followers" objects={followers}/>
                    </div>
                </Container> 
            :
                undefined
            }
            
        </>
    );
}