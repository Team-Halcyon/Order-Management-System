import React, { useContext } from 'react'
import '../styles/cart.css'
import { StoreContext } from '../context/StoreContext'
import { useNavigate } from 'react-router-dom'

const Cart = () => {

  const {cartItem, Inventory_list, removeFromCart, getTotalCartAmount}=useContext(StoreContext)

  const navigate=useNavigate()

  return (
    <div className='cart'>
      <div className="cart-items">
        <div className="cart-items-title">
          <p>Items</p>
          <p>Title</p>
          <p>Price</p>
          <p>Quantity</p>
          <p>Total</p>
          <p>Remove</p>
        </div>
        <br />
        <hr />
        {Inventory_list.map((item,index)=>{
          if(cartItem[item.id]>0){
            return(
              <>
              <div className="cart-items-title cart-item-item">
                <img src={item.image} alt="" />
                <p>{item.name}</p>
                <p>$ {item.price}</p>
                <p>{ cartItem[item._id] }</p>
                <p>$ {item.price*cartItem[item._id]}</p>
                <p onClick={()=>removeFromCart(item._id)} className='cross'>x</p>
              </div>
              <hr />
              </>
            )
          } else{
            <div>No cart items</div>
          }
        })}
      </div>
      <div className="cart-bottom">
        <div className="cart-total">
          <h2>Cart Total</h2>
          <div>
            <div className="cart-total-details">
              <p>Subtotal</p>
              <p>$ {getTotalCartAmount()}</p>
            </div>
            <hr />
            <div className="cart-total-details">
              <p>Delivery Fee</p>
              <p>$ {getTotalCartAmount()===0?0:2}</p>
            </div>
            <hr />
            <div className="cart-total-details">
              <p>Total</p>
              <b>$ {getTotalCartAmount()===0?0:getTotalCartAmount()+2}</b>
            </div>
          </div>
          <button onClick={()=>navigate('/order')}>Proceed To Payment</button>
        </div>
        <div className="cart-promocode">
          <p>If you have a promocode,enter it here</p>
          <div className="cart-promocode-input">
            <input type="text" placeholder='promocode' />
            <button>Submit</button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Cart;
