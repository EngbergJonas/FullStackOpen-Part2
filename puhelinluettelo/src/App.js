import React, { useState, useEffect } from "react";
import Contacts from "./components/Contacts";
import Filter from "./components/Filter";
import ContactForm from "./components/ContactForm";
import contactService from "./services/contacts";
import Notification from "./components/Notification";
import Footer from "./components/Footer";

const App = () => {
  const [persons, setPersons] = useState([]);
  const [newName, setNewName] = useState("");
  const [newNumber, setNewNumber] = useState("");
  const [setFilter, setNewFilter] = useState("");
  const [message, setMessage] = useState(null);

  const filterResult = persons.filter(person =>
    person.name.toLowerCase().includes(setFilter.toLowerCase())
  );

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
      modifyContact(newName, newNumber);
    } else {
      contactService
        .create(contactObject)
        .then(returnedContact => {
          setPersons(persons.concat(returnedContact));
          setNewName("");
          setNewNumber("");
        })
        .then(
          setMessage(`${newName} lisätty luetteloon`),
          setTimeout(() => {
            setMessage(null);
          }, 5000)
        );
    }
  };

  //PUT data
  const modifyContact = (name, newNumber) => {
    const contact = persons.find(contact => contact.name === name);
    if (
      window.confirm(
        `${name} on jo olemassa, haluatko korvata numeron uudella?`
      )
    ) {
      contactService.modify(contact, newNumber).then(() => {
        contactService.getAll().then(initialContacts => {
          setPersons(initialContacts);
        });
      });
    }
  };

  //DELETE data
  const toggleDeleteOf = id => {
    const contact = persons.find(contact => contact.id === id);
    console.log(contact);
    if (window.confirm(`Would you like to remove ${contact.name}`)) {
      contactService
        .remove(contact)
        .then(() => {
          setMessage(`${contact.name} on poistettu.`);
          setTimeout(() => {
            setMessage(null);
          }, 5000);
        })
        .then(() => {
          contactService.getAll().then(newContacts => {
            setPersons(newContacts);
          });
        })
        .catch(error => {
          setMessage(`${contact.name} on jo poistettu.`);
          setTimeout(() => {
            setMessage(null);
          }, 5000);
        })
        .then(
          contactService.getAll().then(newContacts => {
            setPersons(newContacts);
          })
        );
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
      <h1>Puhelinluettelo</h1>
      <Notification message={message} />
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
      <Footer />
    </div>
  );
};

export default App;
