import styled from 'styled-components';
import { MenuMenu, MenuItem, Menu, Segment } from 'semantic-ui-react'
const Navbar = () => {
    return (<NavbarStyled>
        <div>
            <Menu pointing secondary>
                <MenuItem
                name='home'
                onClick={()=>{
                        
                }}
                />
            </Menu>

        </div>

    </NavbarStyled>);;
}

export default Navbar;


const NavbarStyled = styled.div`
    color:black;
`;