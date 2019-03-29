import React from 'react'

const Contacts = ({result}) => (
    result.map(contact =>
      <li key={contact.id}>{contact.name} - {contact.number}</li>
    )
)
export default Contacts