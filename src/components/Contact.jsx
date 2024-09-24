import { Form } from "react-router-dom";
import { useLoaderData } from "react-router-dom";



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
          )}
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