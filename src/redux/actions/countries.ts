import { Dispatch } from 'redux'
import {
  SEARCH_COUNTRY,
  FETCH_COUNTRIES,
  ADD_COUNTRY,
  REMOVE_COUNTRY,
  Country,
  CountriesActions,
} from '../../components/Types/index'

export const searchCountry = (keyword: string): CountriesActions => {
  return {
    type: SEARCH_COUNTRY,
    payload: { keyword },
  }
}

export const setFetchCountry = (countries: Country[]): CountriesActions => {
  return {
    type: FETCH_COUNTRIES,
    payload: {
      countries, // i need this on to assign later on
    },
  }
}

export const addItem = (country: Country): CountriesActions => {
  return {
    type: ADD_COUNTRY,
    payload: {
      country,
    },
  }
}
export const deleteItem = (country: Country): CountriesActions => {
  return {
    type: REMOVE_COUNTRY,
    payload: {
      country,
    },
  }
}

// using here  thuk  later we can inject  your saga as as well
// we can now seclect this data from anywhere ....
export function fetchData() {
  return (dispatch: Dispatch) => {
    return fetch('http://restcountries.eu/rest/v2/all')
      .then((res) => res.json())
      .then((countries) => {
        dispatch(setFetchCountry(countries)) //  any object is in (arg)
      })
      .catch((err) => console.log(err))
  }
}
