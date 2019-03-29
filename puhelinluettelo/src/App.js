import React, { useState } from 'react'
import Contacts from './components/Contacts'

const App = (props) => {
  const [persons, setPersons] = useState(props.contacts) 
  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('')
  const [filter, setFilter] = useState('')

  const contactsToShow = filter 
  ? persons 
  : persons.filter(person => person.name.filter)

  const rows = () => contactsToShow.map(contact =>
    <Contacts 
    key={contact.id}
    contact={contact}
    />
  )

  const getName = (array) => (
    array.map(item => (item.name))
  )

  const addContact = (event) => {
    event.preventDefault()
    const contactObject = {
      id: persons.length + 1,
      name: newName,
      number: newNumber
    }
    if(!(getName(persons).indexOf(newName))){
      return(alert(`${newName} on jo olemassa!`))
    }
    setPersons(persons.concat(contactObject))
    setNewName('')
    setNewNumber('')
  }

  const handleNameChange = (event) => {
    setNewName(event.target.value)
  }

  const handleNumberChange = (event) => {
    setNewNumber(event.target.value)
  }

  const handleFilter = (event) => {
    setFilter(event.target.value)
    console.log(filter)
  }
  return (
    <div>
      <h2>Puhelinluettelo</h2>
      <form onSubmit={addContact}>
        <div>
          Rajaa näytettäviä: 
          <input 
          value={filter}
          onChange={handleFilter}
          />
        </div>
        <h3>Lisää uusi</h3>
        <div>
          Nimi: 
          <input 
          value={newName}
          onChange={handleNameChange}
          />
        </div>
        <div>
          Numero: 
          <input 
          value={newNumber}
          onChange={handleNumberChange}
          />
        </div>
        <div>
        <button type="submit">lisää</button>
        </div>
      </form>
      <h2>Numerot</h2>
      <ul>
        {rows()}
      </ul>
    </div>
  )

}

export default App