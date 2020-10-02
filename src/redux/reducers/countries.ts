import { SEARCH_COUNTRY } from './../../components/Types/index'
import {
  FETCH_COUNTRIES,
  CountriesActions,
  CountryState,
  ADD_COUNTRY,
  REMOVE_COUNTRY,
} from '../../components/Types/index'

export default function countries(
  state: CountryState = {
    itemCountries: [],
    itemFilter: [],
    cartItem: [],
  },
  action: CountriesActions
): CountryState {
  switch (action.type) {
  case FETCH_COUNTRIES: {
    const { countries } = action.payload
    return {
      ...state,
      itemCountries: countries,
      itemFilter: countries,
      cartItem: [],
    }
  }
  case ADD_COUNTRY: {
    const { country } = action.payload
    if (state.cartItem.find((item) => item.name === country.name)) {
      return state
    }
    return { ...state, cartItem: [...state.cartItem, country] }
  }
  case REMOVE_COUNTRY: {
    const { country } = action.payload
    const items = state.cartItem.findIndex((e) => e.name === country.name)
    if (items) {
      state.cartItem.splice(items, 1)
      return { ...state, cartItem: [...state.cartItem] }
    }

    return state
  }

  case SEARCH_COUNTRY: {
    const { keyword } = action.payload
    console.log(keyword)
    return {
      ...state,
      itemFilter: state.itemCountries.filter((c) =>
        c.name.toLowerCase().includes(keyword.toLowerCase())
      ),
    }
  }

  default:
    return state
  }
}
