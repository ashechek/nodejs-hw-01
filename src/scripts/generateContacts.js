import { createFakeContact } from '../utils/createFakeContact.js';
import { readContacts } from '../utils/readContacts.js';
import { writeContacts } from '../utils/writeContacts.js';

const generateContacts = async (number) => {
  const contactsData = await readContacts();
  const existingContacts = contactsData ? JSON.parse(contactsData) : [];
  const newContacts = Array.from({ length: number }, () => createFakeContact());
  const updatedContacts = [...existingContacts, ...newContacts];
  await writeContacts(JSON.stringify(updatedContacts));
};

generateContacts(5);
