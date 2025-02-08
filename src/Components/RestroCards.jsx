import { FaStar } from "react-icons/fa6";
import { useNavigate } from "react-router-dom";

export default function RestroCards({id,img, name, rating, time, cuisine, location,text}) {
    const navigate = useNavigate()
    return (
        <div className={`col-span-1 bg-white flex flex-col justofy-around w-96 cursor-pointer  rounded-xl ${!text && "hover:transform hover:scale-90 transition" }`}
        onClick={()=>{
            navigate(`/restaurants/${id}`)
        }}
        >
            <div className="flex justify-center items-center w-full h-72 rounded-lg ">
                <img src={`https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/${img}`}
                    alt="Food Item Image" 
                    className="w-full h-full rounded-2xl" />

            </div>
            <div className="flex flex-col justify-around items-start p-4 gap-[1px]">
                <h1 className="text-2xl font-semibold">{name}</h1>
                <div className="flex justify-start gap-5 items-center w-full">
                    <div className="flex  items-center gap-2 font-semibold">
                        <div className=" p-1 bg-green-500 text-white rounded-full">
                            <FaStar />
                        </div>
                        {rating}</div>
                    <p className="font-semibold">{time}</p>
                </div>
                <p className="text-gray-500 text-md ">{cuisine.slice(0,3).join(", ")}</p>
                <p className="text-gray-500 text-md">{location}</p>
            </div>
        </div>
    )
}


export const WithLabel = (RestroCards)=>{
    return (props)=>{
        const {text} = props
        console.log(props)
        return(    
        <div className="relative hover:transform hover:scale-90 transition">
            <div className={`absolute z-99  text-white font-bold text-2xl w-full text-center px-10 top-58 py-3 rounded-b-xl bg-linear-to-b  from-zinc-200 to-black bg-transparent opacity-90`}>
            {text.header +" "+ text.subHeader}
            </div>
            <RestroCards 
             {...props} 
            />
        </div>
    )
    }
}