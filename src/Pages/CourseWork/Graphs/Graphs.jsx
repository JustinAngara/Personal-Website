import React from 'react';
import styled from 'styled-components';
import resume from '@/Pages/CourseWork/Graphs/JAngara.jpg';
import resumePDF from '@/Pages/CourseWork/Graphs/JustinAngaraResume.pdf';
import Courses from './Courses.jsx'

const Graphs = () => {

    return (
        <GraphsStyled>
            <div className="resume">
                <img src= {resume} onClick={()=> window.open(resumePDF, "_blank")} />
            </div>

            <div>
                <h2>Classes Taken</h2>
                <Courses />
            </div>
        </GraphsStyled>
    );
};

export default Graphs;

const GraphsStyled = styled.div`

    .resume{
        display: block;
        margin: auto;
        max-width: fit-content;
        height: 100%;
        margin-left: auto;
        margin-right: auto;
    }

    h2{
        padding-top:65px;
    }
    img{
        border-radius: 10px;
        border: 2px solid #000000;
        box-shadow: 5px 5px 10px 1px #000000;
    }
    transform:scale(0.89);
    img:hover{
        transform: scale(1.1);
        transition-duration: .5s;
    }

    .course{
        padding-top:50px;

    }
`;
