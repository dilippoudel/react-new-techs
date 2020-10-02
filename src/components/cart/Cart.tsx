import React from 'react'
type length = {
  length: number
  onToogle: any
}
const Cart = ({ length, onToogle }: length) => {
  return (
    <div className="ui top inverted attached menu">
      <div className="ui labeled button">
        <div className="ui primary button">
          <i className="shopping cart icon"></i>
        </div>
        <button
          onClick={onToogle}
          className="ui basic green left pointing label"
        >
          {length}
        </button>
      </div>
    </div>
  )
}
export default Cart
