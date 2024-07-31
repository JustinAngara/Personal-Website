import styled from 'styled-components';
import Inset from "@/Common/PagesLayout/Inset.jsx"
import StaffList from "./StaffList/StaffList.jsx"
import ReactPlayer from 'react-player';
const Staff = () => {
    return (
        <StaffStyled>
            <Inset>
                <h1>Projects</h1>
                <StaffList></StaffList>

                <div className="proj">
                    <h2>Chess MiniMax Algorithm <br/> (incorporated with real life moves and a table base)</h2>
                    <iframe width="75%" height="700" src="//jsfiddle.net/AngaraJustin/dxqk26nv/223/embedded/result/" allowfullscreen="allowfullscreen" allowpaymentrequest frameborder="0"></iframe>
                </div>
                <h1>My Videos</h1>
                <div className='videos'>


                    <br/><ReactPlayer       style={{width: "80%"}}url='https://www.youtube.com/watch?v=LSpHdY5iI60&feature=youtu.be' />
                </div>

            </Inset>
        </StaffStyled>
    );
}

export default Staff;

const StaffStyled = styled.div`
    a {
        color: #FFFFFF;
        text-decoration: none;
        font-size: 14px;
    }
    h1{
        padding-top:50px;
    }
    .videos{
        font-size:2em;
        width:70%;
        display: flex;
        justify-content: center;
        align-items: center;
    }


`;