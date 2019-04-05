import React, { useState, useEffect } from "react";
import Contacts from "./components/Contacts";
import Filter from "./components/Filter";
import ContactForm from "./components/ContactForm";
import contactService from "./services/contacts";

const App = () => {
  const [persons, setPersons] = useState([]);
  const [newName, setNewName] = useState("");
  const [newNumber, setNewNumber] = useState("");
  const [setFilter, setNewFilter] = useState("");

  const filterResult = persons.filter(person =>
    person.name.toLowerCase().includes(setFilter.toLowerCase())
  );

  const getConfirm = (name, newNumber) => {
    const contact = persons.find(contact => contact.name === name);
    console.log(newNumber)
    console.log(contact)
    if (
      window.confirm(`${name} on jo olemassa, haluatko korvata numeron uudella?`)
    ) {
      contactService.modify(contact, newNumber).then(() => {
        contactService.getAll().then(initialContacts => {
          setPersons(initialContacts);
        })
      })
    }
  };

  //GET data
  useEffect(() => {
    contactService.getAll().then(initialContacts => {
      setPersons(initialContacts);
    });
  }, []);

  //POST data
  const addContact = event => {
    event.preventDefault();
    const contactObject = {
      name: newName,
      number: newNumber
    };
    if (
      persons
        .map(person => person.name.toLowerCase() === newName.toLowerCase())
        .includes(true)
    ) {
      //PUT data
      getConfirm(newName, newNumber);
    } else {
      contactService.create(contactObject).then(returnedContact => {
        setPersons(persons.concat(returnedContact));
        setNewName("");
        setNewNumber("");
      });
    }
  };

  //DELETE data
  const toggleDeleteOf = id => {
    const contact = persons.find(contact => contact.id === id);
    console.log(contact)
    if (window.confirm(`Would you like to remove ${contact.name}`)) {
      contactService.remove(contact).then(() => {
        contactService.getAll().then(initialContacts => {
          setPersons(initialContacts);
        });
      });
    }
  };

  const handleNameChange = event => {
    setNewName(event.target.value);
  };

  const handleNumberChange = event => {
    setNewNumber(event.target.value);
  };

  const handleFilter = event => {
    setNewFilter(event.target.value);
  };

  return (
    <div>
      <h2>Puhelinluettelo</h2>
      <Filter filter={setFilter} eventHandler={handleFilter} />
      <ContactForm
        add={addContact}
        name={newName}
        nameHandler={handleNameChange}
        number={newNumber}
        numberHandler={handleNumberChange}
      />
      <h2>Numerot</h2>
      <Contacts result={filterResult} toggleDelete={toggleDeleteOf} />
    </div>
  );
};

export default App;
