import ContactForm from '../componetns/ContactForm/ContactForm';
import SearchBox from '../componetns/SearchBox/SearchBox';
import ContactList from '../componetns/ContactList/ContactList';
import { fetchContacts } from '../redux/contacts/contactsOps';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';

function ContactsPage() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <>
      <div>
        <h1>Phonebook</h1>
        <ContactForm />
        <SearchBox />
        <ContactList />
      </div>
    </>
  );
}

export default ContactsPage;
