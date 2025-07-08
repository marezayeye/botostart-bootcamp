import React, { useState } from 'react'
import styles from './Contacts.module.css'

import ContactsList from './ContactsList';

function Contacts() {
  const [newContact, setNewContact] = useState({ // a state to save values from new contact form
    name: '',
    lastName: '',
    email: '',
    phone: ''
  })
  
  const [savedContacts, setSavedContacts] = useState([]); // a state to store preveiously saved contacts

  const changeHandler = event =>  {
    const name = event.target.name;
    const value = event.target.value;

    setNewContact((newContact) =>({...newContact, [name] : value}) )
  }

  const addHandler = () => {
    setSavedContacts(savedContacts => ([...savedContacts, newContact] ));
    setNewContact({    name: '',
    lastName: '',
    email: '',
    phone: ''
  });
  }
  return (
    <div>
      <form>
        <input type="text" name='name' placeholder='Name'value={newContact.name} onChange={changeHandler}/>
        <input type="text" name='lastName' placeholder='Last Name'value={newContact.lastName} onChange={changeHandler}/>
        <input type="email" name='email' placeholder='Email'value={newContact.email} onChange={changeHandler}/>
        <input type="number" name='phone' placeholder='Phone Number'value={newContact.phone} onChange={changeHandler}/>
        <button  type='submit' onClick={addHandler}>Add Contact</button>
      </form>

      <ContactsList savedContacts={savedContacts} setSavedContacts={setSavedContacts} />
    </div>
  )
}
export default Contacts