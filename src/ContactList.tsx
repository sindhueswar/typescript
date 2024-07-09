import React from "react";
import { Contact } from "./types";

interface Props {
  contacts: Contact[];
}

const ContactList: React.FC<Props> = ({ contacts }) => {
  return (
    <ul>
      {contacts.map((contact) => (
        <li key={contact.id}>
          <p>Name: {contact.name}</p>
          <p>Email: {contact.email}</p>
          <p>Phone Number: {contact.phoneNumber}</p>
        </li>
      ))}
    </ul>
  );
};

export default ContactList;
