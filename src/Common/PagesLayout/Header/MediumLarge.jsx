import styled from "styled-components";

/* Components ---------------------------*/
import Inset from "../Inset.jsx";
import SiteLogo from "../SiteLogo/SiteLogo.jsx";
import MainMenu from "./MainMenu.jsx";
import Navbar from "./Navbar.jsx";
const MediumLarge = () => {
    return (
        <MediumLargeStyled className="MediumLarge">
            <Inset>
                <div className="inset">
                    <div className="menus">
                        {/* <Navbar /> */}
                        <MainMenu></MainMenu>
                    </div>
                    <div className="logo">
                        <SiteLogo />
                    </div>

                </div>
            </Inset>
        </MediumLargeStyled>
    );
};

export default MediumLarge;

const MediumLargeStyled = styled.div`
    color: white;

    .logo {
        .SiteLogo {
            width: 25%;
            margin: auto;
            padding: 20px 0px;
            padding-bottom: 300px;

        }
    }
    .menus{
        justify-content:end;
        float: right;
        padding-top:10%;

        width: 25%;

    }

    nav {
        text-align: center;
        a {
            width: 80px;
            display: inline-block;

            line-height: 30px;
            margin: 0px 0px 20px 5px;


            text-align: center;
            font-size: 14px;
            opacity: 1;
            color: #00246B;
            font-weight: bold;
            text-decoration: none;
            text-transform: uppercase;

            &:hover,
            &:active,
            &:focus {
                opacity: 1;
            }

            &.active {
                color: #00246B;

            }
        }
    }
`;
