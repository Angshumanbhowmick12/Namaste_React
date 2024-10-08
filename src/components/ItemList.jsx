import React from 'react'
import { CDN_URL } from '../utils/constant'
import { useDispatch } from 'react-redux'
import { addItems } from '../utils/cartSlice'

const ItemList = ({items}) => {

    const dispatch=useDispatch()

    const handleAdd=(item)=>{
        dispatch(addItems(item))
    }

    // const handleRemove=(id)=>{
        
    // }

  return (
    <div>
        {items.map((item)=>(
            <div key={item.card.info.id}
            className='p-2 m-2 border-gray-200 border-b-2 text-left flex justify-between'>
                <div className='w-9/12'>
                    <div className='py-2 font-semibold'>
                        <span>{item.card.info.name}</span>
                        <span>- ₹{item.card.info.price
                                ? item.card.info.price / 100
                                : item.card.info.defaultPrice / 100}</span>
                    </div>
                    <p className='text-xs'>{item.card.info.description}</p>
                </div>
                <div className='w-3/12 p-4'>
                    <button className='p-2 lg:mx-16 rounded-lg bg-black text-white shadow-lg  sm:mx-4'
                    onClick={()=>handleAdd(item)}>Add+</button>
                    <img className='w-full sm:h-24 m-2' src={CDN_URL+ item.card.info.imageId} alt="menu-image" />
                    
                </div>
            </div>
        ))}
    </div>
  )
}

export default ItemList