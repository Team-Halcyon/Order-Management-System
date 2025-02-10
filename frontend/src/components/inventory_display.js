// import React, { useContext } from 'react'
// import './inventory_display.css'
// import { StoreContext } from '../context/StoreContext'
// import Inventory_item from './inventory_item.js'

// function Inventory_display() {

//     const {Inventory_list} =useContext(StoreContext)

//   return (
//     <div>
//         <div className="inventory-display-list">
//             {Inventory_list.map((item,index)=>{
//             //   if(category==="All"|| category===item.category)
//                 return <Inventory_item key={index} id={item.id} name={item.name} price={item.price} image={item.image}/>
//             })}
//         </div> 
//     </div>
//   )
// }

// export default Inventory_display

import React, { useContext } from "react";
import "./inventory_display.css";
import { StoreContext } from "../context/StoreContext";
import InventoryItem from "./inventory_item.js"; // Ensure PascalCase for imports

function InventoryDisplay() {
  const { Inventory_list } = useContext(StoreContext) || { Inventory_list: [] }; // Handle potential null

  return (
    <div>
      <div className="inventory-display-list">
        {Inventory_list.map((item, index) => (
          <InventoryItem
            key={index}
            id={item.id}
            name={item.name}
            price={item.price}
            image={item.image}
          />
        ))}
      </div>
    </div>
  );
}

export default InventoryDisplay;

