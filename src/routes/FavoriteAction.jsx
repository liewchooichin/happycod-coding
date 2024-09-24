import { updateContact } from "../components/contactsUtils";

export async function action({request, params}){
  const formData = await request.formData();
  const contact = updateContact(
    params.contactId,
    {favorite: formData.get("favorite") === "true"}
  )
  return contact;
}