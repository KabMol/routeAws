import { useState, useEffect } from 'react'; // Import useState and useEffect
import { generateClient } from 'aws-amplify/api';
const client = generateClient();
import {listCourses} from '../graphql/queries'


export default function Home() {
  const [courses, setCourses] = useState([]); // Initialize courses state

  useEffect(() => {
   
    fetchCourses(); // Call fetchCourses on component mount
  }, []);
  const fetchCourses = async () => {
    try {
      const courseData = await client.graphql({ query: listCourses }); // Replace with your actual GraphQL query
      const courseList = courseData.data.listCourses.items; // Adjust based on your data structure
      setCourses(courseList);
      console.log('course data',courseData );
    } catch (error) {
      console.log("error on fetching course", error);
    }
  };


  // ... rest of your Home component's JSX

  return (
    <div>
      {/* Display fetched courses here */}
      {courses.length > 0 && (
        <ul>
          {courses.map((course) => (
            <li key={course.id}> {/* Replace 'id' with your unique course identifier */}
              {course.name} {/* Replace 'title' with your course title property */}
            </li>
          ))}
        </ul>
      )}
      <p id="zero-state">
        This is a demo for React Router change.123
        <br />
        Check out{" "}
        <a href="https://reactrouter.com">the docs at reactrouter.com</a>
        .
      </p>
    </div>
  );
}
// // {
// //   "id": "zexcvksdhc76r32e91",
// //   "name": "Software Engineering (I)",
// //   "description": "This module covers various perspectives of Software Engineering theory and practicese",
// //   "credits":15,
// //   "courseCode":"COS730",
// //   "createdAt": "2024-05-07T19:52:00.494Z",
// //   "updatedAt":"2024-05-07T19:52:00.494Z"
// // }
// import { useState, useEffect } from 'react'; // Import useState and useEffect
// import List from '@mui/material/List';
// import ListItem from '@mui/material/ListItem';
// import ListItemButton from '@mui/material/ListItemButton';
// import ListItemIcon from '@mui/material/ListItemIcon';
// import ListItemText from '@mui/material/ListItemText';
// import Checkbox from '@mui/material/Checkbox';
// import { generateClient } from 'aws-amplify/api'; // Import for AWS Amplify integration (if applicable)
// import { listCourses } from '../graphql/queries'; // Import GraphQL query (if applicable)

// const client = generateClient(); // Initialize AWS Amplify client (if applicable)

// export default function Home() {
//   const [courses, setCourses] = useState([]); // State for fetched courses
//   const [selectedCourses, setSelectedCourses] = useState([]); // State for selected courses

//   // Fetch courses on component mount (if using GraphQL)
//   useEffect(() => {
//     const fetchCourses = async () => {
//       try {
//         const courseData = await client.graphql({ query: listCourses });
//         const courseList = courseData.data.listCourses.items; // Adjust based on your data structure
//         setCourses(courseList);
//       } catch (error) {
//         console.error("Error fetching courses:", error);
//       }
//     };

//     fetchCourses();
//   }, []);

//   const handleCourseSelection = (courseId) => () => {
//     const newSelectedCourses = [...selectedCourses];
//     const existingIndex = newSelectedCourses.indexOf(courseId);

//     if (existingIndex === -1) {
//       newSelectedCourses.push(courseId); // Add to selected courses if not already selected
//     } else {
//       newSelectedCourses.splice(existingIndex, 1); // Remove from selected courses if already selected
//     }

//     setSelectedCourses(newSelectedCourses);
//   };

//   return (
//     <List sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}>
//       {courses.map((course) => (
//         <ListItem
//           key={course.id} // Use unique course identifier
//           secondaryAction={
//             <IconButton edge="end" aria-label="comments">
//               <CommentIcon />
//             </IconButton>
//           }
//           disablePadding
//         >
//           <ListItemButton
//             role={undefined}
//             onClick={handleCourseSelection(course.id)} // Pass course ID for selection
//             dense
//           >
//             <ListItemIcon>
//               <Checkbox
//                 edge="start"
//                 checked={selectedCourses.includes(course.id)} // Check if course is selected
//                 tabIndex={-1}
//                 disableRipple
//                 inputProps={{ 'aria-labelledby': `course-${course.id}-label` }}
//               />
//             </ListItemIcon>
//             <ListItemText id={`course-${course.id}-label`} primary={course.title} />
//           </ListItemButton>
//         </ListItem>
//       ))}
//     </List>
//   );
// }
