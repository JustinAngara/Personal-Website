import styled from 'styled-components';
import PropTypes from "prop-types";


/**
    {
        course title // h1
        where it's taken from // h2
        img
        description
    }
 */
const CourseItem = ({courseTitle, from, img, desc}) => {
    console.log('inside course item');

    return (
    <CourseItemStyled>
        <div>
            <h1>{courseTitle}</h1>
            <h2>{from}</h2>

            <img height = '250px' width='250px' src= {img} />
            <br/>
            <h3 className='desc'>{desc}</h3>

        </div>
    </CourseItemStyled>);
}

export default CourseItem;

// prop-types
CourseItem.propTypes = {
    prop: PropTypes.object
};

const CourseItemStyled = styled.div`
    h1,h2,h3{
        color: black;
    }
    h1{
        background-color:#992049;
    }
    h2{
        max-width: fit-content;
        margin-inline: auto;
        font-size: 18px;

    }

    h3{

        padding-top:15px;
        font-size: 14px;

    }
    div{
        padding-bottom: 40px;
        max-width:90%;
        border: 3px solid #000000;
        border-radius: 8px;

        background: rgb(238,238,238);
        background: radial-gradient(circle, rgba(238,238,238,1) 0%, rgba(255,255,255,1) 100%);

    }

    img{
        all:initial;
        box-shadow: none;
        display: block;
        margin: auto;
        // padding-bottom:10px;
        border: 1px solid #000000;
    }
    img:hover{
        -webkit-transform: none;
        transform: none;

    }
    .desc{
        max-width: fit-content;
        margin-left: auto;
        margin-right: auto;
        border-top: 2px solid #000000;
    }

    //allows same size
    width: 80%;
    min-height: 300px;
    margin: 0 auto;
    display: -webkit-flex; /* Safari */
    display: flex; /* Standard syntax */

`;