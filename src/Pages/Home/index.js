import React from "react"
import styled from "styled-components"
import MenuSide from "../../Components/MenuSide"
import MainSide from "../../Components/MainSide"
import MusicPlayer from "../../Components/MusicPlayer"
import "./style.css"



const Home = () => {
    const userId = localStorage.getItem("userId");
    const ButtonDisplay = styled.div`   
        button{
            display:none;
        };
    `;
    return(
        <div className="home">
            <div className="menu_side">
                <MenuSide/>
            </div>
            <div className="main_side">
                {userId !== "" && userId != null ? <ButtonDisplay><MainSide/></ButtonDisplay> : <MainSide/>}
            </div>
            <MusicPlayer/>
        </div>
    )    
}
export default Home;