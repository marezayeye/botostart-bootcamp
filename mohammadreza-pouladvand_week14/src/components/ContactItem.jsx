import { useState } from "react";
import styles from "./ContactItem.module.css";

function ContactItem({
  data: { id, name, lastName, email, phone },
  deleteHandler,
  saveEditedContact,
}) {
  const [editMode, setEditMode] = useState(false);
  const [editedContact, setEditedContact] = useState({
    id: id,
    name: name,
    lastName: lastName,
    email: email,
    phone: phone,
  });

  const editChangeHandler = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setEditedContact((editedContact) => ({ ...editedContact, [name]: value }));
  };

  return !editMode ? (
    <li className={styles.item}>
      <p>
        {name} {lastName}
      </p>
      <p>
        <span>📧</span> {email}
      </p>

      <p>
        <span>📞</span> {phone}
      </p>

      <button onClick={() => setEditMode(true)}>✍️</button>
      <button onClick={() => deleteHandler(id)}>🗑️</button>
    </li>
  ) : (
    <li>
      <p>
        <input
          type="text"
          name="name"
          value={editedContact.name}
          onChange={editChangeHandler}
        />
        <input
          type="text"
          name="lastName"
          value={editedContact.lastName}
          onChange={editChangeHandler}
        />
      </p>
      <p>
        <span>📧</span>
        <input
          type="text"
          name="email"
          value={editedContact.email}
          onChange={editChangeHandler}
        />
      </p>
      <p>
        <span>📞</span>
        <input
          type="number"
          name="phone"
          value={editedContact.phone}
          onChange={editChangeHandler}
        />
      </p>
      <button onClick={() => setEditMode(false)}>Cancel</button>
      <button
        onClick={() => {
          saveEditedContact(editedContact);
          deleteHandler(id);
        }}
      >
        Save
      </button>
    </li>
  );
}

export default ContactItem;
