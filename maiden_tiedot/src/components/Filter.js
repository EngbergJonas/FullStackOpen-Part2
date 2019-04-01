import React from 'react'

const Filter = ({filter, eventHandler}) => (
    <div>
    Rajaa näytettäviä: 
    <input 
    value={filter}
    onChange={eventHandler}
    />
    </div>
)

export default Filter