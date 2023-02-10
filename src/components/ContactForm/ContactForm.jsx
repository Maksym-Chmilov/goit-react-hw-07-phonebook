import shortid from 'shortid';
import { Form, FormInput, FormBtn } from './ContactForm.styled';
import { useDispatch, useSelector } from 'react-redux';
import { addContact } from 'redux/contactsOperations';

export const ContactForm = () => {
  const contacts = useSelector(state => state.contacts.items);
  const nameInputIdFirst = shortid.generate();
  const nameInputIdSecond = shortid.generate();

  const dispatch = useDispatch();

  const handleSubmit = e => {
    e.preventDefault();

    const obj = {
      [e.target.elements.name.name]: e.target.elements.name.value,
      [e.target.elements.number.name]: e.target.elements.number.value,
    };

    const includesName = contacts.find(
      contact =>
        contact.name.toLowerCase() ===
        e.target.elements.name.value.toLowerCase()
    );

    if (includesName) {
      alert(`${e.target.elements.name.value} is already in contacts`);
      e.target.reset();
      return;
    }

    dispatch(addContact(obj));

    e.target.reset();
  };

  return (
    <Form onSubmit={handleSubmit}>
      <label htmlFor={nameInputIdFirst}>Name</label>
      <FormInput
        id={nameInputIdFirst}
        type="text"
        name="name"
        pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
        title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
        required
      />
      <label htmlFor={nameInputIdSecond}>Number</label>
      <FormInput
        id={nameInputIdSecond}
        type="tel"
        name="number"
        pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
        title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
        required
      />
      <FormBtn type="submit">Add contact</FormBtn>
    </Form>
  );
};