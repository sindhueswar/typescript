// Iterators and Generators
import { Contact } from './types';  

export function* contactIterator(contacts: Contact[]) {
  for (const contact of contacts) {
    yield contact;
  }
}
