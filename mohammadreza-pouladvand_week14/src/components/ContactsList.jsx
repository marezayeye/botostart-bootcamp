import ContactItem from "./ContactItem.jsx";

function ContactsList({ savedContacts, setSavedContacts,deleteHandler }) {
  return (
    <div>
      <h3>ContactsList</h3>
      {savedContacts.length ? (
        <ul>
          {savedContacts.map((contact) => (
            <ContactItem
              key={contact.id}
              data={contact}
              deleteHandler={deleteHandler}
            />
          ))}
        </ul>
      ) : (
        <p>No Contacts Yet!</p>
      )}
    </div>
  );
}

export default ContactsList;
