import React from 'react';
import { AiOutlinePlus } from 'react-icons/ai'
import { AiOutlineMinus } from 'react-icons/ai'
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { delCart } from './redux/action';
import "./Cart.css"
import { addCart } from './redux/action';


const Cart = () => {
  const state = useSelector((state) => state.handleCart)
  const dispatch = useDispatch();

  const handleButton = (item) => {
    dispatch(delCart(item))
  }
  
  const handleAdd = (item) =>{
    dispatch(addCart(item))
  }
  const handleClearAll = (item) => {
   dispatch(delCart(item, true))
  }

  const products = (product) => {
    return (
      <div>
        <div className="col" key={product.id}>
          <div className="topCol">
            <button onClick={() => handleClearAll(product)}>X</button>
          </div>
          <div className="middleCol">
            <div className="left">
              <img src={product.image} alt={product.title} />
            </div>
            <div className="right">
              <h3>{product.title}</h3>
              <div className="button-calc">
                 <button className='plus' onClick={() => handleButton(product)} ><AiOutlineMinus/></button>
                 <span className='price-tag'>{product.qty} X ${product.price} = ${product.qty * product.price}</span>
             <button className='minus' onClick={() => handleAdd(product)} ><AiOutlinePlus/></button>
              </div>
            </div>
          </div>
              <hr className='line' />
        </div>
      </div>
    )
  }

  const emptyCart = () => {
return(
   <div>
    <div className='px-4 my-5 bg-light rounded-3'>
      <div className="container py -4">
        <div className="row">
          <h3>Your Cart Is Empty</h3>
        </div>
      </div>
    </div>
   </div>
)
  }

const button = () => {
  return(
    <div>
      <div >
        <div className="col">
          <Link to="/checkout" className='checkout' >Proceed To Checkout</Link>
        </div>
      </div>
    </div>
  )
}

  return (
    <div className='cart'>
      <div className="container">
        <div className="row">

      {state.length === 0 && emptyCart()}
      {state.length !== 0 && state.map(products)}
      {state.length !== 0 && button()}
        </div>
      </div>
    </div>
  )
}

export default Cart