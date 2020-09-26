import {
  SEARCH_COUNTRY,
  SET_PAGE_SIZE,
  SET_CURRENT_PAGE,
  FETCH_COUNTRIES,
  GET_COUNTRIES,
  SET_FILTER_COUNTRES,
  actionType,
  pageActionType,
  setCurrentPageType,
  setFetchCountry,
  setFilterCountry,
  getCountries,
} from "../types/actions-types";

import { initialState } from "../types/actions-types";



export default (
  state = initialState,
  action:
    | actionType
    | pageActionType
    | setCurrentPageType
    | setFetchCountry
    | setFilterCountry
    |getCountries
) => {
  switch (action.type) {
    case SEARCH_COUNTRY:
      return {
        ...state,
        searchKeyword: action.payload,
      };
    case SET_PAGE_SIZE:
      return {
        ...state,
        pageSize: action.payload,
      };
    case SET_CURRENT_PAGE:
      return {
        ...state,
        currentPage: action.payload,
      };
      case GET_COUNTRIES:
        return {
          ...state,
          loading:true
        };
    case FETCH_COUNTRIES:
      return {
        ...state,
        loading:false,
          countries: action.payload,
      };
    case SET_FILTER_COUNTRES:
      return {
        ...state,
        setFilterCountry: state.countries.filter((f: any) =>
          f.name.toLowerCase().includes(state.searchKeyword.toLowerCase())
        ),
      };
        
    default:
      return state;
  }
};
