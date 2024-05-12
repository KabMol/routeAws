//Update the repo 
// git add .
// git commit -m “changes for v2”
// git push origin main

// npm run dev 


import * as React from "react";
import * as ReactDOM from "react-dom/client";

import ErrorPage from "./error-page";
import { action as destroyAction } from "./routes/destroy";
import Root, { loader as rootLoader,action as rootAction, } from "./routes/root";
import Index from "./routes/home";
import Contact, {
  loader as contactLoader,
  action as contactAction,
} from "./routes/contact";

import {
  createBrowserRouter,
  RouterProvider,
  Route
} from "react-router-dom";
import "./index.css";
import EditContact,{
  action as editAction,
}
 from "./routes/edit";

import "@aws-amplify/ui-react/styles.css";
import {
  withAuthenticator,
  Button,
  Heading,
  Image,
  View,
  Card,
} from "@aws-amplify/ui-react";


import { Amplify } from 'aws-amplify';
import config from './aws-exports';
import { signOut } from "aws-amplify/auth";
Amplify.configure(config);

const AppWithAuthenticator = withAuthenticator(() => {

  const router = createBrowserRouter([
    {
      path: "/",
      element: <Root />,
      loader: rootLoader,
      action: rootAction,
      errorElement: <ErrorPage />,
      children: [
        { index: true, element: <Index /> },
        {
          path: "contacts/:contactId",
          element: <Contact />,
          loader: contactLoader,
          action: contactAction,
        },
        {
          path: "contacts/:contactId/edit",
          element: <EditContact />,
          loader: contactLoader,
          action: editAction,
        },
        {
          path: "contacts/:contactId/destroy",
          action: destroyAction,
          errorElement: <div>Oops! There was an error ohh .</div>,
        },
      ],
    },
  ]);

  
  return (
    <React.StrictMode>
      <RouterProvider router={router} />
      <div data-amplify-authenticator> {/* Add the attribute to wrap the sign-out button */}
        {/* <Button onClick={signOut}>Sign Out</Button> */}
      </div>
    </React.StrictMode>
  );
});




ReactDOM.createRoot(document.getElementById("root")).render(
     <AppWithAuthenticator />
);

