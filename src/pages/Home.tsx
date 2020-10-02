import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'semantic-ui-css/semantic.min.css'
import { AppState } from '../components/Types/index'
import { fetchData } from '../redux/actions'
import Loader from '../components/spinner/Loader'
import Cart from '../components/cart/Cart'
import SideBar from '../components/sideBar/SideBar'
import Main from '../components'
const Home = () => {
  const [toogle, setToogle] = useState(true)
  const onToogleMenu = () => {
    setToogle(!toogle)
  }

  const dispatch = useDispatch()
  const { itemCountries, cartItem } = useSelector(
    (state: AppState) => state.countries
  )
  const classes = toogle ? `pusher bottom` : `pusher bottom dimmed`

  if (itemCountries.length === 0) {
    dispatch(fetchData())
    return <Loader />
  }
  return (
    <div>
      <Cart length={cartItem.length} onToogle={onToogleMenu} />
      <div className="ui attached pushable" style={{ height: '100vh' }}>
        <SideBar onToogleItem={toogle} />
        <div className={classes} style={{ marginTop: '30px' }}>
          <Main />
        </div>
      </div>
    </div>
  )
}
export default Home
