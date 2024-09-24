import { Form, useLoaderData } from "react-router-dom";
import { useNavigate } from "react-router-dom";

export function EditContact(){
  // to load the contact data
  const { contact } = useLoaderData();
  // to cancel the form
  const navigate = useNavigate();

  return(
    <Form method="post" id="contact-form">
      <p>
        <span>Name</span>
        <input
          placeholder="First"
          aria-label="First Name"
          type="text"
          name="first"
          defaultValue={contact?.first}
        ></input>

        <input
          placeholder="Last"
          aria-label="Last name"
          type="text"
          name="last"
          defaultValue={contact?.last}
        ></input>
      </p>
      <label>
        <span>Twitter</span>
        <input
          type="text"
          name="twitter"
          placeholder="@robo"
          defaultValue={contact?.twitter}
        ></input>
      </label>
      <label>
        <span>Notes</span>
        <textarea
          name="notes"
          defaultValue={contact?.notes}
          rows={3}
        ></textarea>
      </label>
      <p>
        <button type="submit">Save</button>
        <button 
          type="button"
          onClick={()=>{navigate(-1)}}
        >
          Cancel
        </button>
      </p>
    </Form>
  ); 
}