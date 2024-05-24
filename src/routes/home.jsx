// // import { useState, useEffect } from 'react'; // Import useState and useEffect
// // import { generateClient } from 'aws-amplify/api';

// // import * as React from 'react';
// // import {listCourses} from '../graphql/queries'

// // import {listEnrollments} from '../graphql/queries'

// // import List from '@mui/material/List';
// // import ListItem from '@mui/material/ListItem';
// // import ListItemButton from '@mui/material/ListItemButton';
// // import ListItemIcon from '@mui/material/ListItemIcon';
// // import ListItemText from '@mui/material/ListItemText';
// // import Checkbox from '@mui/material/Checkbox';
// // import IconButton from '@mui/material/IconButton';
// // import CommentIcon from '@mui/icons-material/Comment';
// // import Button from '@mui/material/Button';

// // import { getCurrentUser } from 'aws-amplify/auth';
// // import { createEnrollment } from '../graphql/mutations';


// // const client = generateClient();

// // export const fetchEnrollmentsForCurrentUser = async () => {
// //   try {
// //     // Get the current user's ID (assuming you have the logic to get it)
// //     // const currentUserID = getCurrentUserID(); // Implement this function
// //     const user = await getCurrentUser();
// //     // Execute the listEnrollments query with the userID as a variable
// //     const enrollmentData = await client.graphql({
// //       query: listEnrollments,
// //       variables: {
// //         filter: {
// //           userID: { eq: user.userId }
// //       }
// //         // userID: userID,
// //         // limit: 10 // Optional: You can specify a limit if needed
// //       }
// //     });

// //     // Extract the list of enrollments from the response
// //     const enrolledCourses = enrollmentData.data.listEnrollments.items;
// //     // Update the state with the fetched enrollments
// //     return(enrolledCourses);
// //     console.log("Enrolled Course",enrolledCourses)
// //   } catch (error) {
// //     console.error("Error fetching enrollments:", error);
// //   }
// // };




// // export default function Home() {
// //   const [courses, setCourses] = useState([]); // Initialize courses state
// //   const [checked, setChecked] = React.useState([]);
  
// //   const [selectedCourse, setSelectedCourse] = useState(null);
// //   const [enrolledCourses, setEnrolledCourses ] = useState([]);


// //   const [currentUser, setCurrentUser] = useState(null);

// //   const handleToggle = (value) => () => {
// //     const currentIndex = checked.indexOf(value);
// //     const newChecked = [...checked];

// //     if (currentIndex === -1) {
// //       newChecked.push(value);
// //     } else {
// //       newChecked.splice(currentIndex, 1);
// //     }
// //     setChecked(newChecked);
// //   };

// //   useEffect(() => {
// //     fetchCurrentUser();
// //     fetchCourses(); // Call fetchCourses on component mount
// //     fetchEnrollments();
// //   }, []);

// //   const fetchCourses = async () => {
// //     try {
// //       const courseData = await client.graphql({ query: listCourses }); // Replace with your actual GraphQL query
// //       const courseList = courseData.data.listCourses.items; // Adjust based on your data structure
// //       setCourses(courseList);
// //       console.log('course data',courseData );
// //     } catch (error) {
// //       console.log("error on fetching course", error);
// //     }
// //   };


// //   const fetchCurrentUser = async () => {
// //     try {
// //       const user = await getCurrentUser();
// //       // Get current user
// //       const userID = user.userId;
// //       console.log(user.userId)
     
// //       setCurrentUser(user);
      
     
// //     } catch (error) {
// //       console.error("Error fetching current user:", error);
// //     }
// //   };
// //   const fetchEnrollments = async ()=>{
// //     try {
// //       const enrolledCourses=await fetchEnrollmentsForCurrentUser();
// //       setEnrolledCourses(enrolledCourses);
// //       console.log("Enrolled Course",enrolledCourses)
// //     } catch (error) {
// //       console.error("Error with fetching enrollments",error)
// //     }
   
// //   }



// //   const handleEnroll = async () => {
// //     // if (checked === null) {
// //     //   console.error("Error: 'checked' is null.");
// //     //   return; // Exit the function if 'checked' is null
// //     // }
// //     if (!checked.length) {
// //       console.error("Error: No courses selected for enrollment.");
// //       return;
// //     }

// //     const notEnrolled = checked.filter(
// //       (course) => !enrolledCourses.some((enrollment) => enrollment.courseID === course.id && enrollment.userID === currentUser.userId)
// //     );

// //     if (!notEnrolled.length) {
// //       console.log("All selected courses are already enrolled.");
// //       return;
// //     }
// //     try {
// //       await changeEnrollment(checked);
  
// //       // Fetch enrolled courses after updating enrollment
// //       await fetchEnrollments();  
// //     } catch (error) {
// //       console.error("Error during enrollment process:", error);
// //     }
// //     // changeEnrollment(checked);
// //     // Fetch enrolled courses after updating enrollment
// //     // fetchEnrolledCourses();  
// //   };

// //   const changeEnrollment = async (selectedCourses) => {
// //     try {
// //       for (const course of selectedCourses) {
// //         // For each selected course, create an enrollment
// //         await client.graphql({
// //           query: createEnrollment,
// //           variables: {
// //             input: {
// //               userID: currentUser.userId,
// //               courseID: course.id
// //             }
// //           }
// //         });
// //       }
// //       console.log("Enrollment updated successfully");
// //     } catch (error) {
// //       console.error("Error updating enrollment:", error);
// //     }
// //   };

  
// //   const handleCourseDescription = (course) => {
// //     if (selectedCourse === course) {
// //       // If the same course is clicked again, close the description
// //       setSelectedCourse(null);
// //     } else {
// //       setSelectedCourse(course);
// //       console.log("Hello descript");
// //       console.log(course.description);
// //     }
// //   };

// //   // const fetchEnrolledCourses = async () => {
// //   //   try {
// //   //     const enrollmentData = await client.graphql({
// //   //       query: getMyCourses,
// //   //       variables: {
// //   //         userID: currentUser.userID,
// //   //         sortDirection: "DESC" // Optional: Specify sorting direction
// //   //       }
// //   //     });
// //   //     const enrolledCourseItems = enrollmentData.data.getMyCourses.items;
// //   //     setEnrolledCourses(enrolledCourseItems);
// //   //     console.log(enrollmentData)
// //   //     console.log("We are checking courses")
// //   //   } catch (error) {
// //   //     console.error("Error fetching enrolled courses:", error);
// //   //   }
// //   // };
  
  
  

// //   // ... rest of your Home component's JSX

// //   return (
// //     <div>
  

// //       <p id="zero-state">
// //         This is a demo for React Router change.123
// //         <br />
// //         Check out{" "}
// //         <a href="https://reactrouter.com">the docs at reactrouter.com</a>.
// //       </p>
// //       <List sx={{ width: '100%', maxWidth: 500, bgcolor: 'background.paper' }}>
// //       {courses.map((course) => {
// //         const labelId = `checkbox-list-label-${course.id}`;

// //         return (
// //           <ListItem
// //             key={course.id}
// //             secondaryAction={
// //               <IconButton edsge="end" aria-label="comments" onClick={() => handleCourseDescription(course)}>
// //                 <CommentIcon/>
// //               </IconButton>
              
// //             }
// //             disablePadding
// //           >
// //             <ListItemButton role={undefined} onClick={handleToggle(course)} >
// //               <ListItemIcon>
// //                 <Checkbox
// //                   edge="start"
// //                   checked={checked.indexOf(course) !== -1}
// //                   tabIndex={-1}
// //                   disableRipple
// //                   inputProps={{ 'aria-labelledby': labelId }}
// //                 />
// //               </ListItemIcon>
// //               <ListItemText id={labelId} primary={course.name} />
// //             </ListItemButton>
// //           </ListItem>
// //         );
// //       })}
// //     </List>

// //     <Button variant="contained" onClick={handleEnroll}>Enroll</Button> 
// //     </div>
    
// //   );
// // }



// // // // {
// // // //   "id": "zexcvksdhc76r32e91",
// // // //   "name": "Software Engineering (I)",
// // // //   "description": "This module covers various perspectives of Software Engineering theory and practicese",
// // // //   "credits":15,
// // // //   "courseCode":"COS730",
// // // //   "createdAt": "2024-05-07T19:52:00.494Z",
// // // //   "updatedAt":"2024-05-07T19:52:00.494Z"
// // // // }
// // // import { useState, useEffect } from 'react'; // Import useState and useEffect
// // // import List from '@mui/material/List';
// // // import ListItem from '@mui/material/ListItem';
// // // import ListItemButton from '@mui/material/ListItemButton';
// // // import ListItemIcon from '@mui/material/ListItemIcon';
// // // import ListItemText from '@mui/material/ListItemText';
// // // import Checkbox from '@mui/material/Checkbox';
// // // import { generateClient } from 'aws-amplify/api'; // Import for AWS Amplify integration (if applicable)
// // // import { listCourses } from '../graphql/queries'; // Import GraphQL query (if applicable)

// // // const client = generateClient(); // Initialize AWS Amplify client (if applicable)

// // // export default function Home() {
// // //   const [courses, setCourses] = useState([]); // State for fetched courses
// // //   const [selectedCourses, setSelectedCourses] = useState([]); // State for selected courses

// // //   // Fetch courses on component mount (if using GraphQL)
// // //   useEffect(() => {
// // //     const fetchCourses = async () => {
// // //       try {
// // //         const courseData = await client.graphql({ query: listCourses });
// // //         const courseList = courseData.data.listCourses.items; // Adjust based on your data structure
// // //         setCourses(courseList);
// // //       } catch (error) {
// // //         console.error("Error fetching courses:", error);
// // //       }
// // //     };

// // //     fetchCourses();
// // //   }, []);

// // //   const handleCourseSelection = (courseId) => () => {
// // //     const newSelectedCourses = [...selectedCourses];
// // //     const existingIndex = newSelectedCourses.indexOf(courseId);

// // //     if (existingIndex === -1) {
// // //       newSelectedCourses.push(courseId); // Add to selected courses if not already selected
// // //     } else {
// // //       newSelectedCourses.splice(existingIndex, 1); // Remove from selected courses if already selected
// // //     }

// // //     setSelectedCourses(newSelectedCourses);
// // //   };

// // //   return (
// // //     <List sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}>
// // //       {courses.map((course) => (
// // //         <ListItem
// // //           key={course.id} // Use unique course identifier
// // //           secondaryAction={
// // //             <IconButton edge="end" aria-label="comments">
// // //               <CommentIcon />
// // //             </IconButton>
// // //           }
// // //           disablePadding
// // //         >
// // //           <ListItemButton
// // //             role={undefined}
// // //             onClick={handleCourseSelection(course.id)} // Pass course ID for selection
// // //             dense
// // //           >
// // //             <ListItemIcon>
// // //               <Checkbox
// // //                 edge="start"
// // //                 checked={selectedCourses.includes(course.id)} // Check if course is selected
// // //                 tabIndex={-1}
// // //                 disableRipple
// // //                 inputProps={{ 'aria-labelledby': `course-${course.id}-label` }}
// // //               />
// // //             </ListItemIcon>
// // //             <ListItemText id={`course-${course.id}-label`} primary={course.title} />
// // //           </ListItemButton>
// // //         </ListItem>
// // //       ))}
// // //     </List>
// // //   );
// // // }


// // // ----------------------
// // //     {/* Display fetched courses here */}

// // //     {courses.length > 0 && (
// // //       <ul>
// // //         {courses.map((course) => (
// // //           <li key={course.id}> {/* Replace 'id' with your unique course identifier */}
// // //             {course.name} {/* Replace 'title' with your course title property */}
// // //           </li>
// // //         ))}
// // //       </ul>
// // //     )}
// // //     -------------------

// import { useState, useEffect } from 'react';
// import * as React from 'react';
// import { generateClient } from 'aws-amplify/api';
// import { listCourses, listEnrollments } from '../graphql/queries';
// import List from '@mui/material/List';
// import ListItem from '@mui/material/ListItem';

// import ListItemButton from '@mui/material/ListItemButton';

// import ListItemIcon from '@mui/material/ListItemIcon';
// import ListItemText from '@mui/material/ListItemText';
// import Checkbox from '@mui/material/Checkbox';
// import IconButton from '@mui/material/IconButton';
// import CommentIcon from '@mui/icons-material/Comment';
// import Button from '@mui/material/Button';
// import { getCurrentUser } from 'aws-amplify/auth';
// import { createEnrollment } from '../graphql/mutations';

// const client = generateClient();

// export const fetchEnrollmentsForCurrentUser = async (userId) => {
//   try {
//     const enrollmentData = await client.graphql({
//       query: listEnrollments,
//       variables: {
//         filter: {
//           userID: { eq: userId },
//         },
//       },
//     });

//     return enrollmentData.data.listEnrollments.items;

//   } catch (error) {
//     console.error("Error fetching enrollments:", error);
//   }
// };

// export default function Home() {
//   const [courses, setCourses] = useState([]);
//   const [checked, setChecked] = useState([]);
//   const [selectedCourse, setSelectedCourse] = useState(null);
//   const [enrolledCourses, setEnrolledCourses] = useState([]);
//   const [currentUser, setCurrentUser] = useState(null);

//   useEffect(() => {
//     fetchCurrentUser();
//   }, []);

//   useEffect(() => {
//     if (currentUser) {
//       fetchCourses();
//       fetchEnrollments();
//     }
//   }, [currentUser]);

//   const fetchCourses = async () => {
//     try {
//       const courseData = await client.graphql({ query: listCourses });
//       const courseList = courseData.data.listCourses.items;
//       setCourses(courseList);
//     } catch (error) {
//       console.log("Error fetching courses:", error);
//     }
//   };

//   const fetchCurrentUser = async () => {
//     try {
//       const user = await getCurrentUser();
//       setCurrentUser(user);
//     } catch (error) {
//       console.error("Error fetching current user:", error);
//     }
//   };

//   const fetchEnrollments = async () => {
//     try {
//       const enrolledCourses = await fetchEnrollmentsForCurrentUser(currentUser.userId);
//       setEnrolledCourses(enrolledCourses);
//     } catch (error) {
//       console.error("Error fetching enrollments:", error);
//     }
//   };

//   const handleToggle = (course) => () => {
//     const currentIndex = checked.indexOf(course);
//     const newChecked = [...checked];

//     if (currentIndex === -1) {
//       newChecked.push(course);
//     } else {
//       newChecked.splice(currentIndex, 1);
//     }

//     setChecked(newChecked);
//   };

//   const handleEnroll = async () => {
//     if (!checked.length) {
//       console.error("Error: No courses selected for enrollment.");
//       return;
//     }

//     const notEnrolled = checked.filter(
//       (course) => !enrolledCourses.some((enrollment) => enrollment.courseID === course.id && enrollment.userID === currentUser.userId)
//     );
    
//     if (!notEnrolled.length) {
//       console.log("All selected courses are already enrolled.");
//       return;
//     }

//     try {
//       await changeEnrollment(notEnrolled);
//       await fetchEnrollments(); // Refresh enrollments after enrolling
//       await fetchEnrollmentsForCurrentUser(currentUser.id);
//     } catch (error) {
//       console.error("Error during enrollment process:", error);
//     }
//   };

//   const changeEnrollment = async (selectedCourses) => {
//     try {
//       for (const course of selectedCourses) {
//         await client.graphql({
//           query: createEnrollment,
//           variables: {
//             input: {
//               userID: currentUser.userId,
//               courseID: course.id,
//             },
//           },
//         });
//       }
//       console.log("Enrollment updated successfully");
//     } catch (error) {
//       console.error("Error updating enrollment:", error);
//     }
//   };

//   const handleCourseDescription = (course) => {
//     // if (selectedCourse === course) {
//     //   setSelectedCourse(null);
//     // } else {
//     //   setSelectedCourse(course);
//     // }
//     console.log(course.description)
//   };

//   return (
//     <div>
//       <p id="zero-state">
//         This is a demo for React Router.
//         <br />
//         Check out <a href="https://reactrouter.com">the docs at reactrouter.com</a>.
//       </p>
//       <List sx={{ width: '100%', maxWidth: 500, bgcolor: 'background.paper' }}>
//         {courses.map((course) => {
//           const labelId = `checkbox-list-label-${course.id}`;

//           return (
            
//             <ListItem 
//             key={course.id} 
//             secondaryAction={
//               <IconButton edge="end" aria-label="comments" onClick={() => handleCourseDescription(course)}>
//                 <CommentIcon />
//               </IconButton>
//             }
            
//             disablePadding>
//               <ListItemButton role={undefined} onClick={handleToggle(course)}>
//                 <ListItemIcon>
//                   <Checkbox
//                     edge="start"
//                     checked={checked.indexOf(course) !== -1}
//                     tabIndex={-1}
//                     disableRipple
//                     inputProps={{ 'aria-labelledby': labelId }}
//                   />
//                 </ListItemIcon>
//                 <ListItemText id={labelId} primary={course.name} />
               
                
//               </ListItemButton>
//             </ListItem>
//           );
//         })}
//          {/* <Popover
//         id={id}
//         open={open}
//         anchorEl={anchorEl}
//         onClose={handleClose}
//         anchorOrigin={{
//           vertical: 'bottom',
//           horizontal: 'left',
//         }}
//         transformOrigin={{
//           vertical: 'top',
//           horizontal: 'left',
//         }}
//       >
//         <Typography sx={{ p: 2 }}>{selectedCourse ? selectedCourse.description : ''}</Typography>
//       </Popover> */}
//       </List>

//       <Button variant="contained" onClick={handleEnroll}>Enroll</Button>
//     </div>
//   );
// }
import { useState, useEffect } from 'react';
import * as React from 'react';
import { generateClient } from 'aws-amplify/api';
import { listCourses, listEnrollments } from '../graphql/queries';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Checkbox from '@mui/material/Checkbox';
import IconButton from '@mui/material/IconButton';
import CommentIcon from '@mui/icons-material/Comment';
import Button from '@mui/material/Button';
import Popover from '@mui/material/Popover';
import Typography from '@mui/material/Typography';
import { getCurrentUser } from 'aws-amplify/auth';
import { createEnrollment } from '../graphql/mutations';

const client = generateClient();

export const fetchEnrollmentsForCurrentUser = async (userId) => {
  try {
    const enrollmentData = await client.graphql({
      query: listEnrollments,
      variables: {
        filter: {
          userID: { eq: userId },
        },
      },
    });

    return enrollmentData.data.listEnrollments.items;

  } catch (error) {
    console.error("Error fetching enrollments:", error);
  }
};

export default function Home() {
  const [courses, setCourses] = useState([]);
  const [checked, setChecked] = useState([]);
  const [selectedCourse, setSelectedCourse] = useState(null);
  const [enrolledCourses, setEnrolledCourses] = useState([]);
  const [currentUser, setCurrentUser] = useState(null);
  const [anchorEl, setAnchorEl] = useState(null);

  useEffect(() => {
    fetchCurrentUser();
  }, []);

  useEffect(() => {
    if (currentUser) {
      fetchCourses();
      fetchEnrollments();
    }
  }, [currentUser]);

  const fetchCourses = async () => {
    try {
      const courseData = await client.graphql({ query: listCourses });
      const courseList = courseData.data.listCourses.items;
      setCourses(courseList);
    } catch (error) {
      console.log("Error fetching courses:", error);
    }
  };

  const fetchCurrentUser = async () => {
    try {
      const user = await getCurrentUser();
      setCurrentUser(user);
    } catch (error) {
      console.error("Error fetching current user:", error);
    }
  };

  const fetchEnrollments = async () => {
    try {
      const enrolledCourses = await fetchEnrollmentsForCurrentUser(currentUser.userId);
      setEnrolledCourses(enrolledCourses);
    } catch (error) {
      console.error("Error fetching enrollments:", error);
    }
  };

  const handleToggle = (course) => () => {
    const currentIndex = checked.indexOf(course);
    const newChecked = [...checked];

    if (currentIndex === -1) {
      newChecked.push(course);
    } else {
      newChecked.splice(currentIndex, 1);
    }

    setChecked(newChecked);
  };

  const handleEnroll = async () => {
    if (!checked.length) {
      console.error("Error: No courses selected for enrollment.");
      return;
    }

    const notEnrolled = checked.filter(
      (course) => !enrolledCourses.some((enrollment) => enrollment.courseID === course.id && enrollment.userID === currentUser.userId)
    );

    if (!notEnrolled.length) {
      console.log("All selected courses are already enrolled.");
      return;
    }

    try {
      await changeEnrollment(notEnrolled);
      await fetchEnrollments(); // Refresh enrollments after enrolling
      await fetchEnrollmentsForCurrentUser(currentUser.id);
    } catch (error) {
      console.error("Error during enrollment process:", error);
    }
  };

  const changeEnrollment = async (selectedCourses) => {
    try {
      for (const course of selectedCourses) {
        await client.graphql({
          query: createEnrollment,
          variables: {
            input: {
              userID: currentUser.userId,
              courseID: course.id,
            },
          },
        });
      }
      console.log("Enrollment updated successfully");
    } catch (error) {
      console.error("Error updating enrollment:", error);
    }
  };

  const handleCourseDescription = (course, event) => {
    setAnchorEl(event.currentTarget);
    setSelectedCourse(course);
  };

  const handleClose = () => {
    setAnchorEl(null);
    setSelectedCourse(null);
  };

  const open = Boolean(anchorEl);
  const id = open ? 'course-popover' : undefined;

  return (
    <div>
      <p id="zero-state">
       For more information about the course 
        <br />
        Check out <a href="https://www.cs.up.ac.za/module_categories/honours/">University of Pretoria Computer Science</a>.
      </p>
      <List sx={{ width: '100%', maxWidth: 500, bgcolor: 'background.paper' }}>
        {courses.map((course) => {
          const labelId = `checkbox-list-label-${course.id}`;

          return (
            <ListItem
              key={course.id}
              secondaryAction={
                <IconButton edge="end" aria-label="comments" onClick={(event) => handleCourseDescription(course, event)}>
                  <CommentIcon />
                </IconButton>
              }
              disablePadding>
              <ListItemButton role={undefined} onClick={handleToggle(course)}>
                <ListItemIcon>
                  <Checkbox
                    edge="start"
                    checked={checked.indexOf(course) !== -1}
                    tabIndex={-1}
                    disableRipple
                    inputProps={{ 'aria-labelledby': labelId }}
                  />
                </ListItemIcon>
                <ListItemText id={labelId} primary={course.name} />
              </ListItemButton>
            </ListItem>
          );
        })}
      </List>

      <Popover
        id={id}
        open={open}
        anchorEl={anchorEl}
        onClose={handleClose}
        anchorOrigin={{
          vertical: 'top',
          horizontal: 'right',
        }}
        transformOrigin={{
          vertical: 'top',
          horizontal: 'left',
        }}
        sx={{ width: 1200, maxWidth: 1500 }}
      >
        <Typography sx={{ p: 2 }}>{selectedCourse ? selectedCourse.description : 'No description available.'}</Typography>
      </Popover>

      <Button variant="contained" onClick={handleEnroll}>Enroll</Button>
    </div>
  );
}
