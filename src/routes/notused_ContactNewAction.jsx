import { redirect } from "react-router-dom";
import { createContact } from "../components/contactsUtils";


export async function action(){
  const contact = await createContact();
  return redirect(`/contacts/${contact.id}/edit`);
}