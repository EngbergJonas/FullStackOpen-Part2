import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
const contacts = [
    {
      id: 1,
      name: 'Jonas Engberg',
    },
    {
      id: 2,
      name: 'Niklas Pimenoff',
    }
  ]
ReactDOM.render(<App contacts={contacts}/>, document.getElementById('root'));

