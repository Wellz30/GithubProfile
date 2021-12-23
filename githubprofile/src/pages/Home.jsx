import React, { useEffect, useState } from "react";
import {Container} from "../components/container";
import {SearchContainer} from "../components/searchContainer";
import {ProfilePic} from "../components/profilePic";
import {ProfileAbout} from "../components/profileAbout/index";
import {AboutContainer} from "../components/aboutContainer/";
import {CloseContainer} from "../components/closeContainer";
import {Infor} from "../components/infor";
import {Api} from "../services";


export const Home = _ => {

    const [showProfile, setShowProfile] = useState(false);

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
            const response = await Api.get(`/${searchedValue}`);
            const repos = await Api.get(`/${searchedValue}/repos`);
            const starred = await Api.get(`/${searchedValue}/starred`);
            const followers = await Api.get(`/${searchedValue}/followers`);
            setUserData(response.data);
            setRepos(repos.data);
            setStarred(starred.data);
            setFollowers(followers.data);
            setShowProfile(true);
        } 
        catch (err){
            alert("Perfil não encontrado");
        }
    }

    const fshowRepos = _ =>{
            setShowRepos(true);
            setShowFollowers(false);
            setShowStarred(false);
    }

    const fshowFollowers = _ =>{
            setShowFollowers(true);
            setShowRepos(false);
            setShowStarred(false);
    }

    const fshowStarred = _ =>{
            setShowStarred(true);
            setShowRepos(false);
            setShowFollowers(false);
    }

    return(
        <>
            <SearchContainer searchButton={searchButton} searchedValue={searchedValue} setSearchedValue={setSearchedValue}/>
            {showProfile ?
            <>
                <Container>
                <CloseContainer closeContainer={() => {setShowProfile(false)}}/>
                    <ProfilePic profilePic={userData?.avatar_url} nickName={userData?.name}/>
                    <ProfileAbout bio={userData?.bio}>
                        <AboutContainer amount={userData?.public_repos} text="Repositories" onClick={fshowRepos}/>
                        <AboutContainer amount={userData?.followers} text="Followers" onClick={fshowFollowers}/>
                        <AboutContainer amount={starred.length} text="Starred"  onClick={fshowStarred}/>
                    </ProfileAbout>
                </Container>
            </>
            :
            undefined
            }   
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