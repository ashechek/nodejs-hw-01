import { readContacts } from '../utils/readContacts.js';

export const countContacts = async () => {
  const contactsData = await readContacts();
  const existingContacts = contactsData ? JSON.parse(contactsData) : [];

  return existingContacts.length;
};

console.log(await countContacts());
