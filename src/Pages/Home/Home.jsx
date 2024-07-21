import styled from "styled-components";
import Inset from "@/Common/PagesLayout/Inset.jsx";

import Slideshow from "./Slideshow/Slideshow";

import Tabbed from "./Tabbed/Tabbed";
import { React, useState } from "react";
import ReactPlayer from "react-player";

const Home = () => {

    return (
        <HomeStyled>
            <h1>Home</h1>

            <Slideshow />
            <Inset>
                <h1>
                    Welcome
                </h1>
                <Tabbed />
            </Inset>
        </HomeStyled>
    );
};

export default Home;

const HomeStyled = styled.div`
    h1 {
        display: none;
    }
    ReactPlayer {
        display: flex;
        justify-content: center;
        align-items: center;
    }



`;
