import React, {useState, useEffect} from 'react'
import axios from 'axios'
import Filter from './components/Filter'
import Countries from './components/Countries'


const App = () => {
    const [countries, setCountries] = useState([])
    const [setFilter, setNewFilter] = useState('')

    const hook = () => {
      console.log('effect')
        axios
          .get('https://restcountries.eu/rest/v2/all')
          .then(response => {
            console.log('promise fulfilled')
            setCountries(response.data)
          })
      }


    useEffect(hook, [])

    const filterResult = countries.filter(
        country => country.name.toLowerCase().includes(
          setFilter.toLowerCase()
        )
      )

    console.log(filterResult.length)

    const handleFilter = (event) => {
        setNewFilter(event.target.value)
    }

    return (
        <div>
            <h1>Maiden tiedot</h1>
            <Filter filter={setFilter} eventHandler={handleFilter}/>
            <Countries result={filterResult} />
        </div>
    )
}
export default App