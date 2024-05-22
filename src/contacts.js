import localforage from "localforage";
import { matchSorter } from "match-sorter";
import sortBy from "sort-by";
import { getCurrentUser } from 'aws-amplify/auth';
/////
import { generateClient } from 'aws-amplify/api';
const client = generateClient();
import {listCourses} from './graphql/queries'
import { useEffect, useState } from "react";
////////////
import { getCourse } from './graphql/queries';


export const fetchCourseDetails = async (courseId) => {
  try {
    const courseData = await client.graphql({
      query: getCourse,
      variables: { id: courseId },
    });

    return courseData.data.getCourse;
  } catch (error) {
    console.error(`Error fetching course details for ID ${courseId}:`, error);
  }
};




export const fetchCurrentUser1 = async () => {
  try {
    const user = await getCurrentUser();
    return user;
  } catch (error) {
    console.error("Error fetching current user:", error);
    throw error; // Re-throw the error to handle it in the calling code
  }
};



export async function getContacts(query) {
  await fakeNetwork(`getContacts:${query}`);
  let contacts = await localforage.getItem("contacts");
  if (!contacts) contacts = [];
  if (query) {
    contacts = matchSorter(contacts, query, { keys: ["first", "last"] });
  }
  return contacts.sort(sortBy("last", "createdAt"));
}

export async function createContact() {
  await fakeNetwork();
  let id = Math.random().toString(36).substring(2, 9);
  let contact = { id, createdAt: Date.now() };
  let contacts = await getContacts();
  contacts.unshift(contact);
  await set(contacts);
  return contact;
}

export async function getContact(id) {
  await fakeNetwork(`contact:${id}`);
  let contacts = await localforage.getItem("contacts");
  let contact = contacts.find(contact => contact.id === id);
  return contact ?? null;
}

export async function updateContact(id, updates) {
  await fakeNetwork();
  let contacts = await localforage.getItem("contacts");
  let contact = contacts.find(contact => contact.id === id);
  if (!contact) throw new Error("No contact found for", id);
  Object.assign(contact, updates);
  await set(contacts);
  return contact;
}

export async function deleteContact(id) {
  let contacts = await localforage.getItem("contacts");
  let index = contacts.findIndex(contact => contact.id === id);
  if (index > -1) {
    contacts.splice(index, 1);
    await set(contacts);
    return true;
  }
  return false;
}

function set(contacts) {
  return localforage.setItem("contacts", contacts);
}

// fake a cache so we don't slow down stuff we've already seen
let fakeCache = {};

async function fakeNetwork(key) {
  if (!key) {
    fakeCache = {};
  }

  if (fakeCache[key]) {
    return;
  }

  fakeCache[key] = true;
  return new Promise(res => {
    setTimeout(res, Math.random() * 800);
  });
}


// const fetchCourses= async ()=>
//   try {
//      const courseData = await client.gra
//   } catch (error) {
    
//   }

// const [courses,setCourse]=useState([])

// useEffect(()=>{

//   fetchCourses();
// },[]);

//   async function fetchCourses() {
//     try {
//       const courseData = await client.graphql({ query: listCourses });
//       const courseList = courseData.data.listNotes.items;
//       setCourse(courseList);
//       console.log('course data', courseList)
//     } catch (error) {
//       console.log("error on fetching course",error)
//     }
  
//   }