// // import React, { useEffect, useState } from 'react';
// // import {
// //   Outlet,
// //   NavLink,
// //   useNavigation,
// //   useLoaderData,
// //   Form,
// //   redirect,
// //   useSubmit,
// // } from "react-router-dom";
// // import { getCurrentUser } from 'aws-amplify/auth';
// // import { signOut } from 'aws-amplify/auth';
// // import checkUserActivity from "../functions/timer";
// // import { getContacts, createContact } from "../contacts";
// // import { fetchEnrollmentsForCurrentUser } from "../routes/home";
// // import { fetchCourseDetails } from "../contacts"; // Adjust the import path as necessary

// // export async function action() {
// //   const contact = await createContact();
// //   return redirect(`/contacts/${contact.id}/edit`);
// // }

// // export async function loader({ request }) {
// //   const url = new URL(request.url);
// //   const q = url.searchParams.get("q");
// //   const contacts = await getContacts(q);
// //   return { contacts, q };
// // }

// // export default function Root() {
// //   const { contacts, q } = useLoaderData();
// //   const navigation = useNavigation();
// //   const submit = useSubmit();
// //   const [enrolledCourses, setEnrolledCourses] = useState([]);
// //   const [currentUser, setCurrentUser] = useState(null);

// //   const searching =
// //     navigation.location &&
// //     new URLSearchParams(navigation.location.search).has("q");

// //   useEffect(() => {
// //     document.getElementById("q").value = q;
// //   }, [q]);

// //   useEffect(() => {
// //     fetchCurrentUser();
// //   }, []);

// //   useEffect(() => {
// //     if (currentUser) {
// //       fetchCourseUser();
// //     }
// //   }, [currentUser]);

// //   const fetchCurrentUser = async () => {
// //     try {
// //       const user = await getCurrentUser();
// //       setCurrentUser(user);
// //     } catch (error) {
// //       console.error("Error fetching current user:", error);
// //     }
// //   };

// //   const fetchCourseUser = async () => {
// //     try {
// //       const enrollments = await fetchEnrollmentsForCurrentUser(currentUser.userId);
// //       const enrolledCourseDetails = await Promise.all(
// //         enrollments.map(async (enrollment) => {
// //           const courseDetails = await fetchCourseDetails(enrollment.courseID);
// //           return {
// //             ...enrollment,
// //             courseDetails,
// //           };
// //         })
// //       );
// //       setEnrolledCourses(enrolledCourseDetails);
// //       console.log(enrolledCourseDetails);
// //     } catch (error) {
// //       console.error("Error fetching enrollments:", error);
// //     }
// //   };

// //   const isActive = checkUserActivity();
// //   if (!isActive) {
// //     console.log("Naught rascal");
// //   }

// //   return (
// //     <>
// //       <div id="sidebar">
// //         <h1>Enrolled Course</h1>
// //         <div>
// //           <Form id="search-form" role="search">
// //             <input
// //               id="q"
// //               className={searching ? "loading" : ""}
// //               aria-label="Search contacts"
// //               placeholder="Search-I"
// //               type="search"
// //               name="q"
// //               defaultValue={q}
// //               onChange={(event) => {
// //                 const isFirstSearch = q == null;
// //                 submit(event.currentTarget.form, {
// //                   replace: !isFirstSearch,
// //                 });
// //               }}
// //             />
// //             <div id="search-spinner" aria-hidden hidden={!searching} />
// //             <div className="sr-only" aria-live="polite"></div>
// //           </Form>
// //           <Form method="post">
// //             <button type="submit">New</button>
// //           </Form>
// //         </div>
// //         {/* <nav>
// //           {contacts.length ? (
// //             <ul>
// //               {contacts.map((contact) => (
// //                 <li key={contact.id}>
// //                   <NavLink
// //                     to={`contacts/${contact.id}`}
// //                     className={({ isActive, isPending }) =>
// //                       isActive
// //                         ? "active"
// //                         : isPending
// //                         ? "pending"
// //                         : ""
// //                     }
// //                   >
// //                     {contact.first || contact.last ? (
// //                       <>
// //                         {contact.first} {contact.last}
// //                       </>
// //                     ) : (
// //                       <i>No Name</i>
// //                     )}{" "}
// //                     {contact.favorite && <span>★</span>}
// //                   </NavLink>
// //                 </li>
// //               ))}
// //             </ul>
// //           ) : (
// //             <p>
// //               <i>No contacts</i>
// //             </p>
// //           )}
// //         </nav>  */}
// //         <nav>
// //           {/* <h2>Enrolled Courses</h2> */}
// //           {enrolledCourses.length ? (
// //             <ul>
// //               {enrolledCourses.map((course) => (
// //                 <li key={course.courseDetails.id}>
// //                   <NavLink
// //                    to={`courses/${course.courseDetails.id}`}
// //                     // className={({ isActive, isPending }) =>
// //                     //   isActive
// //                     //     ? "active"
// //                     //     : isPending
// //                     //     ? "pending"
// //                     //     : ""
// //                     // }
// //                   >
// //                     {course.courseDetails.name ? (
// //                       <>
// //                         {course.courseDetails.name}
// //                       </>
// //                     ) : (
// //                       <i>No Name</i>
// //                     )}{" "}
// //                     {/* { <span>★</span>} */}
// //                   </NavLink>
// //                 </li>
// //               ))}
// //             </ul>
// //           ) : (
// //             <p>
// //               <i>No enrolled courses</i>
// //             </p>
// //           )}
// //         </nav>
// //         <button onClick={signOut}>Logout</button>
// //       </div>
// //       <div
// //         id="detail"
// //         className={navigation.state === "loading" ? "loading" : ""}
// //       >
// //         <Outlet />
// //       </div>
// //     </>
// //   );
// // }
// import React, { useEffect, useState } from 'react';
// import {
//   Outlet,
//   useNavigation,
//   useLoaderData,
//   Form,
//   redirect,
//   useSubmit,
// } from "react-router-dom";
// import { getCurrentUser } from 'aws-amplify/auth';
// import { signOut } from 'aws-amplify/auth';
// import checkUserActivity from "../functions/timer";
// import { getContacts, createContact } from "../contacts";
// import { fetchEnrollmentsForCurrentUser } from "../routes/home";
// import { fetchCourseDetails } from "../contacts"; // Adjust the import path as necessary


// export async function action() {
//   const contact = await createContact();
//   return redirect(`/contacts/${contact.id}/edit`);
// }

// export async function loader({ request }) {
//   const url = new URL(request.url);
//   const q = url.searchParams.get("q") || "";
//   const contacts = await getContacts(q);

//   // Fetch current user and enrolled courses
//   const currentUser = await getCurrentUser();
//   const enrollments = await fetchEnrollmentsForCurrentUser(currentUser.userId);
//   const enrolledCourseDetails = await Promise.all(
//     enrollments.map(async (enrollment) => {
//       const courseDetails = await fetchCourseDetails(enrollment.courseID);
//       return {
//         ...enrollment,
//         courseDetails,
//       };
//     })
//   );

//   // Filter courses based on the search query
//   const filteredCourses = enrolledCourseDetails.filter((course) =>
//     course.courseDetails.name.toLowerCase().includes(q.toLowerCase())
//   );

//   return { contacts, filteredCourses, q };
// }

// export default function Root() {
//   const { contacts, filteredCourses, q } = useLoaderData();
//   const navigation = useNavigation();
//   const submit = useSubmit();
//   const [currentUser, setCurrentUser] = useState(null);

//   const searching =
//     navigation.location &&
//     new URLSearchParams(navigation.location.search).has("q");

//   useEffect(() => {
//     document.getElementById("q").value = q;
//   }, [q]);

//   useEffect(() => {
//     fetchCurrentUser();
//   }, []);

//   useEffect(() => {
//     if (currentUser) {
//       fetchCourseUser();
//     }
//   }, [currentUser]);

//   const fetchCurrentUser = async () => {
//     try {
//       const user = await getCurrentUser();
//       setCurrentUser(user);
//     } catch (error) {
//       console.error("Error fetching current user:", error);
//     }
//   };

//   const fetchCourseUser = async () => {
//     try {
//       const enrollments = await fetchEnrollmentsForCurrentUser(currentUser.userId);
//       const enrolledCourseDetails = await Promise.all(
//         enrollments.map(async (enrollment) => {
//           const courseDetails = await fetchCourseDetails(enrollment.courseID);
//           return {
//             ...enrollment,
//             courseDetails,
//           };
//         })
//       );
//       setFilteredCourses(enrolledCourseDetails);
//       console.log(enrolledCourseDetails);
//     } catch (error) {
//       console.error("Error fetching enrollments:", error);
//     }
//   };

//   const isActive = checkUserActivity();
//   if (!isActive) {
//     console.log("Naught rascal");
//   }

//   return (
//     <>
//       <div id="sidebar">
//         <h1>Enrolled Course</h1>
//         <div>
//           <Form id="search-form" role="search">
//             <input
//               id="q"
//               className={searching ? "loading" : ""}
//               aria-label="Search courses"
//               placeholder="Search courses"
//               type="search"
//               name="q"
//               defaultValue={q}
//               onChange={(event) => {
//                 const isFirstSearch = q == null;
//                 submit(event.currentTarget.form, {
//                   replace: !isFirstSearch,
//                 });
//               }}
//             />
//             <div id="search-spinner" aria-hidden hidden={!searching} />
//             <div className="sr-only" aria-live="polite"></div>
//           </Form>
//           <Form method="post">
//             <button type="submit">New</button>
//           </Form>
//         </div>
//         <nav>
//           {filteredCourses.length ? (
//             <ul>
//               {filteredCourses.map((course) => (
//                 <li key={course.courseDetails.id}
                
//                 >
//                   {course.courseDetails.name ? (
//                       <>
//                         {course.courseDetails.name}
//                       </>
//                     ) : (
//                     <i>No Name</i>
//                   )}
//                 </li>
//               ))}
//             </ul>
//           ) : (
//             <p>
//               <i>No enrolled courses</i>
//             </p>
//           )}
//         </nav>
//         <button onClick={signOut}>Logout</button>
//       </div>
//       <div
//         id="detail"
//         className={navigation.state === "loading" ? "loading" : ""}
//       >
//         <Outlet />
//       </div>
//     </>
//   );
// }
import React, { useEffect, useState } from 'react';
import {
  Outlet,
  useNavigation,
  useLoaderData,
  Form,
  redirect,
  useSubmit,
} from "react-router-dom";
import { getCurrentUser } from 'aws-amplify/auth';
import { signOut } from 'aws-amplify/auth';
import checkUserActivity from "../functions/timer";
import { getContacts, createContact } from "../contacts";
import { fetchEnrollmentsForCurrentUser } from "../routes/home";
import { fetchCourseDetails } from "../contacts"; // Adjust the import path as necessary


export async function action() {
  const contact = await createContact();
  return redirect(`/contacts/${contact.id}/edit`);
}

export async function loader({ request }) {
  const url = new URL(request.url);
  const q = url.searchParams.get("q") || "";
  const contacts = await getContacts(q);

  // Fetch current user and enrolled courses
  const currentUser = await getCurrentUser();
  const enrollments = await fetchEnrollmentsForCurrentUser(currentUser.userId);
  const enrolledCourseDetails = await Promise.all(
    enrollments.map(async (enrollment) => {
      const courseDetails = await fetchCourseDetails(enrollment.courseID);
      return {
        ...enrollment,
        courseDetails,
      };
    })
  );

  // Filter courses based on the search query
  const filteredCourses = enrolledCourseDetails.filter((course) =>
    course.courseDetails.name.toLowerCase().includes(q.toLowerCase())
  );

  return { contacts, filteredCourses, q };
}
// export const fetchCourseUser = async (userID) => {
//   try {
//     const enrollments = await fetchEnrollmentsForCurrentUser(userID);
//     const enrolledCourseDetails = await Promise.all(
//       enrollments.map(async (enrollment) => {
//         const courseDetails = await fetchCourseDetails(enrollment.courseID);
//         return {
//           ...enrollment,
//           courseDetails,
//         };
//       })
//     );
//     console.log(enrolledCourseDetails);
//     // setFilteredCourses(enrolledCourseDetails);
//     return(enrolledCourseDetails);
    
//   } catch (error) {
//     console.error("Error fetching enrollments:", error);
//   }
// };
export default function Root() {
  const { contacts, filteredCourses, q } = useLoaderData();
  const navigation = useNavigation();
  const submit = useSubmit();
  const [currentUser, setCurrentUser] = useState(null);

  const searching =
    navigation.location &&
    new URLSearchParams(navigation.location.search).has("q");

  useEffect(() => {
    document.getElementById("q").value = q;
  }, [q]);

  useEffect(() => {
    fetchCurrentUser();
  }, []);

  useEffect(() => {
    if (currentUser) {
      // fetchCourseUser(currentUser.id);
    }
  }, [currentUser]);

  const fetchCurrentUser = async () => {
    try {
      const user = await getCurrentUser();
      setCurrentUser(user);
    } catch (error) {
      console.error("Error fetching current user:", error);
    }
  };



  const isActive = checkUserActivity();
  if (!isActive) {
    console.log("Naught rascal");
  }

  return (
    <>
      <div id="sidebar">
        <h1>Enrolled Course</h1>
        <div>
          <Form id="search-form" role="search">
            <input
              id="q"
              className={searching ? "loading" : ""}
              aria-label="Search courses"
              placeholder="Search courses"
              type="search"
              name="q"
              defaultValue={q}
              onChange={(event) => {
                const isFirstSearch = q == null;
                submit(event.currentTarget.form, {
                  replace: !isFirstSearch,
                });
              }}
            />
            <div id="search-spinner" aria-hidden hidden={!searching} />
            <div className="sr-only" aria-live="polite"></div>
          </Form>
          {/* <Form method="post">
            <button type="submit">New</button>
          </Form> */}
        </div>
        <nav>
          {filteredCourses.length ? (
            <ul>
              {filteredCourses.map((course) => (
                <li key={course.courseDetails.id} className="button-look">
                  {course.courseDetails.name ? (
                    <>
                      {course.courseDetails.name.split(' ').map((word, index) => (
                        <React.Fragment key={index}>
                          {word}
                          <br />
                        </React.Fragment>
                      ))}
                    </>
                  ) : (
                    <i>No Name</i>
                  )}
                </li>
              ))}
            </ul>
          ) : (
            <p>
              <i>No enrolled courses</i>
            </p>
          )}
        </nav>
        <button onClick={signOut}>Logout</button>
      </div>
      <div
        id="detail"
        className={navigation.state === "loading" ? "loading" : ""}
      >
        <Outlet />
      </div>
    </>
  );
}
