import { useEffect, useState } from "react";
import RestroCards from "./RestroCards";
import ShimmerUI from "./ShimmerUI";

export default function Grocery(){
    const [grocery,setGrocery] = useState([])
    const [loading,setLoading] = useState(false)
    const [filterData,setFilterData] = useState([])
    const getData =async ()=>{
        setLoading(false)
        try {
            const response = await fetch("https://www.bigbasket.com/listing-svc/v2/products?type=sis&slug=2307001-buy-more-save-more&page=4")
        const data = await response.json()
        setGrocery(data)
        setFilterData(data.tabs)
        setLoading(true)
        console.log("this is the ",grocery)
        } catch (error) {
            console.log(error)
        }
    }
    // useEffect(()=>{
    //     getData()
    // },[])
    return(
        
            filterData ?( <div className=" flex justify-center items-center  md:gap-10 w-full h-full md:p-10"> 
            {loading ? <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-10">
                
                {( 
                    filterData.map((restro) => {
                        return (
                            <RestroCards
                                id ={restro.info.id} 
                                key={restro.info.id}
                                img={restro.info.cloudinaryImageId} 
                                name={restro.info.name} 
                                rating={restro.info.avgRatingString} 
                                time={restro.info.sla.slaString} 
                                cuisine={restro.info.cuisines} 
                                location={restro.info.areaName} 
                            />
                        );
                    }))
                }
            </div>: <ShimmerUI /> }
            
        </div>): <ShimmerUI />
    )

}