import { redirect } from "react-router-dom";
import { updateContact } from "../components/contactsUtils";

export async function action({request, params}){
  const formData = await request.formData();
  const updates = Object.fromEntries(formData);
  await updateContact(params.contactId, updates);
  return redirect(`/contacts/${params.contactId}`);
}