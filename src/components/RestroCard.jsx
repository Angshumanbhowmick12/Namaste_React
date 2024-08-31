import React from 'react'

const RestroCard=(props)=>{
    const{resData}=props

    const {name,cuisines,avgRating,cloudinaryImageId,sla}= resData?.info

 
    return(
        <div className="res-card">
            <img className="res-logo" alt="res-logo" src={"https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/"+cloudinaryImageId}/>
            <h3>{name}</h3>
            <p>{cuisines.join(", ")}</p>
            <h4>{avgRating}⭐</h4>
            <p>{sla.deliveryTime} minitues</p>
        </div>
    )
}

export default RestroCard