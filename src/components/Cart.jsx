import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import ItemList from './ItemList'
import { clearCart } from '../utils/cartSlice'



const Cart = () => {

    const cartItems=useSelector(store=>store.cart.items)

    const dispatch=useDispatch()

    const handleClear=()=>{
        dispatch(clearCart())
    }

    console.log(cartItems)
  return (
    <div className='m-4 p-4 text-center'>
        <h1 className='font-bold'>Cart</h1>
        <div className='w-6/12 m-auto'>
        
            <button className='border bg-green-400 text-white p-2 rounded-lg m-4 shadow-lg'
            
            onClick={handleClear}>Clear Cart</button>
            {cartItems?.length===0&&(
                <h1>cart is empty. Add items to the Cart! </h1>
            )}
            <ItemList items={cartItems}/>
        
            
        </div>
    </div>
  )
}

export default Cart