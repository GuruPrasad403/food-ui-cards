import { FaStar } from "react-icons/fa6";
import { restaurants } from "../data/RestroData";
import RestroCards from "./RestroCards";
import { useState } from "react";

export default function RestroCard() {
    const [restro, setRestro] = useState(restaurants);
    return (
        <div className="container mx-auto p-5">
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5">
                {
                    restro.map((restro) => {
                        return (
                            <RestroCards 
                                key={restro.info.id}
                                img={restro.info.cloudinaryImageId} 
                                name={restro.info.name} 
                                rating={restro.info.avgRatingString} 
                                time={restro.info.sla.slaString} 
                                cuisine={restro.info.cuisines} 
                                location={restro.info.areaName} 
                            />
                        );
                    })
                }
            </div>
        </div>
    );
}