import { getContacts } from "../components/contactsUtils";

export async function loader(){
  const contacts = await getContacts();
  return {contacts};
}