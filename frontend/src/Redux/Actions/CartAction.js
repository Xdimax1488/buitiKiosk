import axios from "axios"
import { CART_ADD_ITEM, CART_REMOVE_ITEM } from "../Constans/CartConstans"


export const addToCart = (id,qty)=> async (dispatch,getState) => {
    const {data} = await axios.get(`/api/products/${id}`)

    dispatch({
        type: CART_ADD_ITEM,
        payload:{
            product: data._id,
            name: data.name,
            image: data.image,
            price: data.price,
            countInstok:data.countInstok,
            qty,
        }
    })
    localStorage.setItem('cartItems', JSON.stringify(getState().cart.cartItems))
}

//Remove droduct from cart

export const removeFromCart = (id) =>(dispatch,getState)=>{
    dispatch({
        type:CART_REMOVE_ITEM,
        payload:id,
    })
    localStorage.setItem('cartItems', JSON.stringify(getState().cart.cartItems))
}