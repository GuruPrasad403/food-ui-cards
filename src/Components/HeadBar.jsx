import { useNavigate } from "react-router-dom";
import Head from "../utils/image.png";
import useCheckOnlineStatus from "../hooks/useCheckOnlineStatus";

export default function Head(){
    const navigate = useNavigate()
    const online = useCheckOnlineStatus()
    
    return (
        <div className="flex justify-around items-center">

            <div className="flex flex-col justify-start items-start w-20 h-20 m-2 p-5 col-span-2 md:w-full  md:h-30" >
            <img src={Head} alt="Food Logo" className="w-16 h-16 rounded-full "/>
            <span className="font-semibold w-full text-md">Food Devlivery App</span>
            </div>

            <div className="flex justify-center items-center w-20 h-20 mt-2 col-span-3 md:w-full md:h-full">
                <div className="flex justify-around  items-center space-x-4 md:space-x-6">
                <h1 className="md:text-2xl underline cursor-pointer" onClick={()=>{
                    navigate("/")
                }}>Home</h1>
                <h1 className="md:text-2xl underline cursor-pointer" onClick={()=>{
                    navigate("/about")
                }}>About</h1>
                <h1 className="md:text-2xl underline cursor-pointer" onClick={()=>{
                    navigate("/grocery")
                }}>Grocery</h1>
                <h1 className="md:text-2xl underline cursor-pointer" onClick={()=>{
                    navigate("/contact")
                }}>Contact</h1>
                
                <h1 className="md:text-2xl ">{online? <span>Online 🟢</span>: <span>Offline 🔴</span>}</h1>
                </div>
            </div>
        </div>
    )
}