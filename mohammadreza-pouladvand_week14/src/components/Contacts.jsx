import { useState } from "react";
import { v4 } from "uuid";

import styles from "./Contacts.module.css";

import ContactsList from "./ContactsList";
import inputs from "../constants/inputs.js";

function Contacts() {
  const [newContact, setNewContact] = useState({
    // a state to save values from new contact form
    id: "",
    name: "",
    lastName: "",
    email: "",
    phone: "",
  });

  const [savedContacts, setSavedContacts] = useState([]); // a state to store preveiously saved contacts
  const [alert, SetAlert] = useState("");

  const changeHandler = (event) => {
    const name = event.target.name;
    const value = event.target.value;

    setNewContact((newContact) => ({ ...newContact, [name]: value }));
  };

  const addHandler = () => {
    if (
      !newContact.name ||
      !newContact.lastName ||
      !newContact.email ||
      !newContact.phone
    ) {
      SetAlert("Please Enter Valid Data!");
      return;
    }
    const newContactWithId = { ...newContact, id: v4() };
    setSavedContacts((savedContacts) => [...savedContacts, newContactWithId]);
    setNewContact({ name: "", lastName: "", email: "", phone: "" });
    SetAlert("");
  };

  const deleteHandler = (id) => {
    const updatedSavedContacts = savedContacts.filter(
      (contact) => contact.id !== id
    );
    setSavedContacts(updatedSavedContacts);
  };
  return (
    <div>
      <div>
        {inputs.map(
          (
            input,
            index //Creating inputs by mapping on inputs constant
          ) => (
            <input
              key={index}
              type={input.type}
              name={input.name}
              placeholder={input.placeholder}
              value={newContact[input.name]}
              onChange={changeHandler}
            />
          )
        )}
        <button onClick={addHandler}>Add Contact</button>
      </div>
      <div className="alert-container">{alert && <p>{alert}</p>}</div>
      <ContactsList
        savedContacts={savedContacts}
        setSavedContacts={setSavedContacts}
        deleteHandler={deleteHandler}
      />
    </div>
  );
}
export default Contacts;
