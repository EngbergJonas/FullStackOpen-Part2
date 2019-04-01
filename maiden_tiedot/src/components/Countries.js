import React from 'react'

const Countries = ({result}) => {
   console.log(result.length)
   if(result.length > 10){
   return(
      <p>Too many matches, specify another filter</p>
   )
   }else if(result.length > 1){
   return(
      result.map((country) =>
      <li key={country.name}>{country.name}</li>
      )
   )
   }
   return(
      result.map((country) =>
      <li key={country.name}>{country.alpha2Code}</li>
      )
   )
}
export default Countries