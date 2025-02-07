import { useNavigate, useRouteError } from "react-router-dom"
import image from "../assets/image.png"
import { useEffect } from "react"
export default function ErrorPage(){
    const navigate = useNavigate()
    const err = useRouteError()
useEffect(()=>{
    setTimeout(()=>{
        navigate("/")
    }, 5000)
}, [])
    return(
            <div className =  "grid gird-cols-1 gird-rows-3 place-items-center w-screen h-screen">
                <img src={image} alt="404 Image " />
                <h1>Status : {err?.status} and The route {err?.statusText} </h1>
                <p>{err?.data} and you will be navigated to the Home Page</p>
            </div>
 
    )
}