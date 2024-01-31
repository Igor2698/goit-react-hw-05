import "./App.css";
import { ContactList } from "../ContactList/ContactList";
import { SearchBox } from "../SearchBox/SearchBox";
import { ContactForm } from "../ContactForm/ContactForm";
import { useState, useEffect } from "react";

import { nanoid } from "nanoid";

function App() {
  const [contacts, setContacts] = useState(() => {
    const savesContacts = localStorage.getItem("savesContacts");
    if (savesContacts !== null) {
      return JSON.parse(savesContacts);
    }
    return [
      { id: "id-1", name: "Rosie Simpson", number: "459-12-56" },
      { id: "id-2", name: "Hermione Kline", number: "443-89-12" },
      { id: "id-3", name: "Eden Clements", number: "645-17-79" },
      { id: "id-4", name: "Annie Copeland", number: "227-91-26" },
    ];
  });

  const [inputValue, setInputValue] = useState("");

  useEffect(
    () => localStorage.setItem("savesContacts", JSON.stringify(contacts)),
    [contacts]
  );

  const addNewContact = (dates) => {
    const newContact = {
      ...dates,
      id: nanoid(),
    };
    setContacts([...contacts, newContact]);
  };

  const handleInputChange = (ev) => {
    setInputValue(ev.target.value);
  };

  const visibleContacts = () => {
    const inputValueInLowerCase = inputValue.toLowerCase();
    return contacts.filter((contact) =>
      contact.name.toLowerCase().includes(inputValueInLowerCase)
    );
  };

  const deleteContact = (name) => {
    const updateContacts = contacts.filter((contact) => contact.name !== name);
    setContacts(updateContacts);
  };

  return (
    <>
      <ContactForm addNewContact={addNewContact} />
      <SearchBox value={inputValue} handleInputChange={handleInputChange} />
      <ContactList contacts={visibleContacts()} deleteContact={deleteContact} />
    </>
  );
}

export default App;
