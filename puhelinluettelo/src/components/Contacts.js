import React from "react";

const Contacts = ({ result, toggleDelete }) =>
  result.map(contact => (
    <li className='note' key={contact.id}>
      {contact.name} - {contact.number}
      <button onClick={() => toggleDelete(contact.id)}>Delete</button>
    </li>
  ));
export default Contacts;
