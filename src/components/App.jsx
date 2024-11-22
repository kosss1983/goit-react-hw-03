import { useState, useEffect } from 'react';
import './App.css';
import ContactForm from './ContactForm/ContactForm';
import SearchBox from './SearchBox/SearchBox';
import ContactList from './ContactList/ContactList';

function App() {
  const contactsData = [
    { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
    { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
    { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
    { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
  ];
  const [contacts, setContacts] = useState(
    () => JSON.parse(localStorage.getItem('contactsData')) ?? contactsData
  );
  const [filter, setFilter] = useState('');
  useEffect(() => {
    localStorage.setItem('contactsData', JSON.stringify(contacts));
  }, [contacts]);

  const addContact = newContact => {
    setContacts(prevContact => {
      return [...prevContact, newContact];
    });
  };

  const deleteContact = idContact => {
    setContacts(prevContact => {
      return prevContact.filter(contact => contact.id !== idContact);
    });
  };

  const visibleContacts = contacts.filter(contact =>
    contact.name.toLowerCase().includes(filter.toLowerCase())
  );

  return (
    <div className="container">
      <h1>Phonebook</h1>
      <div className="formBox">
        <ContactForm onAdd={addContact} />
        <SearchBox filter={filter} setFilter={setFilter} />
      </div>
      <ContactList contacts={visibleContacts} deleteContact={deleteContact} />
    </div>
  );
}

export default App;
