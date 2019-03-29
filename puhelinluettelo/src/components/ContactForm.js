import React from 'react'

const ContactForm = (props) => (
    <form onSubmit={props.add}>
    <h3>Lisää uusi</h3>
    <div>
      Nimi: 
      <input 
      value={props.name}
      onChange={props.nameHandler}
      />
    </div>
    <div>
      Numero: 
      <input 
      value={props.number}
      onChange={props.numberHandler}
      />
    </div>
    <div>
    <button type="submit">lisää</button>
    </div>
  </form>
  )

export default ContactForm