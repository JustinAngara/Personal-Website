import styled from 'styled-components';
import PropTypes from "prop-types";

const Section2 = () => {
    return (
    <Section2Styled>
        <div className='blocked question center'>
            Work Experience
        </div>

    </Section2Styled>);
}

export default Section2;



const Section2Styled = styled.div`
    .blocked{
        background-color:black;
        padding-bottom:40px;
        padding-top:20px;
    }
    // padding-top:50px;

`;