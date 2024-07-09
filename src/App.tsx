
import React, { useState } from 'react';
import ContactForm from './ContactForm';
import { Contact } from './types';
import { contactIterator } from './generators';
import './index.css';
const App: React.FC = () => {
  const [contacts, setContacts] = useState<Contact[]>([]);

  const handleAddContact = (contact: Contact) => {
    setContacts(prevContacts => [...prevContacts, contact]);
  };

  return (
    <div className="flex items-start justify-center p-12 bg-gray-100 min-h-screen">
      <div className="w-1/2 pr-6">
        <div className="bg-white shadow-md rounded-md p-8">
          <h1 className="text-2xl font-bold text-center mb-8">Contact Management</h1>
          <ContactForm onAddContact={handleAddContact} />
        </div>
      </div>
      <div className="w-1/2 pl-6">
        <div className="bg-white shadow-md rounded-md p-8">
          <h2 className="text-2xl font-bold text-center mb-8">Contact List</h2>
          <ul className="mt-4">
            {[...contactIterator(contacts)].map((contact) => (
              <li key={contact.id} className="border-b border-gray-200 py-4">
                <p className="text-lg font-medium text-gray-700">Name: {contact.name}</p>
                <p className="text-sm text-gray-500">Email: {contact.email}</p>
                <p className="text-sm text-gray-500">Phone Number: {contact.phoneNumber}</p>
                <p className="text-sm text-gray-500">Phone Type: {contact.phoneType}</p>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default App;
