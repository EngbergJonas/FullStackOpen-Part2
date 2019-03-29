import React, { useState } from 'react'
import Contacts from './components/Contacts'
import Filter from './components/Filter'
import ContactForm from './components/ContactForm'

const App = (props) => {
  const [persons, setPersons] = useState(props.contacts) 
  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('')
  const [setFilter, setNewFilter] = useState('')

  const filterResult = persons.filter(
    person => person.name.toLowerCase().includes(
      setFilter.toLowerCase()
    )
  )

  const addContact = (event) => {
    event.preventDefault()
    const contactObject = {
      id: persons.length + 1,
      name: newName,
      number: newNumber
    }
    //Include(true) checks if the persons array returns an index as true
    if(persons.map(person => 
      person.name.toLowerCase() === newName.toLowerCase()).includes(true)){
      alert(`${newName} on jo olemassa!`)
    }
    else{
      setPersons(persons.concat(contactObject))
      setNewName('')
      setNewNumber('')
    }
  }

  const handleNameChange = (event) => {
    setNewName(event.target.value)
  }

  const handleNumberChange = (event) => {
    setNewNumber(event.target.value)
  }

  const handleFilter = (event) => {
    setNewFilter(event.target.value)
  }

  return (
    <div>
      <h2>Puhelinluettelo</h2>
      <Filter filter={setFilter} eventHandler={handleFilter}/>
      <ContactForm add={addContact} name={newName} nameHandler={handleNameChange} 
      number={newNumber} numberHandler={handleNumberChange}/>
      <h2>Numerot</h2>
      <Contacts result={filterResult} />
    </div>
  )

}

export default App