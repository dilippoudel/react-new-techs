import { createStore, applyMiddleware } from 'redux'
import createSagaMiddleware from 'redux-saga'
import thunk from 'redux-thunk'

import { composeWithDevTools } from 'redux-devtools-extension'

import { AppState } from '../components/Types/index'
import createRootReducer from '../redux/reducers'
import rootSaga from './sagas'

const initState: AppState = {
  countries: {
    itemCountries: [],
    itemFilter: [],
    cartItem: [],
  },
}

export default function makeStore(initialState = initState) {
  const sagaMiddleware = createSagaMiddleware()
  const middlewares = [sagaMiddleware, thunk]
  // let composeEnhancers = compose

  const localStorageState = localStorage.getItem('save-data')
  if (localStorageState) {
    initialState = JSON.parse(localStorageState)
    console.log('initial State inside store', initialState)
  }

  const store = createStore(
    createRootReducer(),
    initialState,
    composeWithDevTools(applyMiddleware(...middlewares))
  )

  sagaMiddleware.run(rootSaga)

  if ((module as any).hot) {
    ;(module as any).hot.accept('./reducers', () => {
      const nextReducer = require('./reducers').default
      store.replaceReducer(nextReducer)
    })
  }

  return store
}
