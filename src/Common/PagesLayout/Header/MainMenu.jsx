import styled from "styled-components";
import { NavLink } from "react-router-dom";
import PropTypes from "prop-types";
import { ButtonContent, Button, Icon, Dropdown } from 'semantic-ui-react'
import { useNavigate } from 'react-router-dom';
import ReactPlayer from "react-player";
import NavBtn from "./ButtonToNav.jsx"
const MainMenu = ({ onClick }) => {

    return (

        <MainMenuStyled>
            <ul>
                <li> <NavBtn pathObj = {["/", "Home"]}/> </li>
                <li> <NavBtn pathObj = {["/course-work", "Resume"]}/> </li>
                <li> <NavBtn pathObj = {["/staff", "Projects"]}/> </li>
                <li> <NavBtn pathObj = {["/contact", "Contact"]}/> </li>
                <div className="socials">
                    <Button circular icon='linkedin' size='huge' onClick={()=>{
                        openInNewTab("https://www.linkedin.com/in/justinangara/");
                    }}/>
                    <Button circular icon='github'  size='huge' onClick={()=>{
                        openInNewTab("https://www.github.com/in/justinangara/");
                    }}/>
                    <Button circular icon='mail' size='huge' onClick={()=>{
                        window.open('mailto:justin.angara@gmail.com?subject=Subject&body= ');
                    }}/>
                </div>
            </ul>


        </MainMenuStyled>
    );
};

const openInNewTab = (url) => {
    const newWindow = window.open(url, '_blank', 'noopener,noreferrer')
    if (newWindow) newWindow.opener = null
}


export default MainMenu;

// prop-types
MainMenu.propTypes = {
    onClick: PropTypes.func,
};

const MainMenuStyled = styled.nav`

    display: grid;
    grid-template-columns: 0fr 0fr 0fr 0fr;
    .socials{


    }

    ul{
        display: inline-block;
        list-style-type: none;
    }
    li{
        padding-bottom:10%;
    }
    // center div
    max-width: fit-content;
    margin-left: auto;
    margin-right: auto;

    background-color:rgb(0,0,0,.35);
    float: right;

    border-radius:10px;
    box-shadow: 6px 4px 18px 0px #000000;

`;
