import React from 'react'
import { useSelector } from 'react-redux'
import { AppState } from '../Types'
type cardsType = {
  name: string
  history: any
}
const Cards = ({ name, history }: cardsType) => {
  const { itemCountries } = useSelector((state: AppState) => state.countries)
  const data = itemCountries.find((f) => name === f.name)
  const languages = data?.languages.map((language) => (
    <li key={language.name} style={{ listStyle: 'none' }}>
      {language.name}
    </li>
  ))
  return (
    <div
      className="ui card container"
      style={{ marginTop: '30px', padding: 0 }}
    >
      <div className="image">
        <img src={data?.flag} alt="" />
      </div>
      <div className="content">
        <span className="header">{data?.name}</span>
        <div className="meta">
          <span className="date"> Population: {data?.population}</span>
        </div>
        <span className="list">
          Languages:
          <ul>{languages}</ul>
        </span>
      </div>
      <button className="ui primary button" onClick={() => history.push('/')}>
        Back
      </button>
    </div>
  )
}
export default Cards
