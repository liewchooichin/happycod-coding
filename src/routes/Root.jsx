import { Outlet } from "react-router-dom";
import { Link } from "react-router-dom";
import { useLoaderData } from "react-router-dom";
import { Form } from "react-router-dom";
import { NavLink } from "react-router-dom";
import { useNavigation } from "react-router-dom";

export function Root() {
  const { contacts } = useLoaderData();
  const navigation = useNavigation();

  return (
    <>
      <div id="sidebar">
        <h1>React Router Contacts</h1>
        <div>
          <form id="search-form" role="search">
            <input
              id="q"
              aria-label="Search contacts"
              placeholder="Search"
              type="search"
              name="q"
            />
            <div
              id="search-spinner"
              aria-hidden
              hidden={true}
            />
            <div
              className="sr-only"
              aria-live="polite"
            ></div>
          </form>
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