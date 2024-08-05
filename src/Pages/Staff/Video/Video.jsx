import styled from 'styled-components';
import PropTypes from "prop-types";
import ReactPlayer from 'react-player';
const Video = ({ link }) => {
    return (
    <VideoStyled>
        <br/><ReactPlayer style={{width: "90%"}}url={link} />
        {/* will add description soon */}

    </VideoStyled>);
}

export default Video;

// prop-types
Video.propTypes = {
    link: PropTypes.string
};

const VideoStyled = styled.div`
    // background-color:black;
`;