import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
const contacts = [
    {
      id: 1,
      name: 'Arto Hellas',
      number: '040-123456',
      important: true
    },
    {
      id: 2,
      name: 'Rami Järvinen',
      number: '040-123456',
      important: false
    }
  ]
ReactDOM.render(<App contacts={contacts}/>, document.getElementById('root'));

