export const SEARCH_COUNTRY = 'SEARCH_COUNTRY'
export const SET_PAGE_SIZE = 'SET_PAGE_SIZE'
export const SET_CURRENT_PAGE = 'SET_CURRENT_PAGE'
export const FETCH_COUNTRIES = 'FETCH_COUNTRIES'
export const SET_FILTER_COUNTRES = 'SET_FILTER_COUNTRIES'
export const GET_COUNTRIES = 'GET_COUNTRIES'
export const SET_DIRECTION = 'SET_DIRECTION'
export const REMOVE_COUNTRY = 'REMOVE_COUNTRY'
export const ADD_COUNTRY = 'ADD_COUNTRY'

// reducers type

// type of payload
export type searchType = {
  searchKeyword: string
  pageSize: number
  currentPage: number
  countries: any[]
  loading: boolean
}
// types of reducers

export type flagProps = {
  imgURL: string
}
export type tableProps = {
  countries: Country[]
}
export type Language = {
  name: string
}
export type tableHeaderProps = {
  name: string
}

export type Country = {
  name: string
  flag: string
  languages: Language[]
  region: string
  nativeName: string
  capital: string
  population: string
}

export type searchCountryByName = {
  type: typeof SEARCH_COUNTRY
  payload: {
    keyword: string
  }
}
export type pageActionType = {
  type: typeof SET_PAGE_SIZE
  payload: number
}
export type setCurrentPageType = {
  type: typeof SET_CURRENT_PAGE
  payload: number
}
export type setFetchCountry = {
  type: typeof FETCH_COUNTRIES
  payload: {
    countries: Country[]
  }
}

export type getCountries = {
  type: typeof GET_COUNTRIES
}

export type setFilterCountry = {
  type: typeof SET_FILTER_COUNTRES
}

export type addCountry = {
  type: typeof ADD_COUNTRY
  payload: {
    country: Country
  }
}
export type removeCountry = {
  type: typeof REMOVE_COUNTRY
  payload: {
    country: Country
  }
}

export type CountriesActions =
  | searchCountryByName
  | setFetchCountry
  | setFilterCountry
  | getCountries
  | addCountry
  | removeCountry

export type CountryState = {
  itemCountries: Country[]
  itemFilter: Country[]
  cartItem: Country[]
}
export type AppState = {
  countries: CountryState
}

// types for table Row
export type tableRowProps = {
  country: Country
}
