import { ContactsList, ContactsBtn, ContactsItem, RequestTitle } from './ContactList.styled';
import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchContact, deleteContact } from 'redux/contactsOperations';

export const ContactList = () => {
  const dispatch = useDispatch();
  const contacts = useSelector(state => state.contacts.items);
  const loading = useSelector(state => state.contacts.isLoading);
  const error = useSelector(state => state.contacts.error);

  useEffect(() => {
    dispatch(fetchContact());
  }, [dispatch]);

  const filter = useSelector(state => state.filter.filter);

  const filteredContacts = contacts.filter(({ name }) =>
    name.toLowerCase().includes(filter.toLowerCase())
  );

  return (
    <>
      <ContactsList>
        {filteredContacts.map(contact => (
          <ContactsItem key={contact.id}>
            {contact.name}: {contact.number}
            <ContactsBtn onClick={() => dispatch(deleteContact(contact.id))}>
              Delete
            </ContactsBtn>
          </ContactsItem>
        ))}
        {loading && !error && <RequestTitle>Request being processed</RequestTitle>}
      </ContactsList>
    </>
  );
};
