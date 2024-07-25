import styled from 'styled-components';
import data from './CourseData.js';
import CourseItem from './CourseItem.jsx';
const Courses = () => {

    return (
    <CoursesStyled>
        <div className="gridLayout">
            {
                data.map((e)=>{
                    // courseTitle, from, img, desc
                    return <CourseItem courseTitle = {e.courseTitle} from = {e.from} img = {e.img} desc = {e.desc}/>
                })
            }

        </div>

    </CoursesStyled>);
}

export default Courses;


const CoursesStyled = styled.div`

    div{
        width:700px;

        padding-bottom: 40px;

    }



    coursetem{
        display: flex;
        flex-wrap: wrap;
    }
    .gridLayout{
        display: grid;
        grid-template-columns: 1fr 1fr;
        grid-gap: 0px;
    }

    // max-width: fit-content;
    // margin-left: auto;
    // margin-right: auto;
     width: 100%;

    transform:scale(.95);
    // background-color:white;
    justify-content:start;
`;