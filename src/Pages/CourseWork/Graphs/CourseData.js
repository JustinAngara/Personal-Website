import img1 from './images/wisc.png';
import img2 from './images/pt.png';
import img3 from './images/berk.png'
import img4 from './images/la.png'
let CourseData = [

    {
        id: 1,
        courseTitle:'Front-End Software Development Bootcamp',
        from:'Promineo Tech, Elgin Community College',
        img:img2,
        desc:'Explored framework integration to speed up development and build responsive grid layouts that meet today\'s requirements for mobiles,tablets, and desktops through a variety of different technologies. Created dynamic web applications using HTML, CSS, JavaScript, React, and other technologies. Learned the foundational skills to design and develop user-friendly interfaces. Gained hands-on experience with HTML, CSS, JavaScript, React, and other cutting-edge technologies used by top companies in the industry.',
    },
    {
        id: 2,
        courseTitle:'Computer Science: 300',
        from:'University of Wisconsin-Madison',
        img:img1,
        desc:'Introduction to Object-Oriented Programming using classes and objects to solve more complex problems. Introduces array-based and linked data structures: including lists, stacks, and queues. Programming assignments require writing and developing multi-class (file) programs using interfaces, generics, and exception handling to solve challenging real world problems. Topics reviewed include reading/writing data and objects from/to files and exception handling, and command line arguments. Topics introduced: object-oriented design; class vs. object; create and define interfaces and iterators; searching and sorting; abstract data types; generic interfaces (parametric polymorphism); how to design and write test methods and classes; array based vs. linked node implementations; introduction to complexity analysis; recursion.'
    },
    {
        id: 3,
        courseTitle:'Introduction to Databases x409.1',
        from:'University of California, Berkeley',
        img:img3,
        desc:' Learned the principles of effective database design and gain a general overview of database management systems (DBMS). The emphasis is on relational and NoSQL database management systems which have a variety of applications in modern website development, software development, and data science. Students learn dimensional, object-oriented, and object-relational architectures, along with best practices for managing data integrity and security.'
    },
    {
        id: 4,
        courseTitle:'Web Design I: HTML, CSS and JavaScript DESMAX 481.24B',
        from:'University of California, Los Angeles',
        img:img4,
        desc:' Learned the world of modern web design that displays the industry standards and best practices for using HTML, CSS and JavaScript, the essential tools of a front-end web developer.'
    }
];

export default CourseData