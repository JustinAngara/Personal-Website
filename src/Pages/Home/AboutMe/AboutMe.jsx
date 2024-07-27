import styled from 'styled-components';
import Inset from '../../../Common/PagesLayout/Inset';
import Section1 from './Section1';
const AboutMe = () => {
    return (
    <AboutMeStyled>
        <br/>
        <Inset>
            <div className="section1">
                <Section1 />
            </div>
        </Inset>
    </AboutMeStyled>);
}

export default AboutMe;


const AboutMeStyled = styled.div`
    // background-color: black;
    // color:black;
    .center{
        max-width: fit-content;
        margin-left: auto;
        margin-right: auto;
    }
    .question{
        padding-bottom:20px;
    }
    p{
        font-size:5vh;
        padding-left:15%;
        padding-right:15%;
    }

    font-size:8vh;

`;