import styled from "styled-components";
import PropTypes from "prop-types";

import { breakpoints } from "@/Common/useMediaQuery";

const TabContent = ({ curTab }) => {
    const { title, image, text } = curTab;
    return (
        <TabContentStyled>
            <div className="column1">
                <img src={image} />
            </div>
            <div className="column1">
                <h3>{title}</h3>
                <div dangerouslySetInnerHTML={{ __html: text }}></div>
            </div>
        </TabContentStyled>
    );
};

export default TabContent;

// prop-types
TabContent.propTypes = {
    curTab: PropTypes.object.isRequired,
};

const TabContentStyled = styled.div`
    padding: 20px;
    background: #414358;

    @media ${breakpoints.isMediumAndUp}{
        display: grid;
        grid-template-columns: 1fr 2fr;
        gap: 1rem;
    }
    img{
        height: 200px;
        width: 200px;
        display: block;
        margin: 0px auto 15px;
    }

    h3{
        font-size: 30px;
        color: white;

    }
    p{
        font-size: 18px;
        color: #ffffff;
        margin-bottom: 20px;
        line-height: 150%;
    }

`;
