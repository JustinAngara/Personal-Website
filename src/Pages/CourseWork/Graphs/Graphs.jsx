import React from 'react';
import styled from 'styled-components';
import resume from '@/Pages/CourseWork/Graphs/JAngara.jpg';
import resumePDF from '@/Pages/CourseWork/Graphs/JustinAngaraResume.pdf';
import Courses from './Courses.jsx'

const Graphs = () => {

    return (
        <GraphsStyled>
            <div className="resume">
                <img className='imgResume' src= {resume} onClick={()=> window.open(resumePDF, "_blank")} />
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
    .imgResume{
        border-radius: 10px;
        border: 2px solid #000000;

    }
    transform:scale(0.89);
    .imgResume:hover{
        transform: scale(1.1);
        transition-duration: .5s;
    }

    .course{
        padding-top:50px;

    }
`;
