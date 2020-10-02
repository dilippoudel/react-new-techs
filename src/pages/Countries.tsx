import React from 'react'
import Cards from '../components/cards-country/SingleCountry'
const Countries = ({ match, history }: any) => {
  return (
    <div>
      <Cards name={match.params.name}  history={history}/>
    </div>
  )
}
export default Countries
