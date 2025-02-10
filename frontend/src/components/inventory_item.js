import React, { useContext } from 'react';
import "./inventory_item.css";
import { assets } from "../assets/assets.js";
import { StoreContext } from '../context/StoreContext';


function Inventory_item({ id, name, price, image }) {
  const { cartItem, addToCart, removeFromCart } = useContext(StoreContext);

  const handleAddToCart = () => addToCart(id);
  const handleRemoveFromCart = () => removeFromCart(id);

  return (
    <div className='inventory-item'>
      <div className="inventory-item-image-container">
        <img className='inventory-item-image' src={image} alt={name} />
        
        {/* Conditional rendering for add/remove item from cart */}
        {
          !cartItem[id]
            ? <img className='add' alt='Add to cart' onClick={handleAddToCart} src={assets.add_icon_white} />
            : (
              <div className='inventory-item-counter'>
                <img alt='Remove from cart' onClick={handleRemoveFromCart} src={assets.remove_icon_red} />
                <p>{cartItem[id]}</p>
                <img alt='Add more to cart' onClick={handleAddToCart} src={assets.add_icon_green} />
              </div>
            )
        }
      </div>

      <div className="inventory-item-info">
        <div className="inventory-item-name-rating">
          <p>{name}</p>
        </div>
        <p className='inventory-item-price'>${price}</p>
      </div>
    </div>
  );
}

export default Inventory_item;
