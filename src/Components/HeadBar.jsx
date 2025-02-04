import Head from "../utils/image.png";

export default function Head(){
    return (
        <div className="grid grid-cols-5  shadow-xl bg-white ">
            <div className="flex flex-col justify-center items-center w-20 h-20 m-2 p-5 col-span-2 md:w-full  md:h-30" >
            <img src={Head} alt="Food Logo" className="w-16 h-16 rounded-full md:w-24 md:h-24"/>
            <h1 className="font-semibold">Food Devlivery App</h1>
            </div>
            <div className="flex justify-center items-center w-20 h-20 mt-2 col-span-3 md:w-full md:h-full">
                <div className="flex justify-around  items-center space-x-4 md:space-x-6">
                <h1 className="md:text-2xl underline cursor-pointer">Home</h1>
                <h1 className="md:text-2xl underline cursor-pointer">About</h1>
                <h1 className="md:text-2xl underline cursor-pointer">Hotels</h1>
                <h1 className="md:text-2xl underline cursor-pointer">Contact</h1>
                </div>
            </div>
        </div>
    )
}