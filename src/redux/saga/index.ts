import {put, takeLatest, all} from 'redux-saga/effects';
import { GET_COUNTRIES,FETCH_COUNTRIES } from '../types/actions-types';

function* fetchCountry(){
    try {
        const data = yield fetch('https://restcountries.eu/rest/v2/all').then(res=>res.json())
        
        yield localStorage.setItem('countries',JSON.stringify(data))
        const localData = yield localStorage.getItem('countries')
        const result = yield JSON.parse(localData)
        yield put({type:FETCH_COUNTRIES, payload:result });
    } catch (e) {
        console.log(e)
    }
    

}
function * actionWatcher(){
    yield takeLatest(GET_COUNTRIES, fetchCountry)
}
export default function* rootSaga(){
    yield all([
        actionWatcher(),
    ])
}