import { useEffect } from "react"
import { useParams } from "react-router-dom"

export default function RestroMainPage(){
    const {resId} = useParams()

    const getData = async()=>{
        if (!resId) 
            return console.log("No ResID ", resId)
        const response = await fetch(`https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=12.9352403&lng=77.624532&restaurantId=${resId}`)
        const data = await response.json()
        // console.log(data.data.cards[2].card.card.info)
        console.log(data.data)
    }
    useEffect(()=>{
        getData()
    }, [])
    return(
        <h1>The Restro id is : {resId}</h1>
    )
}