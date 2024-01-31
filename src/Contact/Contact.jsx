import css from "../Contact/Contact.module.css";

export const Contact = ({ name, number, deleteContact }) => {
  return (
    <>
      <span className={css.contactName}>{name}</span>
      <span className={css.contactNumber}>{number}</span>
      <button
        className={css.contactButton}
        onClick={() => deleteContact(name)}
        type="button"
      >
        Delete
      </button>
    </>
  );
};
