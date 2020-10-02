import React from 'react'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { AppState } from '../Types'
type sideBarType = {
  onToogleItem: boolean
}
const SideBar = ({ onToogleItem }: sideBarType) => {
  const classes = onToogleItem
    ? `ui sidebar overlay left inverted verical menu animating`
    : `ui sidebar overlay left inverted vertical menu animating visible`
  const { cartItem } = useSelector((state: AppState) => state.countries)

  return (
    <div className={classes}>
      {cartItem.map((item) => (
        <div className="ui items" key={item.name}>
          <div className="item">
            <div className="ui small image">
              <img src={item.flag} alt="some pic" style={{height:"30px", width:"30px"}}/>
            </div>
            <div className="middle aligned content">
              <div className="header">
                <Link to={`/countries/${item.name}`}>
                  {item.name}
                </Link>
              </div>
              <div className="description">
              <p></p>
              </div>
              <div className="extra">
                <div className="ui right floated button">Action</div>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  )
}
export default SideBar
