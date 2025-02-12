

import React from 'react';
import { inventory_list } from '../assets/assets';
import "./inventory_item.css";
import { assets } from "../assets/assets.js";
import { useState } from 'react';

function Inventory_item() {

  const [cart, setCart] = useState([]); 

  const addToCart=(itemID)=>{
    if (!cart[itemID]){
      setCart((prev)=>({...prev,[itemID]:1}))
    }
    else{
      setCart((prev)=>({...prev,[itemID]:prev[itemID]+1}))
    }
  }
  const removeFromCart=(itemID)=>{
    setCart((prev)=>({...prev,[itemID]:prev[itemID]-1}))
  }

  return (
    <div className='shop'>
      <div className='inventory-item-container'>
        {inventory_list.map((item, index) => (
            <div key={index} className='inventory-item'>
              <div className='inventory-item-image-container'>
                <img src={item.image} alt={item.name} className='inventory-item-image' />
                {
                  !cart[item.id]
                    ? <img className='add' alt='Add to cart' onClick={()=>addToCart(item.id)} src={assets.add_icon_white} />
                    : (
                      <div className='inventory-item-counter'>
                        <img alt='Remove from cart' onClick={()=>removeFromCart(item.id)} src={assets.remove_icon_red} />
                        <p>{cart[item.id]}</p>
                        <img alt='Add more to cart' onClick={()=>addToCart(item.id)} src={assets.add_icon_green} />
                      </div>
                    )
                }

              </div>
              <div className="inventory-item-info">
                <div className="inventory-item-name">
                  <p>{item.name}</p>
                </div>
                <p className='inventory-item-price'>$ {item.price}</p>
              </div>
            </div>
        ))}
      </div>
    </div>

  )
}

export default Inventory_item


