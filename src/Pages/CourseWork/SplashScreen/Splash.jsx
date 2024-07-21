import styled from 'styled-components';
import Inset from "@/Common/PagesLayout/Inset.jsx"
import { TypeAnimation } from 'react-type-animation';

const Splash = () => {



    return (
    <SplashStyled>
        <div>
            <TypeAnimation
                sequence={[
                    // Same substring at the start will only be typed once, initially
                    'We produce food for Mice',
                    1000,
                    'We produce food for Hamsters',
                    1000,
                    'We produce food for Guinea Pigs',
                    1000,
                    () => {
                        navigate('/');
                        console.log('now ended');

                    },
                ]}
                speed={50}
                repeat={0}

            />
        </div>
    </SplashStyled>);
}

export default Splash;


const SplashStyled = styled.div`
    background-color:black;
    color: white;
    font-size: 40px;

    //centering a div
    div{
        display: flex;
        justify-content: center;
        align-items: center;
        padding-top:20%;
    }

    // required for overlay
    position:fixed;
    width:100%;
    height:100%;
    top:0px;
    left:0px;
    z-index:1000;
`;