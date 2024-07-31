import styled from 'styled-components';
import data from './CourseData.js';
import CourseItem from './CourseItem.jsx';

const Courses = () => {
  return (
    <CoursesStyled>
      <div className="course-grid">
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
  display: flex;
  flex-wrap: wrap; /* Enable wrapping on smaller screens */
  justify-content: space-between; /* Distribute items evenly */
  padding-bottom: 40px;

  .course-grid {
    display: flex;
    flex-wrap: wrap; /* Ensure wrapping within the grid */
  }

  @media (max-width: 68px) {
    /* Adjust breakpoint as needed for your design */
    flex-direction: column; /* Stack items on smaller screens */
  }
`;
