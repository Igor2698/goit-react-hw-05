import { Contact } from "../Contact/Contact";
import css from "../ContactList/ContactList.module.css";

export const ContactList = ({ contacts, deleteContact }) => {
  return (
    <ul className={css.contactsList}>
      {contacts.map(({ name, id, number }) => (
        <li className={css.contactsItem} key={id}>
          <Contact name={name} number={number} deleteContact={deleteContact} />
        </li>
      ))}
    </ul>
  );
};
