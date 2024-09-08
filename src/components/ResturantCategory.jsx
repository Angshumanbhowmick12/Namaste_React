import React from 'react'
import ItemList from './ItemList'
import { useState } from 'react'

const ResturantCategory = ({data,showItems,setShowIndex}) => {

   //const [showItems, setShowItems] = useState(false)

    const handleClick=()=>{
       // setShowItems(!showItems)

       setShowIndex()

      
        
    }    
  return (
    <div>
        <div className='w-6/12 mx-auto my-4 bg-gray-100 shadow-lg p-4 cursor-pointer'>
            <div className='flex justify-between' onClick={handleClick}>
                <span>{data.title}({data.itemCards.length})</span>
                {showItems == true ? <span>🔼</span>: <span>🔽</span>}
            </div>

          {showItems &&  <ItemList items={data.itemCards}/>}
        </div>
    </div>
  )
}

export default ResturantCategory