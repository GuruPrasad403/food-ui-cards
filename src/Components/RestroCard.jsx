import { FaStar } from "react-icons/fa6";
// import { restaurants } from "../data/RestroData";
import RestroCards, { WithLabel } from "./RestroCards";
import { useEffect, useState } from "react";
import ShimmerUI from "./ShimmerUI";

const RestroCardWithLable = WithLabel(RestroCards)
export default function RestroCard() {
    const [restro, setRestro] = useState([]);
    const [search, setSearch] = useState("");
    const [filterData, setFilterData] = useState([]);
    const [loading, setLoading] = useState(false)
    const getData = async () => {
        setLoading(false)
        const response = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=15.1387047&lng=76.9397118&is-seo-homepage-enabled=true");
        const data = await response.json();
        console.log(data)
        setRestro(data?.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle?.restaurants)
        setFilterData(data?.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle?.restaurants)
        console.log(data?.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle?.restaurants)
        setLoading(true)
    }


    useEffect(() => {
        getData()
    }, [])
    return (
        <div className="w-full h-full flex flex-col md:mt-5 justify-around items-center">
            <div className="flex justify-center items-center gap-10 mt-5">
                <button onClick={() => {
                    setFilterData(restro);
                }}
                    className='bg-green-500 text-white p-2 rounded-md cursor-pointer'
                >
                    All Restaurants

                </button>
                <button onClick={getData}
                    className='bg-green-500 text-white p-2 rounded-md cursor-pointer'
                >
                    Get Data
                </button>

                <button onClick={() => {
                    const list = restro.filter((restro) => restro.info.avgRating > 4);
                    setFilterData(list);
                }}
                    className='bg-green-500 text-white p-2 rounded-md cursor-pointer'
                >
                    Top Rated Restaurants
                </button>
                <div className="flex justify-center items-center gap-5">
                    <input
                        className="w-60 h-10 p-2 rounded-md outline-none border-2 border-gray-300"
                        type="text" name="search" id="search"
                        value={search}
                        onChange={(e) => {
                            setSearch(e.target.value)
                        }}
                        autoComplete="off"
                    />
                    <button className="bg-yellow-500 text-white p-2 rounded-md cursor-pointer"
                        onClick={() => {
                            const list = restro.filter((ele) => ele.info.name.toLowerCase().includes(search.toLowerCase()));
                            setFilterData(list)
                        }}
                    >
                        Search</button>
                </div>
            </div>

            <div className=" flex justify-center items-center  md:gap-10 w-full h-full md:p-10">
                {loading ? <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-10">

                    {(
                        filterData.map((restro) => {
                            return (
                                restro.info.aggregatedDiscountInfoV3 ?
                                    <RestroCardWithLable
                                        id={restro.info.id}
                                        key={restro.info.id}
                                        img={restro.info.cloudinaryImageId}
                                        name={restro.info.name}
                                        rating={restro.info.avgRatingString}
                                        time={restro.info.sla.slaString}
                                        cuisine={restro.info.cuisines}
                                        location={restro.info.areaName}
                                        text = {restro.info.aggregatedDiscountInfoV3
                                        }
                                    />
                                    :
                                    <RestroCards
                                        id={restro.info.id}
                                        key={restro.info.id}
                                        img={restro.info.cloudinaryImageId}
                                        name={restro.info.name}
                                        rating={restro.info.avgRatingString}
                                        time={restro.info.sla.slaString}
                                        cuisine={restro.info.cuisines}
                                        location={restro.info.areaName}
                                        text = {restro.info.aggregatedDiscountInfoV3}
                                    />
                            );
                        }))
                    }
                </div> : <ShimmerUI />}

            </div>
        </div>
    );
}
