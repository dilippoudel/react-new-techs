import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import Flag from '../Flag'
import { AppState } from '../Types'
import TableCell from './TableCell'
import { addItem } from '../../redux/actions'
import { Link } from 'react-router-dom'

const TableHeader = () => {
  const { itemFilter, cartItem } = useSelector(
    (state: AppState) => state.countries
  )
  const dispatch = useDispatch()
  const headers = [
    'Flag',
    'Name',
    'Languages',
    'Population',
    'Capital',
    'Region',
  ]
  return (
    <table className="table">
      <thead>
        <tr>
          {headers.map((header) => (
            <TableCell name={header} key={header} />
          ))}
          <th></th>
        </tr>
      </thead>
      <tbody>
        {itemFilter.map((item) => (
          <tr key={item.name}>
            <td>
              <Flag imgURL={item.flag} />
            </td>
            <td>
              <Link to={`/countries/${item.name}`}>{item.name}</Link>
            </td>
            <td>
              {item.languages.map((i) => (
                <ul key={i.name} style={{ listStyle: 'none' }}>
                  <li>{i.name}</li>
                </ul>
              ))}
            </td>
            <td>{item.population}</td>
            <td>{item.capital}</td>
            <td>{item.region}</td>
            <td>
              <button
                className="btn btn-primary m-2"
                disabled={
                  cartItem.find((cart) => cart.name === item.name) ? true : false
                }
                onClick={() => dispatch(addItem(item))}
              >
                Add
              </button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  )
}
export default TableHeader
