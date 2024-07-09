
import { Contact } from './types';

export class ContactManager {
  private contacts: Contact[] = [];

  addContact(contact: Contact): void {
    this.contacts.push(contact);
  }

  listContacts(): Contact[] {
    return this.contacts;
  }

  searchByName(name: string): Contact[] {
    return this.contacts.filter(contact =>
      contact.name.toLowerCase().includes(name.toLowerCase())
    );
  }
}
