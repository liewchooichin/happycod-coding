import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
//import './App.css'

/**Router */
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

/**App related */
import { Root } from "./routes/Root"
import { ErrorPage } from "./ErrorPage"
import { Contact } from "./components/Contact"
import { loader as rootLoader } from "./routes/ContactLoader";
import { action as rootAction } from "./routes/ContactCreateAction";
import { loader as contactLoader } 
  from  "./components/ContactsParamsLoader";
import { EditContact } from './routes/ContactEdit';
import { action as editAction } from './routes/ContactEditAction';
import { action as destroyAction } from './routes/ContactDestroyAction';
import { ContactIndex } from './routes/ContactIndex';

/** Create the browser router */
const router = createBrowserRouter(
[
  {
    path: "/",
    element: <Root />,
    errorElement: <ErrorPage />,
    loader: rootLoader,
    action: rootAction,
    children: [
      {
        index: true,
        element: <ContactIndex />
      },
      {
        path: "contacts/:contactId",
        element: <Contact />,
        loader: contactLoader,
      },
      {
        path: "contacts/:contactId/edit",
        element: <EditContact />,
        loader: contactLoader,
        action: editAction,
      },
      {
        path: "contacts/:contactId/destroy",
        element: <Contact />,
        loader: contactLoader,
        action: destroyAction,
        errorElement: <ErrorPage />
      },
    ],
  },
]
);

function App() {

  return (
    <>
    <RouterProvider router={router} />
    </>
  )
}

export default App
