import { readContacts } from '../utils/readContacts.js';
import { writeContacts } from '../utils/writeContacts.js';

export const removeLastContact = async () => {
  const contactsData = await readContacts();
  const existingContacts = JSON.parse(contactsData);
  if (existingContacts.length > 1) {
    existingContacts.pop();
    await writeContacts(JSON.stringify(existingContacts));
  }
};

removeLastContact();
