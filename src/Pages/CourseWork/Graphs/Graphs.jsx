import React from 'react';
import styled from 'styled-components';
import resume from '@/Pages/CourseWork/Graphs/JAngara.jpg';
import resumePDF from '@/Pages/CourseWork/Graphs/JustinAngaraResume.pdf';


const Graphs = () => {

    return (
        <GraphsStyled>
            <img src= {resume} onClick={()=> window.open(resumePDF, "_blank")} />
        </GraphsStyled>
    );
};

export default Graphs;

const GraphsStyled = styled.div`
    max-width: fit-content;
    margin-left: auto;
    margin-right: auto;

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
`;
