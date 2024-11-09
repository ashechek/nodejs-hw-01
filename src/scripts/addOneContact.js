import { createFakeContact } from '../utils/createFakeContact.js';
import { readContacts } from '../utils/readContacts.js';
import { writeContacts } from '../utils/writeContacts.js';

export const addOneContact = async () => {
  const contactsData = await readContacts();
  const existingContacts = contactsData ? JSON.parse(contactsData) : [];
  const newContact = createFakeContact();
  const updatedContacts = [...existingContacts, newContact];
  await writeContacts(JSON.stringify(updatedContacts));
};

addOneContact();
