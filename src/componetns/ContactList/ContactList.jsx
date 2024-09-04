import { useSelector } from 'react-redux';
// import { selectContacts } from '../../redux/contactsSlice';
// import { selectNameFilter } from '../../redux/filtersSlice';
import Contact from '../Contact/Contact';
import { selectFilteredContacts } from '../../redux/contacts/contactsSlice';

const ContactList = () => {
  const contacts = useSelector(selectFilteredContacts);
  // const contacts = useSelector(selectContacts);
  // const filters = useSelector(selectNameFilter);

  // const filteredContact = contacts.filter((el) =>
  //   el.name.toLowerCase().includes(filters.toLowerCase())
  // );

  return (
    <div className="contact-div">
      <ul className="contact-ul">
        {contacts.map((contact) => (
          <li key={contact.id}>
            <Contact
              id={contact.id}
              name={contact.name}
              number={contact.number}
            />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ContactList;
