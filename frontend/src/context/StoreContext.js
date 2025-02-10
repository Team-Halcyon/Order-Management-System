import { createContext,useState } from "react";
import { Inventory_list } from "../assets/assets.js";


export const StoreContext=createContext(null)

const StoreContextProvider =(props)=>{

    const [cartItem, setCartItem] = useState({});

    const addToCart = (itemId)=>{
        if (!cartItem[itemId]){
            setCartItem((prev)=>({...prev,[itemId]:1}))
        }
        else{
            setCartItem((prev)=>({...prev,[itemId]:prev[itemId]+1}))
        }
    }

    const removeFromCart=(itemId)=>{
        setCartItem((prev)=>({...prev,[itemId]:prev[itemId]-1}))
    }

    const getTotalCartAmount =()=>{
        let totalAmount=0;
        for (const item in cartItem){
            if (cartItem[item]>0){
                let itemInfo= Inventory_list.find((product)=>product.id===item);
                totalAmount+=itemInfo.price*cartItem[item];
            }
        }
        return totalAmount;
    }


    const contexValue ={
        Inventory_list,
        cartItem,
        setCartItem,
        addToCart,
        removeFromCart,
        getTotalCartAmount
    }
    return(
        <StoreContext.Provider value={contexValue}>
            {props.children}
        </StoreContext.Provider>
    )
}

export default StoreContextProvider;