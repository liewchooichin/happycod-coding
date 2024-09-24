import { Outlet } from "react-router-dom";
import { Link } from "react-router-dom";
import { useLoaderData } from "react-router-dom";
import { Form } from "react-router-dom";
import { NavLink } from "react-router-dom";
import { useNavigation } from "react-router-dom";
import { useEffect } from "react";
import { useSubmit } from "react-router-dom";
import { Favorite } from "../components/Favorite"

export function Root() {
  const { contacts, q } = useLoaderData();
  // navigation.location will show up when the app is 
  // navigating to a new URL and loading the data for it.
  const navigation = useNavigation();
  // to start searching as the user type.
  const submit = useSubmit();

  // Showing the searching is in progress
  const searching = 
    navigation.location && 
    new URLSearchParams(navigation.location.search).has("q");

  // To synchronize the search bar and the 
  // search input field.
  // 1. Use default value in the search field.
  // 2. Use effect to update the value.
  useEffect(()=>{
    document.querySelector("#q").value = q;
  }, [q])

  // We can avoid this by replacing the current entry
  // in the history stack with the next page.
  // We only want to replace search results, not the 
  // page before we started searching, so we do a quick
  // check if this is the first search or not and then
  // decide to replace.
  function handleSearchChange(e){
    const isFirstSearch = (q === null);
    submit(e.currentTarget.form,
      {replace: !isFirstSearch,}
    )
  }

  return (
    <>
      <div id="sidebar">
        <h1>React Router Contacts</h1>
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
              onChange={(e) => handleSearchChange(e)}
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
              {contacts.map((c) => (
                <li key={c.id}>
                  <NavLink
                    to={`contacts/${c.id}`}
                    className={({isActive, isPending}) => (
                      isActive 
                      ? "active" 
                      : (isPending ? "pending" : "")
                    )}
                  >
                  
                  <Link to={`contacts/${c.id}`}>
                  {
                    c.first || c.last
                      ? (<>{c.first} {c.last}</>)
                      : (<i>No Name</i>)
                  }{" "}
                  {c.favorite && <span>★</span>}
                  </Link>

                  </NavLink>
                </li>
              ))}
            </ul>
          ) : (
            <p><i>No contacts</i></p>
          )}
        </nav>
      </div>
      <div id="detail"
        className={
          (navigation.state === "loading") 
            ? "loading"
            : ""
        }
      >
        <Outlet />
      </div>
    </>
  );
}