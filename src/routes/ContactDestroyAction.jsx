import { redirect } from "react-router-dom";
import { deleteContact } from "../components/contactsUtils";

export async function action({params}){
  // to show error page
  //throw new Error("Error");
  await deleteContact(params.contactId);
  return redirect("/");
}