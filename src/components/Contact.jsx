import { Form } from "react-router-dom";
import { useLoaderData } from "react-router-dom";
import { Favorite } from "./Favorite";


/**
 * For these cases, we have the useFetcher hook. It allows us to
 * communicate with loaders and actions without causing a navigation.
 *
 * The ★ button on the contact page makes sense for this. We aren't 
 * creating or deleting a new record, we don't want to change pages, we 
 * simply want to change the data on the page we're looking at.
 * 
 */

export function Contact(){
  const {contact} = useLoaderData();

  /*
  const contact = {
    first: "Surprise",
    last: "Robo",
    avatar: "https://robohash.org/you.png?size=200x200",
    twitter: "surprise_robo",
    notes: "Good night to night skies.",
    favorite: true,
  };
  */

  

  return(
    <div id="contact">
      <div>
        <img
          key={contact.avator}
          src={
            contact.avatar ||
            `https://robohash.org/${contact.id}.png?size=200x200`
          }
        ></img>
      </div>
      
      <div>
        <h1>
          {(contact.first || contact.last) ? (
            <>
            {contact.first} {contact.last}
            </>
          ) : (
            <i>No Name</i>
          )} {" "}
          <Favorite contact={contact} />
        </h1>
        
        {contact.twitter && (
          <p>
            <a 
              target="_blank"
              href={`https://twitter.com/${contact.twitter}`}
            >
              {contact.twitter}
            </a>
          </p>
        )}

        {contact.notes && <p>{contact.notes}</p>}

        <div>
          <Form action="edit">
            <button type="submit">Edit</button>
          </Form>
          <Form
            method="post"
            action="destroy"
            onSubmit={(e) => {
              if(!confirm(
                  "Please confirm you want to delete this record."
                )
              ){
                e.preventDefault();
              }
            }}
          >
            <button type="submit">Delete</button>
          </Form>
        </div>
      </div>
    </div>
  )
}