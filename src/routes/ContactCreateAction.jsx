import { redirect } from "react-router-dom";
import { createContact } from "../components/contactsUtils";



export async function action(){
  const contact = await createContact();
  //return { contact};
  return redirect(`/contacts/${contact.id}/edit`);
}
