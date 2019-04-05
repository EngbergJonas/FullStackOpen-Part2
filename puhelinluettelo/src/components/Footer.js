import React from 'react'

const Footer = () => {
    const footerStyle = {
      color: "green",
      fontStyle: "italic",
      fontSize: 16,
      paddingBottom: 10
    };
    return (
      <div style={footerStyle}>
        <br />
        <em>Phonebook app, Jonas Engberg 2019</em>
      </div>
    );
  };

export default Footer