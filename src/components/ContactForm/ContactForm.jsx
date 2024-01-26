import { nanoid } from 'nanoid';
import { useSelector, useDispatch } from 'react-redux';
import { getContactsItems } from '../../redux/ContactListSlice';
import { addContact } from '../../redux/operations';

import css from '../../components/ContactForm/ContactForm.module.css';

const ContactForm = () => {
  const dispatch = useDispatch();
  const contacts = useSelector(getContactsItems);

  const handleSubmit = e => {
    e.preventDefault();

    const newObj = {
      id: nanoid(),
      name: e.target.elements.name.value,
      number: e.target.elements.number.value,
    };
    if (contacts.find(({ name }) => name === newObj.name)) {
      return alert(`${newObj.name} is already in contacts`);
    }

    if (contacts.find(({ number }) => number === newObj.number)) {
      return alert(`${newObj.number} is already in contacts`);
    }

    dispatch(addContact(newObj));

    e.target.reset();
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label className={css.lable}>
          Name
          <input
            className={css.contact_inp}
            type="text"
            name="name"
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            required
          />
        </label>
        <label className="lable">
          Number
          <input
            className={css.contact_inp}
            type="tel"
            name="number"
            pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
            title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
            required
          />
        </label>
        <button className={css.sabmit_contact} type="sabmit">
          add contact
        </button>
      </form>
    </div>
  );
};
export default ContactForm;