import React, { useEffect } from 'react';
import SearchBar from './components/searchBar/SearchBar';
import { getCountries, setFilterCountry } from './redux/actions';
import {useDispatch} from 'react-redux'
import Loading from './components/initial-view/Loading';
import TableRow from './components/table/TableRow'
const App = () => {
const dispatch = useDispatch()
   useEffect(()=> {
    dispatch(getCountries())
   },[dispatch])
   useEffect(()=>{
    dispatch(setFilterCountry());
   },[dispatch])
    return(
        <div className="container ui" style={{marginTop:"20px"}}>
        <SearchBar/>
            <button onClick={() => {
                dispatch(getCountries());
                dispatch(setFilterCountry());
                }}>
                Press to see news</button>
            <Loading/>
            <TableRow/>
        </div>
    )
}
export default App;