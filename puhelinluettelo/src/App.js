import React, { useState } from 'react'
import Contacts from './components/Contacts'

const App = (props) => {
  const [ persons, setPersons] = useState(props.contacts) 
  const [ newName, setNewName ] = useState('')

  const rows = () => persons.map(contact =>
    <Contacts 
    key={contact.id}
    contact={contact}
    />
  )

  const addContact = (event) => {
    event.preventDefault()
    const contactObject = {
      name: newName,
      id: persons.length + 1,
    }
    setPersons(persons.concat(contactObject))
    setNewName('')
  }

  const handleContactChange = (event) => {
    console.log(event.target.value)
    setNewName(event.target.value)
  }


  return (
    <div>
      <h2>Puhelinluettelo</h2>
      <form onSubmit={addContact}>
        <div>
          nimi: <input 
          value={newName}
          onChange={handleContactChange}
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