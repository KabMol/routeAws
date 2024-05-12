import {
  Outlet,
  NavLink,
  useNavigation,
  useLoaderData,
  Form,
  redirect,
  useSubmit,
} from "react-router-dom";


import checkUserActivity from "../functions/timer";

import { getContacts,createContact } from "../contacts";
import { useEffect } from "react";
import { signOut } from "aws-amplify/auth";

export async function action() {
  const contact = await createContact();
  return redirect(`/contacts/${contact.id}/edit`);
}
export async function loader({ request }) {
  const url = new URL(request.url);
  const q = url.searchParams.get("q");
  const contacts = await getContacts(q);
  return { contacts, q };
}
export default function Root() {
  const { contacts,q } = useLoaderData();
  const navigation = useNavigation();
  const submit = useSubmit();

  const searching =
    navigation.location &&
    new URLSearchParams(navigation.location.search).has(
      "q"
    );

  useEffect(() => {
    document.getElementById("q").value = q;
  }, [q]);

  const isActive = checkUserActivity();

  // Handle user inactivity based on "isActive" state
  if (!isActive) {
    // Show an inactivity message, log out, or perform other actions
    console.log("Naught rascal")
    
  }


    return (
      <>
        <div id="sidebar">
          <h1>React Router Courses </h1>  {/* Comment out this section the have the button at the bottom */}
          
          <div>
            <Form id="search-form" role="search">
              <input
                id="q"
                className={searching ? "loading" : ""}
                aria-label="Search contacts"
                placeholder="Search"
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
              <div
                id="search-spinner"
                aria-hidden
                hidden={!searching}
              />
              <div
                className="sr-only"
                aria-live="polite"
              ></div>
            </Form>
            <Form method="post">
            <button type="submit">New</button>
          </Form>
          </div>
          <nav>
          {contacts.length ? (
            <ul>
              {contacts.map((contact) => (
                <li key={contact.id}>

                  <NavLink
                    to={`contacts/${contact.id}`}
                    className={({ isActive, isPending }) =>
                      isActive
                        ? "active"
                        : isPending
                        ? "pending"
                        : ""
                    }
                  >
                    {contact.first || contact.last ? (
                      <>
                        {contact.first} {contact.last}
                      </>
                    ) : (
                      <i>No Name</i>
                    )}{" "}
                    {contact.favorite && <span>★</span>}
                  </NavLink>
                </li>
              ))}
            </ul>
          ) : (
            <p>
              <i>No contacts</i>
            </p>
          )}
          </nav>
          <button onClick={signOut}>Logout</button>
        </div>
        <div id="detail"
        className={
          navigation.state === "loading" ? "loading" : ""
        }
        >
        <Outlet />
        
        </div>
      </>
    );
  }