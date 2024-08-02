import styled from 'styled-components';
import data from './CourseData.js';
import CourseItem from './CourseItem.jsx';

const Courses = () => {
  return (
    <CoursesStyled>
      <div className="course-grid center">
        {data.map((course) => (
          <CourseItem
            courseTitle={course.courseTitle}
            from={course.from}
            img={course.img}
            desc={course.desc}
          />
        ))}
      </div>
    </CoursesStyled>
  );
};

export default Courses;

const CoursesStyled = styled.div`

  flex-wrap: wrap;
  justify-content: space-between;
  padding-bottom: 40px;

  .course-grid {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(49%, 1fr));
    gap: 1rem;

  }

    .center{
        max-width: fit-content;
        margin-left: auto;
        margin-right: auto;
    }

`;
