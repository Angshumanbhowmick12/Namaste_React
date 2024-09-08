
import ShimmerUi from './ShimmerUi'
import { useParams } from 'react-router-dom'

import useRestroMenu from '../utils/useRestroMenu'
import ResturantCategory from './ResturantCategory'
import { useState } from 'react'

const ResturantMenu = () => {

    // const [resDetail,setResDetail]=useState(null)

     const{restid}=useParams()
     const [showIndex, setShowIndex] = useState(null)

    // useEffect(()=>{
    //     fetchData();
    // },[])

    // const fetchData= async () =>{
    //         const data = await fetch(Menu_Api+ restid)

    //         const Json = await data.json();

    //        console.log(Json)
    //         setResDetail(Json.data)
    // };

    const resDetail = useRestroMenu(restid)
    


    if (resDetail === null) {
        return <ShimmerUi/>
    }
    

    const{name,avgRating,cuisines,costForTwoMessage,city}=resDetail?.cards[2]?.card?.card?.info

    const {itemCards}=resDetail?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[4]?.card?.card
    
    const categories=resDetail?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter(c=> c.card?.card?.['@type']===
"type.googleapis.com/swiggy.presentation.food.v2.ItemCategory" )
    
    console.log(categories);
    
    
    
  return (
    
        <div className='text-center'>
            <h2 className='font-bold my-6 text-2xl'>{name}</h2>
            <h3>{avgRating}⭐</h3>
            <p>{city}</p>
            <p className='font-bold text-lg'>{cuisines.join(',')} -{costForTwoMessage}</p>
            
            {/* categories items */}

            {categories.map((category,index)=>(
                // controlled component
                <ResturantCategory
                 data={category?.card?.card}
                 key={category?.card?.card}
                 showItems={index === showIndex}
                 setShowIndex={()=>setShowIndex(showIndex===index ? null :index)}
                />
            ))}
        </div>
        

  )
}

export default ResturantMenu