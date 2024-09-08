import React from 'react'
import { CDN_URL } from '../utils/constant.js'

const RestroCard=(props)=>{
    const{resData}=props

    const {name,cuisines,avgRating,cloudinaryImageId,sla}= resData?.info

 
    return(
        <div className="m-4 p-4 w-[250px] rounded-lg bg-gray-100 hover:bg-gray-200">
            <img className="rounded-lg" alt="res-logo" src={CDN_URL+cloudinaryImageId}/>
            <h3 className='font-bold py-4 text-lg'>{name}</h3>
            <p>{cuisines.join(", ")}</p>
            <h4>{avgRating}⭐</h4>
            <p>{sla.deliveryTime} minitues</p>
        </div>
    )
}

export const offersFood=(RestroCard)=>{
    return ()=>{
        return(
            <div>
                <RestroCard {...props}/>
                <label><span>{resData?.info?.aggregatedDiscountInfoV3[0]}</span> <span>{resData?.info?.aggregatedDiscountInfoV3[1]}</span></label>
            </div>
            
        )
    }
}

export default RestroCard