import React from 'react'
import 'semantic-ui-css/semantic.min.css'
import { Input } from 'semantic-ui-react'
import { useDispatch } from 'react-redux'
import { searchCountry } from '../../redux/actions/index'
const SearchBar = () => {
  const dispatch = useDispatch()
  const handlChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    dispatch(searchCountry(event.target.value))
  }
  // initialize with initial payload
  return (
    <Input fluid icon="search" placeholder="Search..." onChange={handlChange} />
  )
}
export default SearchBar
