import styled from 'styled-components';
import Inset from '../../../Common/PagesLayout/Inset';

const AboutMe = () => {
    return (
    <AboutMeStyled>
        <br/>
        <Inset>
            Woah what is this
        </Inset>
    </AboutMeStyled>);
}

export default AboutMe;


const AboutMeStyled = styled.div`
    // background-color:white;
    // color:black;
    .question{

    }

    font-size:30px;
    max-width: fit-content;
    margin-left: auto;
    margin-right: auto;

`;