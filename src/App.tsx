
import React, { useState } from 'react';
import ContactForm from './ContactForm';
import { Contact } from './types';
import { contactIterator } from './generators';

const App: React.FC = () => {
  const [contacts, setContacts] = useState<Contact[]>([]);

  const handleAddContact = (contact: Contact) => {
    setContacts(prevContacts => [...prevContacts, contact]);
  };

  return (
    <div>
      <h1>Contact Management System</h1>
      <ContactForm onAddContact={handleAddContact} />
      <h2>Contact List</h2>
      <ul>
        {[...contactIterator(contacts)].map(contact => (
          <li key={contact.id}>
            <p>Name: {contact.name}</p>
            <p>Email: {contact.email}</p>
            <p>Phone Number: {contact.phoneNumber}</p>
            <p>Phone Type: {contact.phoneType}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default App;
