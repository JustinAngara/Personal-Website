import styled from 'styled-components';
import timeData from './timeData.js'

import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
const Experiences = () => {
    //date, h3, h4, p

    return (
        <ExperiencesStyled>

            {

                timeData.map((e)=>{

                    return (
                        <VerticalTimelineElement
                            className="vertical-timeline-element--work"
                            contentStyle={{ background:"hsl(" + 360 * Math.random() + ',' +
                                (20 + 50 * Math.random()) + '%,' +
                                (55 + 10 * Math.random()) + '%)', color: '#0000000' }}
                            date={e.date}
                            iconStyle={{ background: 'rgb(33, 243, 139)', color: '#000000' }}>
   
                            <h3 className="vertical-timeline-element-title">{e.h}</h3>
                            <h4 className="vertical-timeline-element-subtitle">{e.c}</h4>
                            <p>{e.p}</p>
                        </VerticalTimelineElement>
                    )
                })
            }
        </ExperiencesStyled>
    );
}


export default Experiences;

const ExperiencesStyled = styled.div`

`;
// date, h3, h4, p
// sample
/*
    <VerticalTimelineElement
        className="vertical-timeline-element--work"
        contentStyle={{ background: 'rgb(30, 150, 243)', color: '#fff' }}
        date="2011 - present"
        iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}>

        <h3 className="vertical-timeline-element-title">Creative Director</h3>
        <h4 className="vertical-timeline-element-subtitle">Miami, FL</h4>
        <p>
        Creative Direction, User Experience, Visual Design, Project Management, Team Leading
        </p>
    </VerticalTimelineElement>
*/