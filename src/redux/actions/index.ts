import { 
    SEARCH_COUNTRY,
    SET_PAGE_SIZE,
    SET_CURRENT_PAGE,
    FETCH_COUNTRIES,
    SET_FILTER_COUNTRES, GET_COUNTRIES 
} from '../types/actions-types';
export const searchCountry = (payload:string) => {
    return {
        type:SEARCH_COUNTRY,
        payload:payload
    }
}
export const setPageSize = (payload:number) => {
    return {
        type: SET_PAGE_SIZE,
        payload: payload
    }
}
export const setCurrentPage = (payload:number) => {
    return {
        type: SET_CURRENT_PAGE,
        payload: payload
    }
}
export const setFetchCountry = (payload:any) => {
    return{
        type: FETCH_COUNTRIES,
        payload: payload
    }
}

export const getCountries = () => {
    return {
        type: GET_COUNTRIES
    }
}
export const setFilterCountry = ()=> {
    return{
        type:SET_FILTER_COUNTRES,
    }
}
