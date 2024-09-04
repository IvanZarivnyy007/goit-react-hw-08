import { useSelector } from 'react-redux';
import Contact from '../Contact/Contact';
import { selectFilteredContacts } from '../../redux/contact/contactsSlice';

const ContactList = () => {
  const contacts = useSelector(selectFilteredContacts);

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
