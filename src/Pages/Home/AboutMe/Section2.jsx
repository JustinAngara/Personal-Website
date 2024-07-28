import styled from 'styled-components';
import PropTypes from "prop-types";

import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';

import Experiences from './Experience/Experiences.jsx';

const Section2 = () => {
    return (
    <Section2Styled>
        <div className='blocked center'>
            {`<Experience />`}<br /><br /><br />
        </div>



        <VerticalTimeline>
            <Experiences />
            

            {/* BREAK/END of Timeline  */}
            <VerticalTimelineElement iconStyle={{ background: 'rgb(240, 90, 70)', color: '#fff' }}/>
        </VerticalTimeline>

    </Section2Styled>);
}

export default Section2;



const Section2Styled = styled.div`
    // color:white;
    .blocked{
        font-size:1em;
        padding-top:15%;
    }
    // padding-top:50px;
    .fade-in {
        opacity: 0;
        transition: opacity 0.5s ease-in-out;
    }

    .fade-in.active {
        opacity: 1;
    }

`;