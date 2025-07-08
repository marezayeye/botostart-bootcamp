import ContactItem from "./ContactItem.jsx";

import styles from "./ContactsList.module.css";

function ContactsList({ savedContacts, setSavedContacts, deleteHandler }) {
  return (
    <div className={styles.container}>
      <h3>ContactsList</h3>
      {savedContacts.length ? (
        <ul className={styles.contacts}>
          {savedContacts.map((contact) => (
            <ContactItem
              key={contact.id}
              data={contact}
              deleteHandler={deleteHandler}
            />
          ))}
        </ul>
      ) : (
        <p className={styles.message}>No Contacts Yet!</p>
      )}
    </div>
  );
}

export default ContactsList;