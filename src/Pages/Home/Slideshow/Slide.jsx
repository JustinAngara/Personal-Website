import styled from "styled-components";
import PropTypes from "prop-types";

const Slide = ({ slide }) => {
    const { title, image } = slide;

    return (
        <SlideStyled className=".image-container">
            <img src={image} alt={title} />
            <p className="legend">{title}</p>

        </SlideStyled>
    );
};

export default Slide;

// prop-types
Slide.propTypes = {
    slide: PropTypes.object.isRequired,
};

const SlideStyled = styled.div`
    border-radius: 16px;
    border: 2px solid #000000;
    background-color:black;
    img{
        margin: 0;

    }

`;
