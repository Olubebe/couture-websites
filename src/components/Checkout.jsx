import React from 'react'
import "./Cart.css"
import { Link } from 'react-router-dom';
import {useSelector} from 'react-redux'


const Checkout = () => {
  const state = useSelector((state) => state.handleCart)
 
  var total = 0
  const itemList = (item) => {
    total = total + item.qty * item.price
    return(
      <div className="totalContent">
        <p>{item.title}</p>
        <span className='price-total'>   ${item.qty * item.price}</span>
      </div>
    )
  }
  return (
    <div>
  <div className="checkoutItem container">
    <div className="row">
      <div className="col">
        <div className="formGroup">
          <label htmlFor="name">Name</label>
          <input type="text" id='name' />
          </div>
        <div className="formGroup">
          <label htmlFor="address">Address</label>
          <input type="text" id='address' />
          </div>
        <div className="formGroup">
          <label htmlFor="phone">Phone</label>
          <input type="text" id='phone' />
          </div>
          <div className="formGroup">
          <Link to="" className='checkout' >Checkout</Link>
          </div>
      </div>
      <div className="col">
        <div className="totalCart">
          <h2>Your Cart <span>{state.length}</span></h2>
          <div className="totalInfo">
           {state.map((itemList))}
          </div>
          <hr />
<div className="total">
  <h4>TOTAL:</h4>
  <span>${total}</span>
</div>
        </div>
      </div>
    </div>
  </div> 
    </div>
  )
}

export default Checkout