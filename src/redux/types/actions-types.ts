export const SEARCH_COUNTRY = 'SEARCH_COUNTRY';
export const SET_PAGE_SIZE ='SET_PAGE_SIZE';
export const SET_CURRENT_PAGE = 'SET_CURRENT_PAGE';
export const FETCH_COUNTRIES = 'FETCH_COUNTRIES';
export const SET_FILTER_COUNTRES = 'SET_FILTER_COUNTRIES'
export const GET_COUNTRIES = 'GET_COUNTRIES'
export const SET_DIRECTION = 'SET_DIRECTION';

// reducers type



// type of payload
export type searchType = {
    searchKeyword: string,
    pageSize:number,
    currentPage:number,
    countries:any[],
    loading:boolean,
    column: any,
    deirection: any,
}
// initial state
export const initialState:searchType= {
    searchKeyword: "",
    pageSize:20,
    currentPage:1,
    countries:[],
    loading: false,
    column: null,
    deirection:null,
}

type CountryState = {
    searchKeyword: string,
    pageSize:number,
    currentPage:number,
    countries:any[],
    loading:boolean,
    column: any,
    deirection: any,
}

export type AppState = {
    countryReducer: CountryState
}
// type of action

export type Country ={
    name:string
    flag:string
    population:string

    
}

export type actionType = {
    type:typeof SEARCH_COUNTRY,
    payload:string,
}
export type pageActionType = {
    type: typeof SET_PAGE_SIZE,
    payload: number
}
export type setCurrentPageType = {
    type: typeof SET_CURRENT_PAGE,
    payload:number
}
export type setFetchCountry = {
    type: typeof FETCH_COUNTRIES,
    payload:{
        countries:Country []
    }
}

export type getCountries = {
    type: typeof GET_COUNTRIES,
}

export type setFilterCountry= {
    type : typeof SET_FILTER_COUNTRES,
}
export type setDirection = {
    type: typeof SET_DIRECTION
    payload: any
}

// export type CombineActions= {    
   
// }

// export type CountryState ={
//     countriesItem:Country[]
// }
// export type AppSate ={
//     countries:CountryState
// }