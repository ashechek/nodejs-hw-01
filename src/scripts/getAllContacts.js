import { readContacts } from '../utils/readContacts.js';

export const getAllContacts = async () => {
  const contactsData = await readContacts();
  const existingContacts = contactsData ? JSON.parse(contactsData) : [];

  return existingContacts;
};

console.log(await getAllContacts());
