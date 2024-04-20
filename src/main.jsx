//Update the repo 
// git add .
// git commit -m “changes for v2”
// git push origin main

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
        errorElement: <div>Oops! There was an error.</div>,
      },
    ],
  },
]);




ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);