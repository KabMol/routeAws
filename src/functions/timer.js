// import React, { useEffect, useState } from 'react';

// const LogoutTimer = ({ logout }) => {
// //  const TIMEOUT = 30 * 60 * 1000; // 30 minutes in milliseconds
// const TIMEOUT = 5*1000;
//  const [timeoutId, setTimeoutId] = useState(null);

//  // Reset the timer whenever there's user activity
//  const resetTimer = () => {
//   clearTimeout(timeoutId);
//   const newTimeoutId = setTimeout(logout, TIMEOUT);
//   setTimeoutId(newTimeoutId);
//  };

//  useEffect(() => {
//     resetTimer();
//   // Set up event listeners to detect user activity
//   const handleActivity = () => resetTimer();
//   window.addEventListener('mousemove', resetTimer);
//   window.addEventListener('keydown', resetTimer);
//   window.addEventListener('mousedown', resetTimer);
//   window.addEventListener('touchstart', resetTimer);

// //   // Start the initial timer
// //   resetTimer();

//   // Clean up event listeners on unmount
//   return () => {
//    window.removeEventListener('mousemove', handleActivity);
//    window.removeEventListener('keydown', handleActivity);
//    window.removeEventListener('mousedown', handleActivity);
//    window.removeEventListener('touchstart', handleActivity);
//    clearTimeout(timeoutId);
//   };
//  }, []); // Only run this effect once on component mount

//  return null;
// };

// export default LogoutTimer;

import * as React from "react"

import { signOut } from "aws-amplify/auth"

function checkUserActivity(){

    const [activty, setActive]= React.useState(true);

    const checkForInactivity=() => {
        const expireTime=localStorage.getItem("expireTime")

        if (expireTime<Date.now()){
            // console.log("inactive");
            setActive(false);
            signOut();
        }
    }

    const updateExpireTime =()=>{
        const expireTime=Date.now()+ 5*(1000)*60///time to inactive
        localStorage.setItem("expireTime",expireTime)
    }

    React.useEffect(()=>{

        const interval = setInterval(() => {
            checkForInactivity();
        },2000);
        return()=> clearInterval(interval);
    },[]);

    React.useEffect(() => {    

        updateExpireTime();

        window.addEventListener('mousemove', updateExpireTime);
        window.addEventListener('keydown', updateExpireTime);
        window.addEventListener('mousedown', updateExpireTime);
        window.addEventListener('touchstart', updateExpireTime);

        return()=>{

            window.addEventListener('mousemove', updateExpireTime);
            window.addEventListener('keydown', updateExpireTime);
            window.addEventListener('mousedown', updateExpireTime);
            window.addEventListener('touchstart', updateExpireTime);
        }


    },[]
);

    
    return (activty);


}
export default checkUserActivity;