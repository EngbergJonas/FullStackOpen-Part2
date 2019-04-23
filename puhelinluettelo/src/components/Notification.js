import React from 'react'

const Notification = ({ message }) => {
  const notificationStyle = {
    marginRight: 10,
    marginBottom: 10,
    padding: 10,
    fontSize: 16,
    border: '5px solid green',
    borderRadius: 10
  }
  if (message === null) {
    return null
  }
  return <div style={notificationStyle}>{message}</div>
}

export default Notification
