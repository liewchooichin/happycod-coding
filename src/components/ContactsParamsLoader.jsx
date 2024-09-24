import { getContact } from "./contactsUtils";

export async function loader({params}){
  const contact = await getContact(params.contactId);
  return {contact};
}