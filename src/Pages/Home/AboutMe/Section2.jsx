import styled from 'styled-components';
import PropTypes from "prop-types";




const Section2 = () => {
    return (
    <Section2Styled>

    </Section2Styled>);
}

export default Section2;



const Section2Styled = styled.div`
    // color:white;
    .blocked{
        font-size:1em;
        padding-top:15%;
    }
    // padding-top:50px;
    .fade-in {
        opacity: 0;
        transition: opacity 0.5s ease-in-out;
    }

    .fade-in.active {
        opacity: 1;
    }

`;