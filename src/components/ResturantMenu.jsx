
import ShimmerUi from './ShimmerUi'
import { useParams } from 'react-router-dom'

import useRestroMenu from '../utils/useRestroMenu'

const ResturantMenu = () => {

    // const [resDetail,setResDetail]=useState(null)

     const{restid}=useParams()

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
    

    
    
  return (
    <div>
        <div>
            <h2>{name}</h2>
            <h3>{avgRating}⭐</h3>
            <p>{city}</p>
            <p>{cuisines.join(',')}</p>
            <h4>{costForTwoMessage}</h4>
        </div>
        <div>
            <h2>Menu</h2>
            
        
            <ul >
                
                 {itemCards.map(item => <li key={item.card.info.id}>{item.card.info.name} -  Rs.{item.card.info.price / 100}</li> )}
            
                
            </ul>
        </div>
    </div>
  )
}

export default ResturantMenu